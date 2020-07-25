# ModulC--2_10-Projektt
Голосование за любимый тип домашнего животного из предлагаемых трёх: кошки, собаки и попугаи.

У нас есть backend-сервер с тремя url, принимающими POST-запросы с пустым телом:

    /sse/vote/cats — увеличивает на 1 число голосов за "коты"
    /sse/vote/dogs — увеличивает на 1 число голосов за "собаки"
    /sse/vote/parrots — увеличивает на 1 число голосов за "попугаи"

Также сервер предоставляет GET-запрос со статистикой голосования

    /sse/vote/stats — это SSE-стрим с текущими результатами голосования

Поднят backend-сервер по адресу https://sf-pyw.mosyag.in. База данных сервиса сбрасывается раз в день в районе полудня.

Голосование: это форма или просто три кнопки, отправляющая запросы на сервер за выбранную фракцию
Отображение результатов голосования: это три прогресс-бара, отображающие текущие результаты голосования.

Тестировался только в браузере Firefox.