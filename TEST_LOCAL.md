# 🎉 ¡PRUEBA TU SITIO LOCALMENTE!

## ✅ SERVIDOR LOCAL CORRIENDO

Tu sitio web está disponible en:
### 👉 http://localhost:3000

## 🔍 PRUEBAS A REALIZAR:

1. **Abre el navegador en http://localhost:3000**
   - NO abras el archivo index.html directamente
   - USA LA URL http://localhost:3000

2. **Verifica la navegación:**
   - Click en "Equipo" → Debería cargar /equipo/
   - Click en "Tuneladora" → Debería cargar /tuneladora/
   - Click en "Prensa" → Debería cargar /prensa/
   - Click en "Eventos" → Debería cargar /eventos/
   - Click en "FAQ" → Debería cargar /faq/
   - Click en "Contacto" → Debería cargar /contacto/

3. **Verifica que las fuentes se ven bien**
   - Los títulos ahora usan fuentes del sistema
   - No requieren conexión a internet

## 📦 SI TODO FUNCIONA:

El contenido de la carpeta `out/` está listo para:
1. Subir a Plesk (sigue las instrucciones en DEPLOYMENT_INSTRUCTIONS.txt)
2. Funcionar sin conexión a internet (excepto formularios)

## ⚠️ IMPORTANTE PARA PLESK:

Cuando subas a Plesk, asegúrate de:
- Subir TODO el contenido de `out/` al directorio `httpdocs`
- NO crear una subcarpeta `out` dentro de `httpdocs`
- Verificar que `.htaccess` está presente (para Apache)
- O que `web.config` está presente (para IIS)

## 🚨 SOLUCIÓN DE PROBLEMAS:

Si las páginas internas no funcionan en Plesk:
- Verifica la configuración de Apache/IIS
- Asegúrate de que `AllowOverride All` esté habilitado
- Contacta con soporte de Plesk si es necesario
