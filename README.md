# Demo shop  #
## Тестовое задание для Льва Познанина

Приложение написано с целью завершения собеседования на должность разработчика Java. 
Представляет собой упрощённый магазин с возможностями:
- Создание товара
- Создание заказа
- Возможность добавить товар в заказ
- Изменение/редактирование заказа
- Выгрузка заказа в формат XML

Состоит из двух приложений, запускаемых из .jar-файлов.

## Установка

Данные API работают с базой данных PostgreSQL. 
Чтобы приложение работало корректно, необходимо выполнить команды из файла `db-scripts/db_init.sql`

Чтобы запустить проект небходимо:

1. Сохранить .zip-архив ли клонировать текущий репозиторий, используя а командной строке `git clone https://github.com/Jeorgius/shop_simple.git`
2. Открыть в командной строке корневую папку проекта
3. Для сборки проекта воспользуйтесь плагином Gradle `gradle clean` и далее `gradle build`
4. Выполните команду `gradle bootRun` для запуска приложения

Последняя команда запустит .jar-файл приложения, стартует встроенный Tomcat-сервер со Spring-контейнером бинов.
Небходимо запустить оба приложения - и **front**, и **back**

Первое приложение - **front** - сервер с интерфейсом пользователя, написанном на Angular 6 с файлами для запуска, расположенными в папке
`\front\src\main\resources\static`. Запускается в браузере по адресу `http://localhost:8080/`

Ресурсом пользовательского интерфейса является приложение **back**.
Обмен осуществляется посредством REST-вызовов в формате JSON. Вызовы к нему осуществляются по адресу `http://localhost:8001/` 

## Инструкция по использованию
После запуска приложений перейдите в браузере по адресу `http://localhost:8080/`

Для начала необходимо создать товары, перейдя во вкладку **Create product**. 
- Введите название товара в поле *Title*, 
- Цену в поле в поле *Price* в **центах**. Т.е., последующая цена будет разделена на 100 
(Пример: если ввести 2000, то стоимость составит $20.00)
- Описание товара в поле *Description*
- Нажать на кнопку *Create product*

Теперь желательно создать заказ. Для этого нужно перейти во вкладку **Orders**, 
ввести `email` и нажать на кнопку `Create order`. Теперь при добавлении товаров в корзину, 
товары будут попадать в **последний существующий заказ**.

Далее можно добавить товары из вкладки **Products** в заказ. Если при этом не был создан заказ, 
он будет создан автоматически, и для его изменения необходимо будет ввести `email`.
Для того, чтобы добавить товар в заказ, увеличьте кол-во заказа для добавления и нажмите на кнопку `Add to cart`.

Теперь товар добавлен в заказ, и в заказе по желанию можно изменить количество заказанного товара и email заказчика.
Для этого нужно перейти во вкладку **Orders**, навести мышкой на заказ и щёлкнуть по нему левой кнопкой мыши.

В открышемся меню можно изменить кол-во заказанных товаров. Чтобы применить изменения, нажмите `Save order`. 
Чтобы скачать заказ в формате XML, нажмите `Save in XML`.

**Важно:** если в редактировании заказа ввести для заказанного товара `Quantity`, равное нулю, и сохранить заказ,
позиция будет удалена из заказа. При наличии следующих заказов добавить новые позиции уже будет нельзя.

## Устройство приложений
Приложение **front** состоит из скомпилированного Single Page Application(SPA, одностраничное приложение), 
которое находится в папке `\front\src\main\resources\static`, и точки запуска программы со встроенным контроллером, 
который позволяет обновить страницу приложения в браузере без возникновения ошибки 404.

SPA в нескомпилированном виде (написано на TypeScript) находится в папке `front-ts`. Для того, чтобы поиграться с кодом,
необходимо установить Node.js и Angular CLI. Инструкция: `https://angular.io/guide/quickstart`

После их установки и выполнении в папке `front-ts` команды `npm install` можно изменять код, 
который для развёртывания на приложении **front** необходимо скомпилировать, выполнив в папке `front-ts` 
команду `ng build --prod`. Данная команда скомпилирует все файлы в нужную папку приложения  **front**. 
Изменить путь компиляции приложения можно в файле `front-ts\angular.json`, изменив параметр `"outputPath"`.

Если нет желания запускать приложение **front** для тестирования, то можно запустить режим разработки Angular, выполнив
в папке `front-ts` команду `ng serve -o`. Данная команда создаст приложение в режиме разработки 
по адресу `http://localhost:4200`, и его можно будет видоизменять в реальном времени.

Приложение состоит из двух модулей - **App** и **Navigation**. В html-шаблоне App-module помещён `<router-outlet>`, 
где будут отображаться компоненты модуля при переходе по вкладкам приложения. Код, выполняемый при вызове компонент,
находится в .ts файлах, например `front-ts\src\app\content\order-detail\order-detail.component.ts`.

Вызовы REST и выгрузка заказа в XML происходят благодаря сервисам, расположенным в папке 
`\front-ts\src\app\content\services`. К ним подключается модуль HttpClient, выполняющий вызовы в формате 
JSON (по умолчанию) к адресам приложения **back**. 

Принимаемые данные необходимо преобразовать в Observable, указав в методах `post<T>` или `get<T>` вместо T - тип данных, 
в который небходимо выполнить преобразование принимаемой строки JSON. Для этого используются интерфейсы (типы), 
определённые в файле `\front-ts\src\app\content\services\display\iDisplayContents.ts`. Для приёма строки используется `post`, 
где в параметре options указывается `{responseType: "text"}` для вывода сообщения/ошибки. 
После этого нужно **обязательно** в компоненте вызвать метод subscribe(data => ..., error => ...). 
Без него Lazy-инициализация попросту не выполнит запрос на ресурс.
 
В качестве тел post-запросов используются либо DTO-объекты определённые как классы из папки 
`front-ts\src\app\content\entities`, либо определение тела вводом вручную, например `{var1: 1, var2: "2"}`

Также в папке `front-ts/src/app/pipes` создан pipe для отображения цен, т.е. цены в центах отображаются
так, как если бы их разделили на 100. При этом добавление в заказ всё равно идёт в центах без изменений значений

Приложение **back** принимает вызовы от **front** на контроллерах, расположенных в папке 
`\back\rest`. К ним инжектятся соответствующие сервисы, расположенные в папке
`\back\domain\services`. 

На входе в методы класса DbSaveService выполняется валидация параметров POST-запросов при помощи сервиса 
`\back\domain\services\tools\ValidationService.java`. Используется стандартная валидация вместо AOP в целях 
большей производительности. После успешной валидации и в некоторых случаях - пересчётов, выполняется сохранение 
сущностей в базу данных с выводом сообщения в виде обычного текста (не JSON).

Тест включает в себя запуск приложения `back` и выполнения POST-запроса на создание товара и сохранение в базу данных, 
а также создание заказа.

**Спасибо** за тестирование/использование моего приложения.