# ✅ Checklist de SEO - Talpa Tunneling UPV

## 📋 Verificación Técnica Inmediata

### Archivos Creados/Modificados
- [x] `public/robots.txt` - Creado ✅
- [x] `public/sitemap.xml` - Creado ✅
- [x] `app/layout.tsx` - Mejorado con metadata completa ✅
- [x] `app/page.tsx` - Añadidos metadatos específicos ✅
- [x] Datos estructurados JSON-LD añadidos ✅

### Antes de Subir al Servidor

- [ ] **PASO 1**: Reconstruir el sitio
  ```bash
  npm run build:plesk
  ```

- [ ] **PASO 2**: Verificar que los siguientes archivos estén en la carpeta `out/`:
  - [ ] `out/robots.txt`
  - [ ] `out/sitemap.xml`
  - [ ] `out/google-verification.html`

- [ ] **PASO 3**: Subir TODOS los archivos al servidor

---

## 🔍 Verificación Post-Despliegue

### Test 1: Verificar robots.txt
Abre en tu navegador:
```
https://talpatunneling.webs.upv.es/robots.txt
```
✅ Debe mostrar el contenido del archivo robots.txt

### Test 2: Verificar sitemap.xml
Abre en tu navegador:
```
https://talpatunneling.webs.upv.es/sitemap.xml
```
✅ Debe mostrar el XML del sitemap

### Test 3: Verificar metadatos
1. Abre: `https://talpatunneling.webs.upv.es/`
2. Click derecho → "Ver código fuente"
3. Busca (Ctrl+F):
   - [ ] `<meta name="description"` - Debe contener "Talpa Tunneling UPV"
   - [ ] `<meta property="og:title"` - Debe estar presente
   - [ ] `application/ld+json` - Debe aparecer 3 veces
   - [ ] `"@type": "Organization"` - Debe estar presente

### Test 4: Verificar con herramientas externas

- [ ] **Google Rich Results Test**:
  https://search.google.com/test/rich-results
  → Ingresa tu URL → Debe mostrar datos estructurados válidos

- [ ] **Facebook Sharing Debugger**:
  https://developers.facebook.com/tools/debug/
  → Ingresa tu URL → Debe mostrar preview correcto

- [ ] **Twitter Card Validator**:
  https://cards-dev.twitter.com/validator
  → Ingresa tu URL → Debe mostrar card preview

---

## 📊 Google Search Console (Siguiente Paso CRÍTICO)

### Configuración Inicial
- [ ] Ir a: https://search.google.com/search-console
- [ ] Añadir propiedad: `https://talpatunneling.webs.upv.es`
- [ ] Método de verificación: "Etiqueta HTML"
- [ ] Copiar el código (ejemplo: `google-site-verification=ABC123XYZ`)
- [ ] Editar `app/layout.tsx` línea 104:
  ```typescript
  verification: {
    google: 'TU-CODIGO-AQUI',
  },
  ```
- [ ] Reconstruir y redesplegar
- [ ] Volver a Search Console → Verificar

### Después de Verificar
- [ ] Enviar sitemap: `https://talpatunneling.webs.upv.es/sitemap.xml`
- [ ] Solicitar indexación de la página principal
- [ ] Solicitar indexación de páginas importantes:
  - [ ] `/equipo/`
  - [ ] `/tuneladora/`
  - [ ] `/eventos/`
  - [ ] `/unete/`

---

## 🌐 Bing Webmaster Tools

- [ ] Ir a: https://www.bing.com/webmasters
- [ ] Añadir sitio: `https://talpatunneling.webs.upv.es`
- [ ] Importar desde Google Search Console (si es posible)
- [ ] O verificar manualmente
- [ ] Enviar sitemap: `https://talpatunneling.webs.upv.es/sitemap.xml`

---

## 📱 Redes Sociales

### Instagram (@talpa_tunneling_upv)
- [ ] Publicar enlace al sitio en la biografía
- [ ] Crear stories con link al sitio
- [ ] Post anunciando el nuevo sitio web
- [ ] Usar hashtags:
  - #TalpaTunneling
  - #TalpaUPV
  - #NotABoringCompetition
  - #UPV
  - #Valencia
  - #Ingenieria

### LinkedIn
- [ ] Actualizar descripción de la página con link
- [ ] Post anunciando el sitio
- [ ] Etiquetar a la UPV
- [ ] Etiquetar a patrocinadores
- [ ] Pedir a miembros del equipo que compartan

### Facebook (si tenéis)
- [ ] Publicar link al sitio
- [ ] Compartir en grupos de UPV
- [ ] Compartir en grupos de ingeniería

---

## 📧 Outreach de Backlinks (Primera Semana)

### Alta Prioridad
- [ ] Email a comunicacion@upv.es
- [ ] Email a la Escuela de Caminos
- [ ] Contactar a Las Provincias
- [ ] Contactar a Valencia Plaza
- [ ] Solicitar backlink a BECSA
- [ ] Solicitar backlink a CHM

### Media Prioridad
- [ ] Registrar en StartUPV
- [ ] Publicar en LinkedIn (post viral)
- [ ] Publicar en r/engineering
- [ ] Enviar nota de prensa a Xataka

---

## 📈 Monitoreo (Después de 1 Semana)

### Verificar Indexación
Buscar en Google:
```
site:talpatunneling.webs.upv.es
```
✅ Deberías ver varias páginas indexadas

### Verificar Posicionamiento
Buscar en Google (modo incógnito):
- [ ] "Talpa Tunneling UPV"
- [ ] "Talpa UPV"
- [ ] "microtuneladora UPV"
- [ ] "Not-a-Boring Competition España"

**Objetivo**: Aparecer en primera página para "Talpa Tunneling UPV" en 7-14 días

---

## 🔄 Mantenimiento Continuo

### Semanal
- [ ] Publicar en redes sociales (mínimo 2x/semana)
- [ ] Responder a comentarios y mensajes
- [ ] Contactar a 2 nuevos medios/blogs

### Mensual
- [ ] Actualizar sitemap.xml si hay nuevo contenido
- [ ] Revisar Google Search Console para errores
- [ ] Analizar qué keywords están funcionando
- [ ] Ajustar estrategia según datos

### Cuando haya nuevo contenido
- [ ] Actualizar fecha en sitemap.xml
- [ ] Solicitar reindexación en Search Console
- [ ] Compartir en redes sociales
- [ ] Enviar a newsletter (si la tenéis)

---

## 🚨 Señales de Alerta

Si después de 2 semanas:
- ❌ El sitio NO aparece en `site:talpatunneling.webs.upv.es`
  → Revisa Search Console, puede haber errores de indexación

- ❌ No apareces para "Talpa Tunneling UPV"
  → Solicita indexación manual, consigue más backlinks

- ❌ Google Search Console muestra errores
  → Revisa y corrige inmediatamente

---

## 🎯 KPIs (Indicadores de Éxito)

### Semana 1-2:
- [ ] Sitio indexado en Google
- [ ] Al menos 5 páginas en el índice
- [ ] Apareces en búsqueda por nombre exacto

### Mes 1:
- [ ] Posición #1 para "Talpa Tunneling UPV"
- [ ] Top 3 para "Talpa UPV"
- [ ] Al menos 5 backlinks conseguidos
- [ ] 100+ visitas orgánicas

### Mes 2-3:
- [ ] Posición #1 para variaciones del nombre
- [ ] Top 10 para keywords relacionadas
- [ ] 15+ backlinks de calidad
- [ ] 500+ visitas orgánicas

---

## 📞 Contacto para Dudas

Si tienes problemas con cualquiera de estos pasos:
1. Revisa `INSTRUCCIONES_SEO.md` para detalles
2. Revisa `ESTRATEGIA_BACKLINKS.md` para conseguir enlaces
3. Consulta Google Search Console Help Center

---

## ✨ Resumen: Los 3 Pasos MÁS IMPORTANTES

1. **RECONSTRUIR Y DESPLEGAR** ← ¡HAZLO YA!
   ```bash
   npm run build:plesk
   ```

2. **GOOGLE SEARCH CONSOLE** ← En las próximas 24 horas
   - Verificar sitio
   - Enviar sitemap

3. **CONSEGUIR BACKLINKS** ← Primera semana
   - Email a UPV
   - Email a patrocinadores
   - Publicar en redes sociales

**¡Haz estos 3 pasos y estarás en Google en menos de 2 semanas! 🚀**
