### Как запустить?

Установить зависимостей:
```
make install
```

1. Локальный запуск виджета:
```
make dev-widet
```
Смотрим http://localhost:3000/

2. Локальный запуск хоста с виджетом:

Запускаем в отдельном окне терминала:
```
make serve-widet
```
В отдельном окне терминала паралельно запускаем:
```
make dev-host
```
Смотрим http://localhost:3000/


3. Статичная раздача всего:

Запускаем в отдельном окне терминала:
```
make serve-widet
```
В отдельном окне терминала паралельно запускаем:
```
make serve-host
```
Смотрим http://localhost:8083/


P.S.
Очистка директорий:
```
make clear
```

### Как работает?

1. Собираем виджет:
https://github.com/itwillwork/webpack-module-federation/blob/main/widget/webpack.config.js#L23-L40

2. Импортируем виджет в сборку хоста:
https://github.com/itwillwork/webpack-module-federation/blob/main/host/webpack.config.js#L23-L38

3. Используем виджет в хосте:
https://github.com/itwillwork/webpack-module-federation/blob/main/host/src/App.jsx#L2
