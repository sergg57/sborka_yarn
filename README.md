r# ЭТО Собранная мной (Сергей Гришин) СБОРКА по аналогии с Учебной сборкой Loftschool

> Сборка работает на gulp версии 4.0. и собрана с использование пакетного сборщика -YARN (!!!)

Добавлены в сборку задачи:
1. sprite:png
2. copy:font
3. copy:other
Доработана задача:
4. watch

#### Для начала работы

1. ```clone this repo```
2. ```cd path/to/...```
3. ```yarn install gulpjs/gulp-cli -g```
> Установка последней версии Gulp CLI tools глобально
(подробнее - [GitHub](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md) )

4. ```зайдите в папку sborka_yarn ```
5. ```yarn install```
6. ```gulp```
7. ```чтобы увидеть иконки соц сетей -
      откройте файл - /build/assets/css/sprite.css и
     свойсвах background-image:
     отредактируйте - пути, добавивь папку - img
     следующим образом - url(../img/sprite.png);


