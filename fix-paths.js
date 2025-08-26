const fs = require('fs');
const path = require('path');

function fixPathsInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  // Reemplazar rutas absolutas por relativas
  const replacements = [
    // Next.js assets - Asegurar rutas relativas
    { from: /href="\/_next\//g, to: 'href="./_next/' },
    { from: /src="\/_next\//g, to: 'src="./_next/' },
    { from: /url\(\/_next\//g, to: 'url(./_next/' },
    { from: /href="\/\_next\//g, to: 'href="./_next/' },
    { from: /src="\/\_next\//g, to: 'src="./_next/' },
    
    // Rutas a archivos estáticos
    { from: /src="\/([^"\/][^"]*\.(png|jpg|jpeg|gif|svg|webp|ico|glb|gltf))"/g, to: 'src="./$1"' },
    { from: /href="\/([^"\/][^"]*\.(css|js|png|jpg|jpeg|gif|svg|webp|ico))"/g, to: 'href="./$1"' },
    { from: /url\(\/([^\/][^)]*)\)/g, to: 'url(./$1)' },
    
    // Rutas específicas de logos y archivos
    { from: /src="\/logo_blanco\.svg"/g, to: 'src="./logo_blanco.svg"' },
    { from: /src="\/logo-azul\.png"/g, to: 'src="./logo-azul.png"' },
    { from: /src="\/logo\.png"/g, to: 'src="./logo.png"' },
    { from: /href="\/logo\.png"/g, to: 'href="./logo.png"' },
    { from: /src="\/tuneladora\.glb"/g, to: 'src="./tuneladora.glb"' },
    { from: /src="\/placeholder([^"]*)"/g, to: 'src="./placeholder$1"' },
    { from: /src="\/Dossier([^"]*)"/g, to: 'src="./Dossier$1"' },
    
    // Rutas de navegación internas
    { from: /href="\/([^"\/\.][^"]*\/)"/g, to: function(match, p1) {
      // No cambiar rutas que ya son relativas o que comienzan con #
      if (p1.startsWith('#') || p1.startsWith('.') || p1.startsWith('http')) {
        return match;
      }
      return `href="./${p1}"`;
    }},
    
    // Corregir rutas problemáticas de Windows
    { from: /file:\/\/\/C:\//g, to: './' },
    { from: /file:\/\/\/[A-Z]:\//g, to: './' },
    { from: /"\/C:\//g, to: '"./' },
    { from: /src="C:\\([^"]*)"/g, to: 'src="./$1"' },
    { from: /href="C:\\([^"]*)"/g, to: 'href="./$1"' },
    
    // Corregir rutas en JSON embebido
    { from: /"staticPath":"\/([^"]*)"/g, to: '"staticPath":"./$1"' },
    { from: /"path":"\/([^"]*)"/g, to: function(match, p1) {
      if (p1.startsWith('api/') || p1.startsWith('http')) {
        return match;
      }
      return `"path":"./${p1}"`;
    }},
    
    // Corregir rutas de API (estas deben mantener la barra inicial)
    { from: /fetch\("\/api\//g, to: 'fetch("./api/' },
  ];
  
  replacements.forEach(({ from, to }) => {
    let newContent;
    if (typeof to === 'function') {
      newContent = content.replace(from, to);
    } else {
      newContent = content.replace(from, to);
    }
    if (newContent !== content) {
      hasChanges = true;
      content = newContent;
    }
  });
  
  // Procesar rutas específicas en archivos HTML
  if (filePath.endsWith('.html')) {
    // Asegurar que los meta tags tengan rutas correctas
    content = content.replace(/content="\/([^"\/][^"]*)"/g, (match, p1) => {
      if (p1.startsWith('http') || p1.startsWith('.')) {
        return match;
      }
      return `content="./${p1}"`;
    });
    
    // Arreglar rutas en scripts inline
    content = content.replace(/\\"\/([^"\/\\][^"\\]*?)\\"/g, (match, p1) => {
      if (p1.startsWith('api/') || p1.startsWith('http') || p1.startsWith('_next')) {
        return `\\"./${p1}\\"`;
      }
      return match;
    });
  }
  
  if (hasChanges) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed paths in: ${filePath}`);
  }
}

function fixPathsInDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.error(`Directory not found: ${dirPath}`);
    return;
  }
  
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixPathsInDirectory(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
      fixPathsInFile(filePath);
    }
  });
}

// Copiar archivos estáticos al directorio de salida si no existen
function copyPublicAssets() {
  const publicDir = './public';
  const outDir = './out';
  
  if (!fs.existsSync(outDir)) {
    console.log('Output directory not found. Please run "next build" first.');
    return;
  }
  
  if (fs.existsSync(publicDir)) {
    const files = fs.readdirSync(publicDir);
    files.forEach(file => {
      const srcPath = path.join(publicDir, file);
      const destPath = path.join(outDir, file);
      
      if (!fs.existsSync(destPath)) {
        const stat = fs.statSync(srcPath);
        if (stat.isFile()) {
          fs.copyFileSync(srcPath, destPath);
          console.log(`Copied: ${file} to out directory`);
        }
      }
    });
  }
}

// Crear archivo .htaccess para Apache (Plesk)
function createHtaccess() {
  const htaccessContent = `
# Configuración para Apache/Plesk
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Redirigir a index.html para rutas de cliente
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} !^/\\.well-known/
  RewriteRule ^([^/]+)/?$ $1/index.html [L]
  
  # Para la página principal
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^$ index.html [L]
</IfModule>

# Configurar tipos MIME
<IfModule mod_mime.c>
  AddType application/javascript .js
  AddType text/css .css
  AddType image/svg+xml .svg
  AddType model/gltf-binary .glb
  AddType model/gltf+json .gltf
</IfModule>

# Habilitar compresión
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache de recursos estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-font-woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>
`;
  
  const htaccessPath = './out/.htaccess';
  fs.writeFileSync(htaccessPath, htaccessContent.trim());
  console.log('Created .htaccess file for Apache/Plesk');
}

// Ejecutar el script
console.log('🔧 Fixing paths in out directory...');
fixPathsInDirectory('./out');
console.log('📁 Copying public assets...');
copyPublicAssets();
console.log('📝 Creating .htaccess for Plesk...');
createHtaccess();
console.log('✅ Path fixing and optimization completed!');
console.log('');
console.log('📦 Your build is ready for deployment to Plesk!');
console.log('   Upload the contents of the "out" directory to your web hosting.');