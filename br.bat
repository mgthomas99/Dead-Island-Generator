@echo off
concurrently "node-sass src/style/ -o dist/style/"
python -m http.server
exit /b %errorlevel%