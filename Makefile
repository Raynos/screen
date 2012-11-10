server:
	browserify-server --server=./example

build:
	browserify-server --bundle=example/index.js \
		-o ./example/bundle.js

watch-build:
	wr -v -c 5 "make build" \
		index.js example

live-reload:
	live-reload --delay=1000
