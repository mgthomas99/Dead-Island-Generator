@Echo Off
:Loop
	Call :RunServer
	Echo Press any key to restart.
	Pause >Nul
Goto :Loop

:RunServer
	python -m http.server
	Goto :Eof