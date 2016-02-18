all:
	./node_modules/.bin/babel lib --out-dir dist
	./node_modules/.bin/webpack -p
clean:
	rm example/bundle*
	rm dist/*
