.PHONY := generate, start, build, preview, generate_1000, generate_10000, generate_100000, generate_1000000
.DEFAULT:=start

start:
	npx vite

build:
	npx vite build

preview:
	npx vite preview

generate_1000:
	WORDS_NUMBER=1000 ./scripts/generate.js

generate_10000:
	WORDS_NUMBER=10000 ./scripts/generate.js

generate_100000:
	WORDS_NUMBER=100000 ./scripts/generate.js

generate_1000000:
	WORDS_NUMBER=1000000 ./scripts/generate.js

generate: generate_1000 generate_10000 generate_100000 generate_1000000
