/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}

/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

//-------------------------------Прелоадер и плавное появление блоков---------------------------------
if (document.readyState === "complete") {
  init();
} else {
  window.addEventListener("load", init);
}

function init() {
  let preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.add('hide-preloader');
  }

  //плавное появление
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  };
}

/*---------------------------------------------Языковая панель--------------------------------------------*/
const languageContainer = document.querySelector('.top-header__languages');
const activeLanguage = document.querySelector('.active-language');
const languageDropdown = document.querySelector('.languages-dropdown-menu');

function toggleVisibility(element) {
  if (window.innerWidth <= 800) {
    element.classList.toggle('visible');
  }
}

function showElement(element) {
  if (window.innerWidth > 800) {
    element.classList.add('visible');
  }
}

function hideElement(element) {
  if (window.innerWidth > 800) {
    element.classList.remove('visible');
  }
}

if (languageContainer && activeLanguage && languageDropdown) {
  activeLanguage.addEventListener('click', () => {
    toggleVisibility(languageDropdown);
  });

  languageContainer.addEventListener('mouseenter', () => {
    showElement(languageDropdown);
  });

  languageContainer.addEventListener('mouseleave', () => {
    hideElement(languageDropdown);
  });

  languageDropdown.addEventListener('mouseenter', () => {
    showElement(languageDropdown);
  });

  languageDropdown.addEventListener('mouseleave', () => {
    hideElement(languageDropdown);
  });
}


/*--------------------------------------------Открытие каталога---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  var buttonHeaderCatalog = document.querySelector('.catalog-header__button');
  var closeButton = document.querySelector('.catalog-header__body-close');
  var headerCatalog = document.querySelector('.catalog-header__body');

  buttonHeaderCatalog.addEventListener('click', function () {
    buttonHeaderCatalog.classList.toggle('active');
    headerCatalog.classList.toggle('open');
    headerCatalog.classList.remove('closed');
  });

  closeButton.addEventListener('click', function () {
    buttonHeaderCatalog.classList.remove('active');
    headerCatalog.classList.remove('open');
    headerCatalog.classList.add('closed');
  });
});


/*--------------------------------------------Слайдер продукты---------------------------------------------*/
if (typeof Swiper !== 'undefined') {
  const hitSlider = new Swiper('.products__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    //Включение/отключение перетаскивания на ПК
    simulateTouch: true,
    //Курсор перетаскивания
    grabCursor: true,
    //Переключение при клике на слайд
    slideToClickedSlide: false,
    //Управление клавиатурой
    keyboard: {
      //Включить\Выключить
      enabled: false,
    },
    //Управление колесом мыши
    mousewheel: false,
    //Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,
    //Свободный режим (перетаскивание без фиксированных позиций)
    freeMode: true,
    //Скорость
    speed: 300,
    effect: 'slide',
    //Отступы между слайдами в(px)
    spaceBetween: 20,
    autoplay: {
      delay: 2000, // Задержка между переключениями в миллисекундах (в данном примере 5000 миллисекунд или 5 секунд)
      disableOnInteraction: true, // Если установлено в true, автоплей будет остановлен при взаимодействии пользователя с слайдером
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      }
    },
  });
}

/*--------------------------------------------Sidebar---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  // Получаем элементы кнопки и сайдбара
  const sidebarButton = document.getElementById('sidebar-button');
  const sidebar = document.getElementById('sidebar');

  // Проверяем наличие элементов
  if (!sidebarButton || !sidebar) {
    return; // Если элементы отсутствуют, выходим из функции
  }

  // Добавляем обработчик события на кнопку
  sidebarButton.addEventListener('click', function () {
    // Добавляем/удаляем классы в зависимости от текущего состояния
    sidebar.classList.toggle('open');
    sidebarButton.classList.toggle('active');
  });

  // Добавляем обработчик события для закрытия сайдбара при клике вне его области
  document.addEventListener('click', function (event) {
    // Проверяем, является ли цель клика частью сайдбара или его кнопки
    const isClickInsideSidebar = sidebar.contains(event.target) || sidebarButton.contains(event.target);

    // Если клик был вне сайдбара, закрываем его
    if (!isClickInsideSidebar) {
      sidebar.classList.remove('open');
      sidebarButton.classList.remove('active');
    }
  });
});


/*--------------------------------------------SUBMENU---------------------------------------------*/
var menuContainer = document.getElementById('menuContainer');

if (menuContainer) {
  menuContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('submenuTrigger')) {
      event.preventDefault();
      var submenuId = event.target.parentElement.dataset.submenu;
      var arrowId = event.target.parentElement.dataset.arrow;
      toggleSubmenu(submenuId, arrowId);
    }
  });
}

function toggleSubmenu(submenuId, arrowId) {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Проверяем наличие элементов
  var submenu = document.getElementById(submenuId);
  var arrow = document.getElementById(arrowId);

  if (submenu && arrow) {
    // Если элементы существуют, выполняем код
    if (screenWidth < 768) {
      submenu.classList.toggle("active");
      arrow.classList.toggle("rotated");
    }
  }
}

/*--------------------------------------------Перенос кнопки открытия сайдбара---------------------------------------------*/
var sidebarButton = document.getElementById('sidebar-button');
var mainHeaderBody = document.querySelector('.main-header__body');

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);

function checkScreenWidth() {
  var screenWidth = window.innerWidth;

  // Проверяем наличие элементов
  if (!sidebarButton || !mainHeaderBody) {
    return; // Если элементы отсутствуют, выходим из функции
  }

  if (screenWidth < 800) {
    mainHeaderBody.appendChild(sidebarButton);
  } else {
    document.body.appendChild(sidebarButton);
  }
}


/*--------------------------------------------Слайдер партнеры---------------------------------------------*/
if (typeof Swiper !== 'undefined') {
  const hitSlider = new Swiper('.partners__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    //Включение/отключение перетаскивания на ПК
    simulateTouch: true,
    //Курсор перетаскивания
    grabCursor: true,
    //Переключение при клике на слайд
    slideToClickedSlide: false,
    //Управление клавиатурой
    keyboard: {
      //Включить\Выключить
      enabled: false,
    },
    //Управление колесом мыши
    mousewheel: false,
    //Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,
    //Свободный режим (перетаскивание без фиксированных позиций)
    freeMode: true,
    //Скорость
    speed: 300,
    effect: 'slide',
    //Отступы между слайдами в(px)
    spaceBetween: 40,
    autoplay: {
      delay: 2000, // Задержка между переключениями в миллисекундах (в данном примере 5000 миллисекунд или 5 секунд)
      disableOnInteraction: true, // Если установлено в true, автоплей будет остановлен при взаимодействии пользователя с слайдером
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 4,
      },
      600: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 7,
      }
    },
  });
}


/*--------------------------------------------Product gallery---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  const galleries = document.querySelectorAll('.lightgallery-product');

  // Проверяем, есть ли галереи на странице
  if (galleries.length > 0) {
    galleries.forEach(function (gallery) {
      lightGallery(gallery, {
        plugins: [lgZoom],
        speed: 500,
        download: false,
        closeOnTap: true,
        loop: false,
        hideControlOnEnd: true,
        alignThumbnails: 'middle',
        mobileSettings: {
          controls: true,
          showCloseIcon: true,
          download: false
        }
      });
    });
  } else {
  }

});


/*--------------------------------------------CHART---------------------------------------------*/
// Функция, которая будет вызываться при изменении видимости графика
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // График виден, создаем и запускаем анимацию
      createAndAnimateChart();
      // Отключаем дальнейшее отслеживание видимости
      observer.disconnect();
    }
  });
}

// Функция для создания и анимации графика
function createAndAnimateChart() {
  const ctx = document.getElementById('myChart');
  if (ctx) {
    let delayed;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Оптовая торговля медикаментами', 'Оптовая торговля мед. изделиямиями', 'Реализация реагентов, расходных материалов для лаборатории', 'Реализация медицинского оборудования'],
        datasets: [{
          label: '% ',
          data: [27, 23, 5, 45],
          backgroundColor: [
            'rgba(100, 149, 237, 0.7)', // Cornflower Blue
            'rgba(70, 130, 180, 0.7)', // Steel Blue
            'rgba(0, 0, 128, 0.7)',    // Navy
            'rgba(30, 144, 255, 0.7)'  // Dodger Blue
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: ''
          }
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      }
    });
  }
}

// Создаем Intersection Observer и начинаем отслеживать видимость
const observer = new IntersectionObserver(handleIntersection);
const chartElement = document.getElementById('myChart');
if (chartElement) {
  observer.observe(chartElement);
}

/*--------------------------------------------Скрытие доп характеристик в карточке товара---------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  var characteristicsBlock = document.querySelector('.product__characteristics');
  var showMoreButton = document.getElementById('showMoreButton');
  var showMoreButtonDiv = document.querySelector('.characteristic__show-more-btn');

  // Проверяем, существуют ли необходимые элементы
  if (characteristicsBlock && showMoreButton && showMoreButtonDiv) {
    showMoreButton.addEventListener('click', function () {
      characteristicsBlock.classList.toggle('expand');
      showMoreButtonDiv.style.display = 'none';
    });
  }
});

/*--------------------------------------------Слайдер миссии---------------------------------------------*/
if (typeof Swiper !== 'undefined') {
  const hitSlider = new Swiper('.missions__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    parallax: true,
    navigation: {
      nextEl: '.mission-button-next',
      prevEl: '.mission-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    //Включение/отключение перетаскивания на ПК
    simulateTouch: true,
    //Курсор перетаскивания
    grabCursor: true,
    //Переключение при клике на слайд
    slideToClickedSlide: false,
    //Управление клавиатурой
    keyboard: {
      //Включить\Выключить
      enabled: false,
    },
    //Управление колесом мыши
    mousewheel: false,
    //Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,
    //Свободный режим (перетаскивание без фиксированных позиций)
    freeMode: false,
    //Скорость
    speed: 300,
    slidesPerView: 1,
    effect: 'fade',
    //Отступы между слайдами в(px)
    spaceBetween: 40,
    autoplay: {
      delay: 3000, // Задержка между переключениями в миллисекундах (в данном примере 5000 миллисекунд или 5 секунд)
      disableOnInteraction: true, // Если установлено в true, автоплей будет остановлен при взаимодействии пользователя с слайдером
    },
  });
}


/*--------------------------------------------Попап КП---------------------------------------------*/
const body = document.body;
const modalKp = document.getElementById("modal");
const kpButton = document.getElementById("kp-button");
const closeModalKp = document.getElementById("closeModal");

if (kpButton && closeModalKp) {
  kpButton.addEventListener("click", function () {
    body.classList.add("modal");
    modalKp.classList.add("show-modal");
  });

  closeModalKp.addEventListener("click", function () {
    body.classList.remove("modal");
    modalKp.classList.remove("show-modal");
  });
}

if (modalKp) {
  body.addEventListener("click", function (event) {
    if (!modalKp.contains(event.target) && !(event.target === kpButton)) {
      body.classList.remove("modal");
      modalKp.classList.remove("show-modal");
    }
  });
}


})();

/******/ })()
;