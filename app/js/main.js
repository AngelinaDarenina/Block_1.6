/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script.js */ "./js/script.js");





/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "../node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "../node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/navigation */ "../node_modules/swiper/modules/navigation.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ "../node_modules/swiper/modules/pagination.css");
//-------------------------------------------------------------------------------------------------------------------------------
//кнопка бокового меню (меняется при нажимании)
//-------------------------------------------------------------------------------------------------------------------------------

var buttonsParent = document.querySelector('.menu'); // Получаем ссылку на контейнер
var activeButton = null; // Переменная для отслеживания текущей активной кнопки

// Функция для добавления/удаления класса и изменения кнопки при нажатии
function toggleClassAndColorButton(event) {
  var button = event.target; //цель события

  if (button.classList.contains('menu__btn')) {
    //если элемент, на котором произошло событие содержит данный класс, то 
    if (activeButton) {
      //если activeButton не null, то 
      activeButton.classList.remove('menu__btn_active'); // Убираем класс с предыдущей активной кнопки
    }

    button.classList.add('menu__btn_active'); // Добавляем класс новой кнопке
    activeButton = button; // Обновляем текущую активную кнопку
  }
}

buttonsParent.addEventListener('click', toggleClassAndColorButton); //вешаем обработчик на контейнер, делегирование

//-------------------------------------------------------------------------------------------------------------------------------
//бургер (при нажатии на кнопку добавляется класс, при котором асайд раскрывается)
//-------------------------------------------------------------------------------------------------------------------------------

// Получаем ссылки на кнопку и боковую панель
var burgerButton = document.querySelector('.header__icon:nth-child(1)');
var asidePanel = document.querySelector('.aside');
var cover = document.querySelector('.cover');

// Функция, которая будет вызываться при нажатии на кнопку
function toggleAsidePanel() {
  // Переключаем класс .aside_open для боковой панели
  asidePanel.classList.toggle('aside_open');
  cover.classList.toggle('cover_open');
  burgerButton.classList.toggle('burger_open');
}
burgerButton.addEventListener('click', toggleAsidePanel);
cover.addEventListener('click', toggleAsidePanel);

//-------------------------------------------------------------------------------------------------------------------------------
//Читать далее (при нажатии на кнопку добавляется класс, при котором текст раскрывается)
//-------------------------------------------------------------------------------------------------------------------------------

var readMore = document.querySelector('.content__read-more');
var text = document.querySelector('.content__text');

// Функция для добавления/удаления класса и изменения кнопки
function toggleClassAndOpenText() {
  if (text.classList.contains('content__text_open')) {
    text.classList.remove('content__text_open');
    readMore.innerHTML = "Читать далее";
  } else {
    text.classList.add('content__text_open');
    readMore.innerHTML = "Скрыть";
  }
}
readMore.addEventListener('click', toggleClassAndOpenText);

//-------------------------------------------------------------------------------------------------------------------------------
//Показать все (бренды) 
//-------------------------------------------------------------------------------------------------------------------------------

var button = document.querySelector('.btn'); //кнопка
var hiddenSlides767 = document.querySelectorAll('.slide_hidden-767'); // слайды (бренды), которые скрыты при ширине экрана 767px
var hiddenSlides1439 = document.querySelectorAll('.slide_hidden-1439'); // слайды (бренды), которые скрыты при ширине экрана 1439px

// Функция для добавления/удаления класса и изменения кнопки при ширине экрана больше 767px
function toggleClassAndChangeButton767() {
  hiddenSlides767.forEach(function (element) {
    if (element.classList.contains('slide_hidden-767')) {
      element.classList.remove('slide_hidden-767');
      button.innerHTML = "Скрыть";
    } else {
      element.classList.add('slide_hidden-767');
      button.innerHTML = "Показать все";
    }
  });
}
// Функция для добавления/удаления класса и изменения кнопки при ширине экрана больше 1439px
function toggleClassAndChangeButton1439() {
  hiddenSlides1439.forEach(function (element) {
    if (element.classList.contains('slide_hidden-1439')) {
      element.classList.remove('slide_hidden-1439');
      button.innerHTML = "Скрыть";
    } else {
      element.classList.add('slide_hidden-1439');
      button.innerHTML = "Показать все";
    }
  });
}
button.addEventListener('click', toggleClassAndChangeButton767);
button.addEventListener('click', toggleClassAndChangeButton1439);

//-------------------------------------------------------------------------------------------------------------------------------
//Показать все (девайсы) 
//-------------------------------------------------------------------------------------------------------------------------------

var buttonDevices = document.querySelector('.btn-devices');
var hiddenDevicesSlides767 = document.querySelectorAll('.devices__slide_hidden-767');
var hiddenDevicesSlides1439 = document.querySelectorAll('.devices__slide_hidden-1439');
function toggleClassAndChangeButtonDevices767() {
  hiddenDevicesSlides767.forEach(function (element) {
    if (element.classList.contains('devices__slide_hidden-767')) {
      element.classList.remove('devices__slide_hidden-767');
      buttonDevices.innerHTML = "Скрыть";
    } else {
      element.classList.add('devices__slide_hidden-767');
      buttonDevices.innerHTML = "Показать все";
    }
  });
}
function toggleClassAndChangeButtonDevices1439() {
  hiddenDevicesSlides1439.forEach(function (element) {
    if (element.classList.contains('devices__slide_hidden-1439')) {
      element.classList.remove('devices__slide_hidden-1439');
      buttonDevices.innerHTML = "Скрыть";
    } else {
      element.classList.add('devices__slide_hidden-1439');
      buttonDevices.innerHTML = "Показать все";
    }
  });
}
buttonDevices.addEventListener('click', toggleClassAndChangeButtonDevices767);
buttonDevices.addEventListener('click', toggleClassAndChangeButtonDevices1439);

//-------------------------------------------------------------------------------------------------------------------------------
// МОДАЛЬНОЕ ОКНО (popup)
//-------------------------------------------------------------------------------------------------------------------------------

//------feedback-------------------------------------------------------------------------------------------------------------------------

var feedbackButtons = document.querySelectorAll('.feedback');
var closeButton = document.querySelector(".popup__close");
var popup = document.querySelector('.popup');

// Функция, которая будет вызываться при нажатии на кнопку
function togglePopup() {
  // Переключаем класс 
  popup.classList.toggle('popup_open');
}
feedbackButtons.forEach(function (button) {
  button.addEventListener('click', togglePopup);
});
closeButton.addEventListener('click', togglePopup);

//------call-------------------------------------------------------------------------------------------------------------------------

var callButtons = document.querySelectorAll('.call');
var closeCallButton = document.querySelector(".popup-call__close");
var popupCall = document.querySelector('.popup-call');

// Функция, которая будет вызываться при нажатии на кнопку
function togglePopupCall() {
  // Переключаем класс 
  popupCall.classList.toggle('popup-call_open');
}
callButtons.forEach(function (button) {
  button.addEventListener('click', togglePopupCall);
});
closeCallButton.addEventListener('click', togglePopupCall);

//-------------------------------------------------------------------------------------------------------------------------------
// СВАЙПЕР 
//-------------------------------------------------------------------------------------------------------------------------------


// import Swiper and modules styles



var swiper = null; // Инициализируем переменную для хранения экземпляра свайпера

function initializeSwiper() {
  swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination]
  });
}
function disableSwiperIfScreenIsWide() {
  var screenWidth = window.innerWidth;
  if (screenWidth > 767) {
    if (swiper && swiper.destroy) {
      swiper.destroy();
      swiper = null; // Уничтожаем экземпляр и сбрасываем переменную
    }
  } else {
    if (!swiper) {
      initializeSwiper(); // Инициализируем свайпер, если его нет
    }
  }
}

// Вызываем функции при загрузке страницы и изменении размера окна
window.addEventListener('load', disableSwiperIfScreenIsWide);
window.addEventListener('resize', disableSwiperIfScreenIsWide);

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.svg */ "./img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/pic.png */ "./img/pic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/lenovo.png */ "./img/lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/samsung.png */ "./img/samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple.png */ "./img/apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/viewsonic.png */ "./img/viewsonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bosh.png */ "./img/bosh.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hp.png */ "./img/hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/acer.png */ "./img/acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/sony.png */ "./img/sony.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\" />\r\n    <title>CPS Ремонт техники</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"page\">\r\n      <!-- ________________________header с лого и иконками_________________________-->\r\n      <header class=\"header\">\r\n        <button class=\"btn-icon header__icon\"></button>\r\n        <div class=\"divider header__divider header__divider_hidden\"></div>\r\n        <img class=\"header__logo logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"CPS\" />\r\n        <button class=\"btn-icon header__icon header__icon_hidden call\"></button>\r\n        <button class=\"btn-icon header__icon header__icon_hidden feedback\"></button>\r\n        <button class=\"btn-icon header__icon header__icon_hidden\"></button>\r\n        <div class=\"divider header__divider\"></div>\r\n        <button class=\"btn-icon header__icon\"></button>\r\n        <button class=\"btn-icon header__icon\"></button>\r\n\r\n        <!-- ________________________aside_________________________-->\r\n        <aside class=\"aside\">\r\n          <button class=\"aside__icon btn-icon\"></button>\r\n\r\n          <div class=\"wrapper\">\r\n            <nav class=\"menu\">\r\n              <button class=\"menu__btn menu__btn_active\">\r\n                Услуги и сервисы\r\n              </button>\r\n              <button class=\"menu__btn\">Корпоративным клиентам</button>\r\n              <button class=\"menu__btn\">Продавцам техники</button>\r\n              <button class=\"menu__btn\">Партнерам</button>\r\n              <button class=\"menu__btn\">Производителям</button>\r\n              <button class=\"menu__btn\">Наши сервисные центры</button>\r\n              <button class=\"menu__btn\">Контакты</button>\r\n            </nav>\r\n\r\n            <div class=\"bottom\">\r\n              <div class=\"contact\">\r\n                <button class=\"contact__icon btn-icon call\"></button>\r\n                <button class=\"contact__icon btn-icon feedback\" ></button>\r\n                <button class=\"contact__icon btn-icon\"></button>\r\n\r\n                <p class=\"contact__mail\">mail@cps.com</p>\r\n                <p class=\"contact__number\">8 800 890 8900</p>\r\n              </div>\r\n\r\n              <div class=\"lang\">\r\n                <button class=\"lang__btn\">RU</button>\r\n                <button class=\"lang__btn\">EN</button>\r\n                <button class=\"lang__btn\">CH</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </aside>\r\n        <div class=\"cover\"></div>\r\n        <!-- ________________________конец aside_________________________-->\r\n      </header>\r\n      <!-- ________________________конец header с лого и иконками_________________________-->\r\n\r\n      <!-- ________________________основная часть_________________________-->\r\n\r\n      <main class=\"main\">\r\n        <div class=\"heading\">\r\n          <h1 class=\"heading__item title\">Услуги и сервисы</h1>\r\n          <p class=\"heading__item\">\r\n            <a class=\"link\" href=\"#\">Оставить заявку</a>\r\n          </p>\r\n          <button class=\"heading__item btn-icon\"></button>\r\n          <p class=\"heading__item\">\r\n            <a class=\"link\" href=\"#\">Статус ремонта</a>\r\n          </p>\r\n          <button class=\"heading__item btn-icon\"></button>\r\n        </div>\r\n\r\n        <nav class=\"slide-menu\">\r\n          <button class=\"slide-menu__btn slide-menu__btn_active\">\r\n            Ремонтируемые устройства\r\n          </button>\r\n          <button class=\"slide-menu__btn\">Ремонтируемые бренды</button>\r\n          <button class=\"slide-menu__btn\">Цены на услуги</button>\r\n          <button class=\"slide-menu__btn\">Адреса сервисных центров</button>\r\n          <button class=\"slide-menu__btn\">Специальные цены</button>\r\n          <button class=\"slide-menu__btn\">Отзывы</button>\r\n        </nav>\r\n        <!-- ________________________текст с картинкой_________________________-->\r\n        <section class=\"content\">\r\n          <article class=\"content__reading\">\r\n            <p class=\"content__text text\">\r\n              Мы являемся авторизованным сервисным центром по ремонту техники\r\n              Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с\r\n              официальной гарантией производителя. <br />\r\n              <br />\r\n              Мы успешно работаем с 1992 года и заслужили репутацию надежного\r\n              партнера, что подтверждает большое количество постоянных клиентов.\r\n              Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою\r\n              очередь, советуют нас родным и близким.\r\n            </p>\r\n            <button class=\"content__read-more button-more\">Читать далее</button>\r\n          </article>\r\n\r\n          <img class=\"content__picture\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"picture\" />\r\n        </section>\r\n\r\n        <!-- ________________________бренды_________________________-->\r\n        <section class=\"brands\">\r\n          <div class=\"brands__header second-header\">\r\n            <h2 class=\"brands__title second-title\">\r\n              Ремонт техники различных брендов\r\n            </h2>\r\n          </div>\r\n\r\n          <div class=\"container swiper\">\r\n            <ul class=\"slide-wrapper swiper-wrapper\">\r\n              <li class=\"slide swiper-slide\">\r\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"lenovo\" />\r\n                <button class=\"slide__link btn-icon\"></button>\r\n              </li>\r\n\r\n              <li class=\"slide swiper-slide\">\r\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"samsung\" />\r\n                <button class=\"slide__link btn-icon\"></button>\r\n              </li>\r\n\r\n              <li class=\"slide swiper-slide\">\r\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"apple\" />\r\n                <button class=\"slide__link btn-icon\"></button>\r\n              </li>\r\n\r\n              <li class=\"slide swiper-slide\">\r\n                <img\r\n                  class=\"slide__brand\"\r\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n                  alt=\"viewsonic\"\r\n                />\r\n                <button class=\"slide__link btn-icon\"></button>\r\n              </li>\r\n\r\n              <li class=\"slide swiper-slide\">\r\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"bosh\" />\r\n                <button class=\"slide__link btn-icon\"></button>\r\n              </li>\r\n\r\n              <li class=\"slide swiper-slide\">\r\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"hp\" />\r\n                <button class=\"slide__link btn-icon\"></button>\r\n              </li>\r\n\r\n              <li class=\"slide slide_hidden-767 swiper-slide\">\r\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"acer\" />\r\n                <button class=\"slide__link btn-icon\"></button>\r\n              </li>\r\n\r\n              <li class=\"slide slide_hidden-767 swiper-slide\">\r\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"sony\" />\r\n                <button class=\"slide__link btn-icon\"></button>\r\n              </li>\r\n\r\n              <li class=\"slide slide_hidden-767 slide_hidden-1439 swiper-slide\">\r\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"lenovo\" />\r\n                <button class=\"slide__link btn-icon\"></button>\r\n              </li>\r\n\r\n              <li class=\"slide slide_hidden-767 slide_hidden-1439 swiper-slide\">\r\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"samsung\" />\r\n                <button class=\"slide__link btn-icon\"></button>\r\n              </li>\r\n\r\n              <li class=\"slide slide_hidden-767 slide_hidden-1439 swiper-slide\">\r\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"apple\" />\r\n                <button class=\"slide__link btn-icon\"></button>\r\n              </li>\r\n            </ul>\r\n            <div class=\"swiper-pagination\"></div>\r\n            <button class=\"button-more btn btn_hidden\">Показать все</button>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- ________________________devices_________________________-->\r\n        <section class=\"devices\">\r\n          <div class=\"devices__header second-header\">\r\n            <h2 class=\"devices__title second-title\">\r\n              Ремонт различных видов техники\r\n            </h2>\r\n          </div>\r\n\r\n          <div class=\"devices__container container swiper\">\r\n            <ul class=\"devices__wrapper slide-wrapper swiper-wrapper\">\r\n              <li class=\"devices__slide swiper-slide\">\r\n                <p class=\"devices__device\">Ремонт ноутбуков</p>\r\n                <button class=\"devices__link btn-icon\"></button>\r\n              </li>\r\n              <li class=\"devices__slide swiper-slide\">\r\n                <p class=\"devices__device\">Ремонт планшетов</p>\r\n                <button class=\"devices__link btn-icon\"></button>\r\n              </li>\r\n              <li class=\"devices__slide swiper-slide\">\r\n                <p class=\"devices__device\">Ремонт ПК</p>\r\n                <button class=\"devices__link btn-icon\"></button>\r\n              </li>\r\n              <li class=\"devices__slide swiper-slide devices__slide_hidden-767\">\r\n                <p class=\"devices__device\">Ремонт мониторов</p>\r\n                <button class=\"devices__link btn-icon\"></button>\r\n              </li>\r\n              <li\r\n                class=\"devices__slide swiper-slide devices__slide_hidden-767 devices__slide_hidden-1439\"\r\n              >\r\n                <p class=\"devices__device\">Ремонт смартфонов</p>\r\n                <button class=\"devices__link btn-icon\"></button>\r\n              </li>\r\n            </ul>\r\n            <div class=\"swiper-pagination\"></div>\r\n            <button class=\"button-more btn-devices btn-devices_hidden\">\r\n              Показать все\r\n            </button>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- ________________________цены_________________________-->\r\n        <section class=\"prices\">\r\n          <div class=\"prices__header second-header\">\r\n            <h2 class=\"prices__title second-title\">Цены на услуги</h2>\r\n          </div>\r\n\r\n          <div class=\"prices__container container swiper\">\r\n            <ul class=\"prices__wrapper slide-wrapper swiper-wrapper\">\r\n              <li class=\"prices__slide swiper-slide\">\r\n                <p class=\"prices__content\">Ремонтные услуги</p>\r\n                <p class=\"prices__content\">Диагностика</p>\r\n                <p class=\"prices__content\">Цена</p>\r\n                <p class=\"prices__content\">Бесплатно</p>\r\n                <p class=\"prices__content\">Срок</p>\r\n                <p class=\"prices__content\">30 мин</p>\r\n                <button class=\"prices__button btn-order\">заказать</button>\r\n              </li>\r\n              <li class=\"prices__slide swiper-slide\">\r\n                <p class=\"prices__content\">Ремонтные услуги</p>\r\n                <p class=\"prices__content\">Замена дисплея</p>\r\n                <p class=\"prices__content\">Цена</p>\r\n                <p class=\"prices__content\">1000 ₽</p>\r\n                <p class=\"prices__content\">Срок</p>\r\n                <p class=\"prices__content\">30-120 мин</p>\r\n                <button class=\"prices__button btn-order\">заказать</button>\r\n              </li>\r\n              <li class=\"prices__slide swiper-slide\">\r\n                <p class=\"prices__content\">Ремонтные услуги</p>\r\n                <p class=\"prices__content\">Замена полифонического динамика</p>\r\n                <p class=\"prices__content\">Цена</p>\r\n                <p class=\"prices__content\">1000 ₽</p>\r\n                <p class=\"prices__content\">Срок</p>\r\n                <p class=\"prices__content\">30-120 мин</p>\r\n                <button class=\"prices__button btn-order\">заказать</button>\r\n              </li>\r\n              <li class=\"prices__slide swiper-slide\">\r\n                <p class=\"prices__content\">Ремонтные услуги</p>\r\n                <p class=\"prices__content\">\r\n                  Тестирование с выдачей технического заключения\r\n                </p>\r\n                <p class=\"prices__content\">Цена</p>\r\n                <p class=\"prices__content\">1000 ₽</p>\r\n                <p class=\"prices__content\">Срок</p>\r\n                <p class=\"prices__content\">30-120 мин</p>\r\n                <button class=\"prices__button btn-order\">заказать</button>\r\n              </li>\r\n              <li class=\"prices__slide swiper-slide\">\r\n                <p class=\"prices__content\">Ремонтные услуги</p>\r\n                <p class=\"prices__content\">Замена программного обеспечения</p>\r\n                <p class=\"prices__content\">Цена</p>\r\n                <p class=\"prices__content\">1000 ₽</p>\r\n                <p class=\"prices__content\">Срок</p>\r\n                <p class=\"prices__content\">30-120 мин</p>\r\n                <button class=\"prices__button btn-order\">заказать</button>\r\n              </li>\r\n            </ul>\r\n\r\n            <div class=\"swiper-pagination\"></div>\r\n          </div>\r\n\r\n          <div class=\"prices__table\">\r\n            <div class=\"table\">\r\n              <table>\r\n                <tr>\r\n                  <th>Ремонтные услуги</th>\r\n                  <th>Цена</th>\r\n                  <th>Срок</th>\r\n                  <th></th>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>Диагностика</td>\r\n                  <td>Бесплатно</td>\r\n                  <td>30 минут</td>\r\n                  <td>\r\n                    <button class=\"table__button btn-order\">заказать</button>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Замена дисплея</td>\r\n                  <td>1000 ₽</td>\r\n                  <td>30-120 мин</td>\r\n                  <td>\r\n                    <button class=\"table__button btn-order\">заказать</button>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Замена полифонического динамика</td>\r\n                  <td>1000 ₽</td>\r\n                  <td>30-120 мин</td>\r\n                  <td>\r\n                    <button class=\"table__button btn-order\">заказать</button>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Тестирование с выдачей технического заключения</td>\r\n                  <td>1000 ₽</td>\r\n                  <td>30-120 мин</td>\r\n                  <td>\r\n                    <button class=\"table__button btn-order\">заказать</button>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Замена программного обеспечения</td>\r\n                  <td>1000 ₽</td>\r\n                  <td>30-120 мин</td>\r\n                  <td>\r\n                    <button class=\"table__button btn-order\">заказать</button>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <p class=\"prices__line\">\r\n            Все цены указаны с учетом НДС. Стоимость ремонта указана на\r\n            единичную услугу. Для получения коммерческого предложения на\r\n            постоянное обслуживание, оставьте заявку.\r\n          </p>\r\n          <p class=\"prices__link\">\r\n            <a href=\"#\">Получить коммерческое предложение</a>\r\n          </p>\r\n        </section>\r\n\r\n        <!-- ________________________footer_________________________-->\r\n        <footer>\r\n          <div class=\"footer\">\r\n            <p class=\"footer__string\">\r\n              © 2019 CPS<br />Разработано командой Apesong\r\n            </p>\r\n            <p class=\"footer__string\">Политика конфиденциальности</p>\r\n            <p class=\"footer__string\">\r\n              Информация, размещенная на данной странице, не является публичной\r\n              офертой\r\n            </p>\r\n          </div>\r\n        </footer>\r\n      </main>\r\n      \r\n    </div>\r\n    <!-- ________________________popup feedback_________________________-->\r\n    <div class=\"popup\">\r\n      <div class=\"popup__body\">\r\n        <aside class=\"popup__content\">\r\n          <button class=\"btn-icon popup__close\" href=\"\"></button>\r\n          <h1 class=\"popup__title title\">Обратная связь</h1>\r\n          <input class=\"popup__input\" type=\"text\" placeholder=\"Имя\" name=\"username\"/>\r\n          <input class=\"popup__input\" type=\"text\" placeholder=\"Телефон\" name=\"usermobile\"/>\r\n          <input class=\"popup__input\" type=\"text\" placeholder=\"Электронная почта\" name=\"useremail\"/>\r\n          <textarea class=\"popup__input\" type=\"text\" placeholder=\"Сообщение\" name=\"usermessage\"></textarea>\r\n          <p class=\"popup__text\">\r\n            Нажимая “отправить”, вы даете согласие на <a class=\"popup__link\" href=\"\">обработку персональных\r\n            данных</a> и соглашаетесь с нашей <a class=\"popup__link\" href=\"\">политикой конфиденциальности</a>\r\n          </p>\r\n          <button class=\"popup__button btn-order\">отправить</button>\r\n        </aside>\r\n      </div>\r\n    </div>\r\n    <!-- ________________________popup call_________________________-->\r\n    <div class=\"popup popup-call\">\r\n      <div class=\"popup__body\">\r\n        <aside class=\"popup__content\">\r\n          <button class=\"btn-icon popup__close popup-call__close\" href=\"\"></button>\r\n          <h1 class=\"popup__title title\">Заказать звонок</h1>\r\n          <input class=\"popup__input\" type=\"text\" placeholder=\"Телефон\" name=\"usermobile\"/>\r\n          \r\n          <p class=\"popup__text\">\r\n            Нажимая “отправить”, вы даете согласие на <a class=\"popup__link\" href=\"\">обработку персональных\r\n            данных</a> и соглашаетесь с нашей <a class=\"popup__link\" href=\"\">политикой конфиденциальности</a>\r\n          </p>\r\n          <button class=\"popup__button btn-order\">отправить</button>\r\n        </aside>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/acer.png":
/*!**********************!*\
  !*** ./img/acer.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/acer.png";

/***/ }),

/***/ "./img/apple.png":
/*!***********************!*\
  !*** ./img/apple.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/apple.png";

/***/ }),

/***/ "./img/bosh.png":
/*!**********************!*\
  !*** ./img/bosh.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bosh.png";

/***/ }),

/***/ "./img/hp.png":
/*!********************!*\
  !*** ./img/hp.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/hp.png";

/***/ }),

/***/ "./img/lenovo.png":
/*!************************!*\
  !*** ./img/lenovo.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/lenovo.png";

/***/ }),

/***/ "./img/logo.svg":
/*!**********************!*\
  !*** ./img/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ "./img/pic.png":
/*!*********************!*\
  !*** ./img/pic.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pic.png";

/***/ }),

/***/ "./img/samsung.png":
/*!*************************!*\
  !*** ./img/samsung.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/samsung.png";

/***/ }),

/***/ "./img/sony.png":
/*!**********************!*\
  !*** ./img/sony.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sony.png";

/***/ }),

/***/ "./img/viewsonic.png":
/*!***************************!*\
  !*** ./img/viewsonic.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/viewsonic.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-709223"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map