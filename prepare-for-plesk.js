const fs = require('fs');
const path = require('path');

console.log('🚀 Preparando el proyecto para despliegue en Plesk...\n');

// Crear web.config para IIS (en caso de que Plesk use IIS)
function createWebConfig() {
  const webConfigContent = `<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Static Assets" stopProcessing="true">
          <match url="^(_next|logo|placeholder|Dossier|tuneladora).*" />
          <action type="None" />
        </rule>
        <rule name="Next.js Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
    <staticContent>
      <mimeMap fileExtension=".glb" mimeType="model/gltf-binary" />
      <mimeMap fileExtension=".gltf" mimeType="model/gltf+json" />
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <mimeMap fileExtension=".webmanifest" mimeType="application/manifest+json" />
    </staticContent>
    <httpCompression directory="%SystemDrive%\\inetpub\\temp\\IIS Temporary Compressed Files">
      <scheme name="gzip" dll="%Windir%\\system32\\inetsrv\\gzip.dll" />
      <dynamicTypes>
        <add mimeType="text/*" enabled="true" />
        <add mimeType="message/*" enabled="true" />
        <add mimeType="application/javascript" enabled="true" />
        <add mimeType="application/json" enabled="true" />
        <add mimeType="*/*" enabled="false" />
      </dynamicTypes>
      <staticTypes>
        <add mimeType="text/*" enabled="true" />
        <add mimeType="message/*" enabled="true" />
        <add mimeType="application/javascript" enabled="true" />
        <add mimeType="application/json" enabled="true" />
        <add mimeType="*/*" enabled="false" />
      </staticTypes>
    </httpCompression>
  </system.webServer>
</configuration>`;
  
  const webConfigPath = './out/web.config';
  fs.writeFileSync(webConfigPath, webConfigContent);
  console.log('✅ Creado web.config para IIS');
}

// Verificar que todos los archivos necesarios estén en out
function verifyBuild() {
  const outDir = './out';
  
  if (!fs.existsSync(outDir)) {
    console.error('❌ El directorio "out" no existe. Ejecuta primero: npm run build:plesk');
    process.exit(1);
  }
  
  const requiredFiles = ['index.html', '_next'];
  const missingFiles = [];
  
  requiredFiles.forEach(file => {
    const filePath = path.join(outDir, file);
    if (!fs.existsSync(filePath)) {
      missingFiles.push(file);
    }
  });
  
  if (missingFiles.length > 0) {
    console.error('❌ Faltan archivos requeridos:', missingFiles.join(', '));
    console.log('   Ejecuta: npm run build:plesk');
    process.exit(1);
  }
  
  console.log('✅ Build verificada correctamente');
}

// Crear archivo de instrucciones
function createDeploymentInstructions() {
  const instructions = `
INSTRUCCIONES DE DESPLIEGUE PARA PLESK
=======================================

1. PREPARACIÓN LOCAL:
   - Asegúrate de haber ejecutado: npm run build:plesk
   - Verifica que existe la carpeta "out" con todos los archivos

2. SUBIR ARCHIVOS A PLESK:
   - Accede a tu panel de Plesk
   - Ve a "Administrador de Archivos"
   - Navega hasta el directorio httpdocs (o public_html)
   - Sube TODO el contenido de la carpeta "out" (NO la carpeta en sí, solo su contenido)
   
   Estructura que debe quedar en httpdocs:
   httpdocs/
   ├── index.html
   ├── _next/
   ├── logo.png
   ├── logo_blanco.svg
   ├── tuneladora.glb
   ├── .htaccess (para Apache)
   ├── web.config (para IIS)
   └── [otros archivos...]

3. CONFIGURACIÓN EN PLESK:
   
   Para Apache:
   - El archivo .htaccess ya está configurado
   - Ve a "Configuración de Apache y nginx"
   - En "Configuraciones adicionales de Apache", añade:
     Options -Indexes +FollowSymLinks
     AllowOverride All
   
   Para IIS:
   - El archivo web.config ya está configurado
   - Asegúrate de que URL Rewrite esté instalado

4. CONFIGURACIÓN DE PHP (si aplica):
   - Ve a "Configuración de PHP"
   - Selecciona PHP 7.4 o superior
   - Aunque es un sitio estático, esto puede ser necesario para el .htaccess

5. CONFIGURACIÓN DE DOMINIO:
   - Ve a "Configuración de Hosting"
   - Asegúrate de que el "Document root" apunte a httpdocs

6. SSL/HTTPS (Recomendado):
   - Ve a "SSL/TLS Certificates"
   - Instala un certificado Let's Encrypt gratuito

7. VERIFICACIÓN:
   - Limpia el caché del navegador
   - Accede a tu dominio
   - Verifica que todas las páginas carguen correctamente
   - Revisa la consola del navegador para errores

SOLUCIÓN DE PROBLEMAS:
----------------------
- Si las rutas no funcionan: Verifica el archivo .htaccess o web.config
- Si faltan archivos: Asegúrate de subir TODO el contenido de "out"
- Si hay errores 404: Verifica que los archivos estén en httpdocs, no en httpdocs/out
- Si los estilos no cargan: Limpia el caché del navegador

ARCHIVOS IMPORTANTES:
--------------------
- index.html: Página principal
- _next/: Archivos de Next.js (JavaScript y CSS)
- .htaccess: Configuración para Apache
- web.config: Configuración para IIS
- Archivos públicos: logos, imágenes, PDFs, etc.
`;

  const instructionsPath = './DEPLOYMENT_INSTRUCTIONS.txt';
  fs.writeFileSync(instructionsPath, instructions.trim());
  console.log('📝 Creado archivo de instrucciones: DEPLOYMENT_INSTRUCTIONS.txt');
}

// Ejecutar todas las tareas
console.log('📋 Verificando build...');
verifyBuild();

console.log('\n🔧 Creando archivos de configuración...');
createWebConfig();

console.log('\n📝 Generando instrucciones de despliegue...');
createDeploymentInstructions();

console.log('\n✅ ¡Preparación completada con éxito!');
console.log('\n📦 Tu aplicación está lista para subir a Plesk.');
console.log('   Los archivos a subir están en la carpeta: out/');
console.log('   Lee DEPLOYMENT_INSTRUCTIONS.txt para instrucciones detalladas.\n');
