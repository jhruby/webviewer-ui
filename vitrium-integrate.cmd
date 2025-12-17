@echo on
SETLOCAL ENABLEDELAYEDEXPANSION

if exist build\NUL (
    echo Copying files from build directory
    Rmdir /S /q ..\public\ui\assets
    Rmdir /S /q ..\public\ui\i18n
    Rmdir /S /q ..\public\ui\chunks

    ren ..\public\ui\index.html *.bak
    xcopy build ..\public\ui /Y /S /E
    del ..\public\ui\index.html
    ren ..\public\ui\index.bak *.html

) else (
    echo Run yarn build first
)