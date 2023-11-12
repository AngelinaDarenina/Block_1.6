//-------------------------------------------------------------------------------------------------------------------------------
//кнопка бокового меню (меняется при нажимании)
//-------------------------------------------------------------------------------------------------------------------------------

const buttonsParent = document.querySelector('.menu');// Получаем ссылку на контейнер
let activeButton = null; // Переменная для отслеживания текущей активной кнопки

// Функция для добавления/удаления класса и изменения кнопки при нажатии
function toggleClassAndColorButton(event) {
    const button = event.target;     //цель события

    if (button.classList.contains('menu__btn')) {    //если элемент, на котором произошло событие содержит данный класс, то 
        if (activeButton) {                           //если activeButton не null, то 
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
const burgerButton = document.querySelector('.header__icon:nth-child(1)');
const asidePanel = document.querySelector('.aside');
const cover = document.querySelector('.cover')

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

const readMore = document.querySelector('.content__read-more');
const text = document.querySelector('.content__text');


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



const button = document.querySelector('.btn'); //кнопка
const hiddenSlides767 = document.querySelectorAll('.slide_hidden-767'); // слайды (бренды), которые скрыты при ширине экрана 767px
const hiddenSlides1439 = document.querySelectorAll('.slide_hidden-1439'); // слайды (бренды), которые скрыты при ширине экрана 1439px

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

const buttonDevices = document.querySelector('.btn-devices');
const hiddenDevicesSlides767 = document.querySelectorAll('.devices__slide_hidden-767'); 
const hiddenDevicesSlides1439 = document.querySelectorAll('.devices__slide_hidden-1439'); 


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


const feedbackButtons = document.querySelectorAll('.feedback');
const closeButton=document.querySelector(".popup__close")
const popup = document.querySelector('.popup');


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


const callButtons = document.querySelectorAll('.call');
const closeCallButton=document.querySelector(".popup-call__close")
const popupCall = document.querySelector('.popup-call');


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
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


let swiper = null; // Инициализируем переменную для хранения экземпляра свайпера

function initializeSwiper() {
  swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    modules: [Navigation, Pagination],
  });
}

function disableSwiperIfScreenIsWide() {
  const screenWidth = window.innerWidth;

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

