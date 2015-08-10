all:
	babel lib --out-dir dist
	webpack -p
clean:
	rm example/bundle*
	rm dist/*
