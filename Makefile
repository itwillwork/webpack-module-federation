clear:
	cd widget && rm -rf build && rm -rf node_modules
	cd host && rm -rf build && rm -rf node_modules
install:
	cd widget && npm i
	cd host && npm i
dev-widet:
	cd widget && npm run start
serve-widet:
	cd widget && npm run build && npm run serve
dev-host:
	cd host && npm run start
serve-host:
	cd host && npm run build  && npm run serve