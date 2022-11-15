clear:
	cd widget && rm -rf build && rm -rf node_modules
	cd host && rm -rf build && rm -rf node_modules
install:
	cd widget && npm i
	cd host && npm i
dev-widet:
	cd widget && npm run start
dev-host:
	(cd widget && npm run build && npm run serve) &
	cd host && npm run start
serve-all:
	(cd widget && npm run build && npm run serve) &
	(cd host && npm run build  && npm run serve) &
	open http://localhost:8083/