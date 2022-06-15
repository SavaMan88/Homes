(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _burgerMenu = _interopRequireDefault(require("./components/burger-menu"));

var _scrollTo = _interopRequireDefault(require("./components/scroll-to"));

var _tabs = _interopRequireDefault(require("./components/tabs"));

var _gallery = _interopRequireDefault(require("./components/gallery"));

var _accordion = _interopRequireDefault(require("./components/accordion"));

var _slider = _interopRequireDefault(require("./components/slider"));

var _popup = _interopRequireDefault(require("./components/popup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
(function ($) {
  // When DOM is ready
  $(function () {
    _burgerMenu["default"].init();

    _scrollTo["default"].init();

    _tabs["default"].init();

    (0, _gallery["default"])();
    (0, _accordion["default"])();
    (0, _slider["default"])();

    _popup["default"].init();

    AOS.init();
    var coords = {
      '0': {
        lat: 40.71614505253804,
        lng: -74.06940334834171,
        infowindow: 'Jersey City Barbell'
      },
      '1': {
        lat: 40.71337833964479,
        lng: -74.0355962666336,
        infowindow: 'Own Your Fitness'
      },
      '2': {
        lat: 40.721298923039264,
        lng: -74.04703068215335,
        infowindow: 'Surge Fitness'
      },
      '3': {
        lat: 40.721298923039264,
        lng: -74.04703068215335,
        infowindow: 'WeStrong'
      },
      '4': {
        lat: 40.72421857195216,
        lng: -74.06560713859923,
        infowindow: 'Four Fitness JC'
      },
      '5': {
        lat: 40.714842920922706,
        lng: -74.04367285342991,
        infowindow: 'Patagonia Fitness'
      },
      '6': {
        lat: 40.71793335625015,
        lng: -74.04311130776847,
        infowindow: 'Dyamond Fitness'
      }
    };
    var markers = [],
        infoWindowContent = [],
        infowindow;

    function initialize(coords) {
      var mapOptions = {
        center: {
          lat: 40.71045191905063,
          lng: -74.05466191705308
        },
        zoom: 14,
        disableDefaultUI: true,
        panControl: true,
        styles: [{
          featureType: 'administrative',
          elementType: 'labels',
          stylers: [{
            visibility: 'on'
          }]
        }, {
          featureType: 'administrative',
          elementType: 'labels.text',
          stylers: [{
            color: '#000000'
          }]
        }, {
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry',
          stylers: [{
            color: '#ed0404'
          }]
        }, {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [{
            color: '#beb9b9'
          }]
        }, {
          featureType: 'landscape.natural.landcover',
          elementType: 'geometry',
          stylers: [{
            color: '#e02121'
          }]
        }, {
          featureType: 'landscape.natural.landcover',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#e21818'
          }]
        }, {
          featureType: 'poi',
          elementType: 'all',
          stylers: [{
            color: '#7dad6c'
          }]
        }, {
          featureType: 'poi.attraction',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#e80d0d'
          }]
        }, {
          featureType: 'poi.attraction',
          elementType: 'labels.text',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.business',
          elementType: 'geometry',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.business',
          elementType: 'labels',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.government',
          elementType: 'geometry',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.government',
          elementType: 'labels',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.medical',
          elementType: 'geometry',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.medical',
          elementType: 'labels',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#7cac6c'
          }]
        }, {
          featureType: 'poi.park',
          elementType: 'labels.text',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.place_of_worship',
          elementType: 'geometry',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.place_of_worship',
          elementType: 'labels',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.school',
          elementType: 'geometry',
          stylers: [{
            visibility: 'off'
          }, {
            color: '#ea0404'
          }]
        }, {
          featureType: 'poi.school',
          elementType: 'labels',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.school',
          elementType: 'labels.text',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.sports_complex',
          elementType: 'labels',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'road',
          elementType: 'labels.text',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'road.highway',
          elementType: 'all',
          stylers: [{
            color: '#98a392'
          }]
        }, {
          featureType: 'road.arterial',
          elementType: 'all',
          stylers: [{
            color: '#bab08f'
          }]
        }, {
          featureType: 'road.local',
          elementType: 'all',
          stylers: [{
            color: '#dccbc7'
          }]
        }, {
          featureType: 'road.local',
          elementType: 'labels.text',
          stylers: [{
            color: '#e71010'
          }]
        }, {
          featureType: 'transit.line',
          elementType: 'all',
          stylers: [{
            color: '#92735a'
          }]
        }, {
          featureType: 'transit.station',
          elementType: 'all',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{
            color: '#b1c5af'
          }]
        }, {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{
            color: '#b1c5af'
          }]
        }, {
          featureType: 'water',
          elementType: 'geometry.stroke',
          stylers: [{
            color: '#b1c5af'
          }]
        }, {
          featureType: 'water',
          elementType: 'labels.text',
          stylers: [{
            color: '#000000'
          }, {
            visibility: 'off'
          }]
        }, {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#000000'
          }]
        }, {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{
            color: '#000000'
          }]
        }, {
          featureType: 'water',
          elementType: 'labels.icon',
          stylers: [{
            visibility: 'off'
          }]
        }]
      };
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      $.each(coords, function (key, data) {
        infoWindowContent[key] = data.infowindow;
        var marker = new google.maps.Marker({
          position: {
            lat: data.lat,
            lng: data.lng
          },
          map: map,
          icon: 'assets/images/marker.svg'
        });
        infowindow = new google.maps.InfoWindow({
          content: '<div>' + data.infowindow + '</div>'
        });
        google.maps.event.addListener(marker, 'click', function () {
          infowindow.close();
          infowindow.setContent(infoWindowContent[key]);
          infowindow.open(map, marker);
        });
        markers.push(marker);
      });
    }

    $(document).on('click', '.js-marker', function () {
      var mid = $(this).data('marker');
      infowindow.close();
      google.maps.event.trigger(markers[mid], 'click');
    });
    initialize(coords);
  });
})(jQuery);

},{"./components/accordion":2,"./components/burger-menu":3,"./components/gallery":4,"./components/popup":5,"./components/scroll-to":6,"./components/slider":7,"./components/tabs":8}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var CLASS_WRAP = 'js-accordion-wrap';
var CLASS_ACCORDION = 'js-accordion';
var CLASS_HEAD = 'js-accordion-head';
var CLASS_OPENER = 'js-accordion-open';
var CLASS_CONTENT = 'js-accordion-content';
var CLASS_DESCRIPTION = 'js-accordion-descr';
var CLASS_OPEN = 'js-open';
var CLASS_ACTIVE = 'active';

function initAccordion() {
  var accordionList = document.querySelectorAll(".".concat(CLASS_ACCORDION));
  var openList = document.querySelectorAll(".".concat(CLASS_ACCORDION, ".").concat(CLASS_OPEN));

  if (accordionList.length) {
    accordionList.forEach(function (accordion) {
      var wrap = accordion.closest(".".concat(CLASS_WRAP));
      var open = accordion.querySelector(".".concat(CLASS_OPENER));
      open.addEventListener('click', function (e) {
        var target = e.target;
        var btn = target.closest(".".concat(CLASS_OPENER));
        var head = target.closest(".".concat(CLASS_HEAD));
        var trigger = head ? head : btn;

        if (wrap && wrap.getAttribute('data-only') != undefined) {
          var group = wrap.querySelector(".".concat(CLASS_ACCORDION)).getAttribute('data-group');
          var contentList = [];

          if (group) {
            var currentAccordionList = wrap.querySelectorAll("[data-group=\"".concat(group, "\"]"));
            currentAccordionList.forEach(function (accordion) {
              contentList.push(accordion.querySelector(".".concat(CLASS_CONTENT)));
            });
          } else {
            contentList = wrap.querySelectorAll(".".concat(CLASS_CONTENT));
          }

          showAccordion(trigger, contentList, false);
        } else {
          showAccordion(trigger);
        }
      });
    });
    resize();
  }

  if (openList.length) {
    clickAccordion(openList);
  }

  function getDesctiptionHeight(currentAccordion) {
    var description = currentAccordion.querySelector(".".concat(CLASS_DESCRIPTION));
    var height = description.offsetHeight;
    var computedStyle = window.getComputedStyle(description);
    var marginTop = +computedStyle.marginTop.replace('px', '');
    var marginBottom = +computedStyle.marginBottom.replace('px', '');
    return height + marginTop + marginBottom;
  }

  function showAccordion(head) {
    var contentAccordion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var currentContent = head.nextElementSibling;
    var parent = currentContent.closest(".".concat(CLASS_ACCORDION));

    if (head.classList.contains(CLASS_ACTIVE)) {
      head.classList.remove(CLASS_ACTIVE);
      parent.classList.remove(CLASS_ACTIVE);
      currentContent.style.maxHeight = '0';
    } else {
      var changeParent = function changeParent(el) {
        parentDescription = el.closest(".".concat(CLASS_DESCRIPTION));

        if (parentDescription) {
          paretnContent = parentDescription.closest(".".concat(CLASS_CONTENT));
        } else {
          paretnContent = null;
        }
      };

      if (!all && contentAccordion.length) {
        contentAccordion.forEach(function (content) {
          content.previousElementSibling.classList.remove(CLASS_ACTIVE);
          content.style.maxHeight = '0';
        });
      }

      var heightDescription = getDesctiptionHeight(currentContent);
      var parentDescription;
      var paretnContent;
      changeParent(currentContent);

      if (paretnContent) {
        do {
          var oldHeight = paretnContent.scrollHeight;
          paretnContent.style.maxHeight = "".concat(oldHeight + heightDescription, "px");
          changeParent(paretnContent);
        } while (paretnContent);
      }

      head.classList.add(CLASS_ACTIVE);
      parent.classList.add(CLASS_ACTIVE);
      currentContent.style.maxHeight = heightDescription + 'px';
    }
  }

  function updateResize() {
    var activeAccordions = document.querySelectorAll(".".concat(CLASS_ACCORDION, ".").concat(CLASS_ACTIVE));
    var activeOpeners = document.querySelectorAll(".".concat(CLASS_OPENER, ".").concat(CLASS_ACTIVE));
    var activeHeads = document.querySelectorAll(".".concat(CLASS_HEAD, ".").concat(CLASS_ACTIVE));
    var activeContents = document.querySelectorAll(".".concat(CLASS_CONTENT, ".").concat(CLASS_ACTIVE));

    if (activeOpeners.length) {
      activeOpeners.forEach(function (el) {
        return el.classList.remove(".".concat(CLASS_ACTIVE));
      });
    }

    if (activeHeads.length) {
      activeHeads.forEach(function (el) {
        return el.classList.remove(".".concat(CLASS_ACTIVE));
      });
    }

    if (activeContents.length) {
      activeContents.forEach(function (el) {
        el.classList.remove(".".concat(CLASS_ACTIVE));
        el.style.maxHeight = '0';
      });
    }

    if (activeAccordions.length) {
      activeAccordions.forEach(function (el) {
        return el.classList.remove(".".concat(CLASS_ACTIVE));
      });
      clickAccordion(activeAccordions);
      clickAccordion(activeAccordions);
    }
  }

  function clickAccordion(list) {
    list.forEach(function (open) {
      var btn = open.querySelector(".".concat(CLASS_OPENER));

      if (btn) {
        btn.click();
      }
    });
  }

  function resize() {
    var changed = false;
    window.addEventListener('resize', function () {
      if (changed !== false) {
        clearTimeout(changed);
      }

      changed = setTimeout(updateResize, 200);
    });
  }
}

var _default = initAccordion;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BURGER = document.querySelector('.js-burger-open');
var NAV = document.querySelector('.js-burger');
var BODY = document.querySelector('body');
var CLASS_OVERFLOW = 'overflow';
var CLASS_ACTIVE = 'active';

var burgerMenu = function () {
  var burgeInit = function burgeInit() {
    if (!BURGER) return;
    BURGER.addEventListener('click', function (e) {
      if (!e.currentTarget.classList.contains('active')) {
        openBurger();
      } else {
        closeBurger();
      }
    });
  };

  var openBurger = function openBurger() {
    BURGER.classList.add(CLASS_ACTIVE);
    NAV.classList.add(CLASS_ACTIVE);
    BODY.classList.add(CLASS_OVERFLOW);
  };

  var closeBurger = function closeBurger() {
    BURGER.classList.remove(CLASS_ACTIVE);
    NAV.classList.remove(CLASS_ACTIVE);
    BODY.classList.remove(CLASS_OVERFLOW);
  };

  var init = function init() {
    burgeInit();
  };

  return {
    init: init,
    closeBurger: closeBurger
  };
}();

var _default = burgerMenu;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function initGallery() {
  var size = 1;
  var button = 1;
  var button_class = "active";
  var normal_size_class = "gallery-content-center-normal";
  var full_size_class = "gallery-content-center-full";
  var $container = $('#gallery-content-center');
  var btn_all = $('.filter__btn');
  if (!$container.length) return;
  $container.isotope({
    itemSelector: 'img'
  });

  function check_button() {
    btn_all.removeClass(button_class);

    if (button == 1) {
      $("#filter-all").addClass(button_class);
    }

    if (button == 2) {
      $("#filter-residence").addClass(button_class);
    }

    if (button == 3) {
      $("#filter-amenities").addClass(button_class);
    }

    if (button == 4) {
      $("#filter-heighborhood").addClass(button_class);
    }
  }

  function check_size() {
    $("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);

    if (size == 0) {
      $("#gallery-content-center").addClass(normal_size_class);
    }

    if (size == 1) {
      $("#gallery-content-center").addClass(full_size_class);
    }

    $container.isotope({
      itemSelector: 'img'
    });
  }

  $("#filter-all").click(function () {
    $container.isotope({
      filter: '.all'
    });
    button = 1;
    check_button();
  });
  $("#filter-residence").click(function () {
    $container.isotope({
      filter: '.residence'
    });
    button = 2;
    check_button();
  });
  $("#filter-amenities").click(function () {
    $container.isotope({
      filter: '.amenities'
    });
    button = 3;
    check_button();
  });
  $("#filter-heighborhood").click(function () {
    $container.isotope({
      filter: '.heighborhood'
    });
    button = 4;
    check_button();
  });
  check_button();
  check_size();
}

var _default = initGallery;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var showPopupBtns = document.querySelectorAll('.js-show-popup');
var popups = document.querySelectorAll('.js-popup');
var body = document.body;
var overlay = document.querySelector('.js-overlay');
var CLASS_ACTIVE = 'active';
var CLASS_OVERFLOW = 'overflow';

var popupsFunc = function () {
  var showPopup = function showPopup(event) {
    var openBtn = event.target.closest('.js-show-popup');
    var activePopup = document.querySelector('.js-popup.active');
    var targetPopup = document.querySelector("[data-popup=".concat(openBtn.dataset.trigger, "]"));

    if (activePopup) {
      activePopup.classList.remove(CLASS_ACTIVE);
    }

    if (openBtn.dataset.tab) {
      targetPopup.querySelector("[data-tab=\"".concat(openBtn.dataset.tab, "\"]")).classList.add(CLASS_ACTIVE);
      targetPopup.querySelector("[data-content=\"".concat(openBtn.dataset.tab, "\"]")).classList.add(CLASS_ACTIVE);
    }

    targetPopup.classList.add(CLASS_ACTIVE);
    body.classList.add(CLASS_OVERFLOW);
    overlay.classList.add(CLASS_ACTIVE);
  };

  var hidePopup = function hidePopup(activePopup) {
    if (!activePopup) {
      return;
    }

    body.classList.remove(CLASS_OVERFLOW);
    overlay.classList.remove(CLASS_ACTIVE);
    activePopup.classList.remove(CLASS_ACTIVE);

    if (document.querySelector('.active[data-content]') && document.querySelector('.active[data-tab]')) {
      document.querySelector('.active[data-content]').classList.remove(CLASS_ACTIVE);
      document.querySelector('.active[data-tab]').classList.remove(CLASS_ACTIVE);
    }
  };

  var showPopupInit = function showPopupInit() {
    if (showPopupBtns.length) {
      showPopupBtns.forEach(function (opener) {
        opener.addEventListener('click', function (event) {
          showPopup(event);
        });
      });
    }

    if (overlay) {
      overlay.addEventListener('click', function () {
        hidePopup(document.querySelector('.js-popup.active'));
      });
    }

    if (popups.length) {
      popups.forEach(function (popup) {
        popup.addEventListener('click', function (event) {
          var closeBtn = event.target.closest('.js-popup-close');

          if (!closeBtn) {
            return;
          }

          hidePopup(popup);
        });
      });
    }
  };

  var init = function init() {
    if (popups.length) {
      showPopupInit();
    }
  };

  return {
    init: init
  };
}();

var _default = popupsFunc;
exports["default"] = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// const ACTIVE = 'active';
var NAV_LINKS = document.querySelectorAll('.js-link-to');

var scrollTo = function () {
  var initScroll = function initScroll() {
    if (!NAV_LINKS.length) return;
    NAV_LINKS.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var href = e.currentTarget.getAttribute('href').substring(1);
        top(href);
      });
    });
  };

  var top = function top(id) {
    var scrollTarget = document.getElementById(id);
    if (!scrollTarget) return;
    var topOffset = 0;
    var fixHeader = document.querySelector('.js-fixed-header');

    if (fixHeader) {
      topOffset = fixHeader.offsetHeight;
    }

    var elementPosition = scrollTarget.getBoundingClientRect().top;
    var offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  var init = function init() {
    initScroll();
  };

  return {
    init: init,
    top: top
  };
}();

var _default = scrollTo;
exports["default"] = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var swiperSlider = function swiperSlider() {
  var accountantInit = new Swiper('.js-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.js-slider-nav',
      clickable: true
    },
    navigation: {
      nextEl: '.js-slider-next',
      prevEl: '.js-slider-prev'
    }
  });
};

var _default = swiperSlider;
exports["default"] = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var CLASS_ACTIVE = 'active';
var wrapList = document.querySelectorAll('.js-tabs');

var tabs = function () {
  var tabsInit = function tabsInit() {
    if (!wrapList.length) return;
    wrapList.forEach(function (wrap) {
      return attachEvents(wrap);
    });

    function attachEvents(parent) {
      var tabList = parent.querySelectorAll('[data-tab]'),
          contentList = parent.querySelectorAll('[data-content]');
      if (!tabList.length) return;
      tabList.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          tabList.forEach(function (btn) {
            return btn.classList.remove(CLASS_ACTIVE);
          });
          e.currentTarget.classList.add(CLASS_ACTIVE);
          var idContent = e.currentTarget.dataset.tab;

          if (idContent === 'all') {
            contentList.forEach(function (content) {
              return content.classList.add(CLASS_ACTIVE);
            });
          } else {
            var currentContentList = document.querySelectorAll("[data-content=\"".concat(idContent, "\"]"));
            contentList.forEach(function (content) {
              return content.classList.remove(CLASS_ACTIVE);
            });
            currentContentList.forEach(function (content) {
              return content.classList.add(CLASS_ACTIVE);
            });
          }
        });
      });
    }
  };

  var init = function init() {
    tabsInit();
  };

  return {
    init: init
  };
}();

var _default = tabs;
exports["default"] = _default;

},{}]},{},[1]);
