# React + TypeScript + Vite + Zustand

## Generator


#### Основные требования

1. Структура страницы:
    - Страница делится на две части по горизонтали:
        - Контроллер (1/4 ширины страницы)
        - Поле вывода (3/4 ширины страницы)

2. Элементы интерфейса:
    - В контроллере должны быть следующие элементы:
        - Кнопки:
            - "Набор 1"
            - "Набор 2"
            - Расположение: кнопки размещаются в верхней части контроллера.
        - Кнопка "Сгенерировать":
            - Состояние: кнопка по умолчанию заблокирована (`disabled`).
            - Расположение: кнопка размещается в нижней части контроллера.

3. Функциональность:
    - Отображение карточек:
        - При нажатии на одну из кнопок "Набор 1" или "Набор 2", в поле вывода должно отображаться соответствующее количество карточек:
            - Набор 1: 4 карточки
            - Набор 2: 5 карточек
    - Особенности карточек:
        - Каждая карточка имеет уникальную картинку, связанную с выбранным набором.
        - Пользователь может выбрать от 2 до максимального количества карточек в наборе.
    - Выбор карточек:
        - При нажатии на карточку, ее копия добавляется в нижнюю строку карточек, а сама карточка становится недоступной для выбора (`disabled`).
        - Если пользователь передумал, он может нажать на карточку в нижнем списке, чтобы она исчезла, а оригинальная карточка снова стала доступной для выбора.
    - 
Ссылка на дизайн задания - <a href="https://www.figma.com/design/roIv4xYudBeLDRJP14Agxv/Untitled?node-id=0-1&node-type=canvas&t=ct4TquQpwpghv4NP-0">тык</a>

