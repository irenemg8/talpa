@echo off
echo =========================================
echo   INICIANDO SERVIDOR TALPA TUNNELING UPV
echo =========================================
echo.
echo Iniciando servidor local...
echo.

REM Cambiar al directorio del proyecto
cd /d "C:\Users\irene\Desktop\talpa"

REM Iniciar el servidor
start /B npx serve out -p 3000

REM Esperar 3 segundos para que el servidor inicie
timeout /t 3 /nobreak > nul

echo =========================================
echo   SERVIDOR INICIADO EXITOSAMENTE
echo =========================================
echo.
echo   Abriendo navegador en:
echo   http://localhost:3000
echo.
echo =========================================
echo.
echo   NO CIERRES ESTA VENTANA
echo   (mantiene el servidor activo)
echo.
echo =========================================

REM Abrir el navegador
start http://localhost:3000

REM Mantener la ventana abierta
pause > nul
