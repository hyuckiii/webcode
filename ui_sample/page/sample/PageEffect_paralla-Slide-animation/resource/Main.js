/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _MainPromotion = __webpack_require__(1);
	
	var _MainNews = __webpack_require__(12);
	
	var _MainEvents = __webpack_require__(13);
	
	var _MainFacebook = __webpack_require__(14);
	
	var _MainCommunity = __webpack_require__(15);
	
	var _MainMovie = __webpack_require__(16);
	
	var _Lang = __webpack_require__(9);
	
	var _Lang2 = _interopRequireDefault(_Lang);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function ($, window) {
	    'use strict';
	
	    new _MainPromotion.MainPromotion();
	    new _MainNews.MainNews();
	    new _MainEvents.MainEvents();
	    new _MainFacebook.MainFacebook();
	    new _MainCommunity.MainCommunity();
	    new _MainMovie.MainMovie();
	
	    var movieModal = new nc.ui.Modal({
	        type: 'youtube',
	        isEsc: true,
	        movieParams: '',
	        isAutoButton: true
	    });
	
	    var movieParams = '?vq=hd720&autoplay=1&version=3&enablejsapi=1&rel=0';
	
	    $('[data-youtube]').on('click', function (evt) {
	        evt.preventDefault();
	
	        var youtubeId = $(this).data('youtube');
	
	        movieModal.setYoutubeUrl('https://www.youtube.com/embed/' + youtubeId + movieParams);
	        movieModal.show();
	    });
	
	    $('.rocks-left .layer').parallax({
	        mouseport: '.index-container',
	        yparallax: '40px',
	        xparallax: '50px'
	    }, {
	        mouseport: '.index-container',
	        yparallax: '50px',
	        xparallax: '60px'
	    }, {
	        mouseport: '.index-container',
	        yparallax: '90px',
	        xparallax: '80px'
	    });
	
	    $('.rocks-right .layer').parallax({
	        mouseport: '.index-container',
	        yparallax: '50px',
	        xparallax: '30px'
	    }, {
	        mouseport: '.index-container',
	        yparallax: '70px',
	        xparallax: '90px'
	    }, {
	        mouseport: '.index-container',
	        yparallax: '90px',
	        xparallax: '100px'
	    }, {
	        mouseport: '.index-container',
	        yparallax: '110px',
	        xparallax: '100px'
	    });
	
	    var htmlLang = jQuery('html').attr('lang') || 'ko',
	        smartTitle = _Lang2.default[htmlLang].smart_title;
	
	    $.smartbanner({
	        daysHidden: 365,
	        daysReminder: 0,
	        appStoreLanguage: htmlLang,
	        icon: 'http://akstatic.plaync.com/rk/v1/img/main_launching/RK_3x.png',
	        author: 'NCSOFT Corporation',
	        title: smartTitle,
	        button: 'View',
	        // appendToSelector: '#container',
	        url: 'https://play.google.com/store/apps/details?id=com.ncsoft.redknights'
	    });
	})(window.jQuery, window); /**
	                            * App
	                            */
	
	//Main class를 Main으로 import

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Main
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Template = __webpack_require__(8);
	
	var _Template2 = _interopRequireDefault(_Template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainPromotion = function () {
	    function MainPromotion() {
	        _classCallCheck(this, MainPromotion);
	
	        this.init();
	    }
	
	    _createClass(MainPromotion, [{
	        key: 'init',
	        value: function init() {
	            var _promotionData = rkMain.promotion.list;
	            var _tmp = '';
	
	            for (var i = 0; _promotionData[i]; i++) {
	                //import한 Template의 list메소드 호출
	
	                if (_promotionData[i].isActive == 'on') {
	                    _tmp += _Template2.default.promo(_promotionData[i]);
	                }
	            }
	
	            jQuery('#sectionPromotion').append('<div class="promo-list">' + _tmp + '</div>');
	
	            this.get();
	        }
	    }, {
	        key: 'get',
	        value: function get() {
	            var $promoList = $('.promo-list');
	
	            var resizeMovie = function resizeMovie() {
	                var _h = $promoList.height(),
	                    _w = $promoList.width(),
	                    _vw = parseInt(_h * 16 / 9),
	                    //16:9
	                _vmargin = (_w - _vw) / 2;
	
	                // video의 width가 작을 경우
	                if (_w > _vw) {
	                    _h = _w * 9 / 16;
	                    _vw = _w;
	                    _vmargin = 0;
	                }
	
	                $promoList.find('video').css({
	                    'width': _vw + 'px',
	                    'height': _h + 'px',
	                    'margin-left': _vmargin + 'px'
	                });
	            };
	
	            // slick paging
	            $promoList.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	                var i = (currentSlide ? currentSlide : 0) + 1;
	                $('.promo-page').html('<span class="current">' + i + '</span> &#47; <span class="total">' + slick.slideCount + '</span>');
	
	                var currentVideo = $('.slick-current', '.promo-list').find('video');
	
	                $("video", $promoList).each(function () {
	                    $(this).get(0).pause();
	                });
	
	                if (currentVideo.length == 1) {
	                    resizeMovie();
	                    $(currentVideo).get(0).play();
	                }
	            });
	
	            $promoList.slick({
	                paginations: true,
	                arrows: true,
	                slidesToShow: 1,
	                slidesToScroll: 1
	            });
	
	            var defaultPadding = void 0;
	
	            var initHeaderPadding = function initHeaderPadding() {
	                defaultPadding = parseInt($('.section-group-header').css('paddingTop').replace('px', ''));
	            };
	
	            var setHeaderPadding = function setHeaderPadding() {
	                $('.section-group-header').css({
	                    'paddingTop': function paddingTop() {
	                        var currentScrollTop = $(window).scrollTop();
	                        var sum = defaultPadding - currentScrollTop;
	
	                        if (sum <= 0) {
	                            sum = 0;
	                        }
	
	                        return sum + 'px';
	                    }
	                });
	            };
	
	            var setActiveSlickArrows = function setActiveSlickArrows() {
	                var currentScrollTop = $(window).scrollTop();
	
	                if (currentScrollTop == 0) {
	                    $('.slick-arrow', '#sectionPromotion').addClass('is-active');
	                } else {
	                    $('.slick-arrow', '#sectionPromotion').removeClass('is-active');
	                }
	            };
	
	            $(window).on({
	                'load': function load() {
	                    initHeaderPadding();
	                    setHeaderPadding();
	                    setActiveSlickArrows();
	                },
	                'resize': function resize() {
	                    if ($(window).width() <= 639) {
	                        $('.section-group-header').css('paddingTop', '460px');
	                    } else {
	                        $('.section-group-header').css('paddingTop', '700px');
	                    }
	
	                    if ($('video', $promoList).length != 0) {
	                        resizeMovie();
	                    }
	
	                    initHeaderPadding();
	                },
	                'scroll': function scroll() {
	                    setActiveSlickArrows();
	                    setHeaderPadding();
	                }
	            });
	        }
	    }]);
	
	    return MainPromotion;
	}();
	
	;
	
	module.exports = { MainPromotion: MainPromotion };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _promisePolyfill = __webpack_require__(3);
	
	var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
	
	var _convertCamelcase = __webpack_require__(6);
	
	var _convertCamelcase2 = _interopRequireDefault(_convertCamelcase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Connect
	 */
	
	jQuery.support.cors = true;
	
	var camelCase = new _convertCamelcase2.default();
	
	var Util = {
	
	  net: function net() {
	    var dot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	    if (/^dev\./.test(location.hostname)) {
	      return 'dev' + dot;
	    } else if (/^(rc\.|rc-)/.test(location.hostname)) {
	      return 'rc' + dot;
	    } else if (/^opdev/.test(location.hostname)) {
	      return 'opdev' + dot;
	    } else {
	      return '';
	    }
	  },
	
	  diffDate: function diffDate(date1, date2) {
	    if (!date1 || !date2) return 0;
	    var diff = date2.getTime() - date1.getTime();
	    return diff;
	  },
	
	  isDate: function isDate(val) {
	    var d = new Date(val);
	    return !isNaN(d.valueOf());
	  },
	
	  get: function get(url) {
	    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	    var data = arguments[2];
	
	    if (!url) return '';
	    return new _promisePolyfill2.default(function (resolve, reject) {
	      jQuery.ajax({
	        url: url,
	        method: method,
	        data: data,
	        cache: false,
	        //xhrFields: {withCredentials: true},
	        success: function success(data) {
	          resolve(data);
	        },
	        error: function error(_data) {
	          reject(_data);
	        }
	      });
	    });
	  },
	
	  getJsonp: function getJsonp(url) {
	    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	    var data = arguments[2];
	
	    if (!url) return '';
	    return new _promisePolyfill2.default(function (resolve, reject) {
	      jQuery.ajax({
	        url: url,
	        method: method,
	        data: data,
	        dataType: 'jsonp',
	        cache: false,
	        //xhrFields: {withCredentials: true},
	        success: function success(data) {
	          resolve(data);
	        },
	        error: function error(_data) {
	          reject(_data);
	        }
	      });
	    });
	  },
	
	  getParams: function getParams() {
	    var _vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
	      _vars[key] = value;
	    });
	    return _vars;
	  },
	  confirm: function (_confirm) {
	    function confirm(_x4, _x5, _x6) {
	      return _confirm.apply(this, arguments);
	    }
	
	    confirm.toString = function () {
	      return _confirm.toString();
	    };
	
	    return confirm;
	  }(function (msg, resolve, reject) {
	    var r = confirm(msg);
	    if (r) {
	      resolve();
	    } else {
	      reject();
	    }
	  }),
	  hashs: function hashs(url) {
	    var vars = {};
	    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
	      vars[key] = value;
	    });
	    return vars;
	  },
	  getHash: function getHash() {
	    var _hash = '';
	    if (document.location.hash) {
	      _hash = document.location.hash;
	      _hash = _hash.replace('#', '');
	    }
	    return _hash;
	  },
	  escape: function escape(str) {
	    str = str.replace(/<script>/g, '&lt;script&gt;');
	    str = str.replace(/<\/script>/g, '&lt;/script&gt;');
	    str = str.replace(/<body>/g, '&lt;body&gt;');
	    str = str.replace(/<\/body>/g, '&lt;/body&gt;');
	
	    // str = str.replace( /</g, `&lt;` );
	    // str = str.replace( />/g, `&gt;` );
	
	    return str;
	  },
	
	  escapeTag: function escapeTag(str) {
	    str = str.replace(/</g, '&lt;');
	    str = str.replace(/>/g, '&gt;');
	    return str;
	  },
	
	  decode: function decode(str) {
	    str = str.replace(/&lt;/g, '<');
	    str = str.replace(/&gt;/g, '>');
	
	    return str;
	  },
	
	  convertCamelCase: function convertCamelCase(obj) {
	    return camelCase.convert(obj);
	  },
	
	  getCookie: function getCookie(name) {
	    var nameOfCookie = name + '=';
	    var endOfCookie = '';
	    var x = 0;
	
	    while (x <= document.cookie.length) {
	      var y = x + nameOfCookie.length;
	      if (document.cookie.substring(x, y) == nameOfCookie) {
	        if ((endOfCookie = document.cookie.indexOf(';', y)) == -1) endOfCookie = document.cookie.length;
	        return unescape(document.cookie.substring(y, endOfCookie));
	      }
	      x = document.cookie.indexOf(' ', x) + 1;
	      if (x == 0) break;
	    }
	    return '';
	  },
	
	  setCookie: function setCookie(name, value) {
	    var expiredays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 99999;
	
	    var todayDate = new Date();
	    todayDate.setDate(todayDate.getDate() + expiredays);
	    document.cookie = name + '=' + escape(value) + '; expires=' + todayDate.toGMTString() + ';';
	  }
	};
	
	module.exports = Util;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (root) {
	
	  // Store setTimeout reference so promise-polyfill will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var setTimeoutFunc = setTimeout;
	
	  function noop() {}
	
	  // Polyfill for Function.prototype.bind
	  function bind(fn, thisArg) {
	    return function () {
	      fn.apply(thisArg, arguments);
	    };
	  }
	
	  function Promise(fn) {
	    if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
	    if (typeof fn !== 'function') throw new TypeError('not a function');
	    this._state = 0;
	    this._handled = false;
	    this._value = undefined;
	    this._deferreds = [];
	
	    doResolve(fn, this);
	  }
	
	  function handle(self, deferred) {
	    while (self._state === 3) {
	      self = self._value;
	    }
	    if (self._state === 0) {
	      self._deferreds.push(deferred);
	      return;
	    }
	    self._handled = true;
	    Promise._immediateFn(function () {
	      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	      if (cb === null) {
	        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	        return;
	      }
	      var ret;
	      try {
	        ret = cb(self._value);
	      } catch (e) {
	        reject(deferred.promise, e);
	        return;
	      }
	      resolve(deferred.promise, ret);
	    });
	  }
	
	  function resolve(self, newValue) {
	    try {
	      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
	      if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
	        var then = newValue.then;
	        if (newValue instanceof Promise) {
	          self._state = 3;
	          self._value = newValue;
	          finale(self);
	          return;
	        } else if (typeof then === 'function') {
	          doResolve(bind(then, newValue), self);
	          return;
	        }
	      }
	      self._state = 1;
	      self._value = newValue;
	      finale(self);
	    } catch (e) {
	      reject(self, e);
	    }
	  }
	
	  function reject(self, newValue) {
	    self._state = 2;
	    self._value = newValue;
	    finale(self);
	  }
	
	  function finale(self) {
	    if (self._state === 2 && self._deferreds.length === 0) {
	      Promise._immediateFn(function () {
	        if (!self._handled) {
	          Promise._unhandledRejectionFn(self._value);
	        }
	      });
	    }
	
	    for (var i = 0, len = self._deferreds.length; i < len; i++) {
	      handle(self, self._deferreds[i]);
	    }
	    self._deferreds = null;
	  }
	
	  function Handler(onFulfilled, onRejected, promise) {
	    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	    this.promise = promise;
	  }
	
	  /**
	   * Take a potentially misbehaving resolver function and make sure
	   * onFulfilled and onRejected are only called once.
	   *
	   * Makes no guarantees about asynchrony.
	   */
	  function doResolve(fn, self) {
	    var done = false;
	    try {
	      fn(function (value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      }, function (reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      });
	    } catch (ex) {
	      if (done) return;
	      done = true;
	      reject(self, ex);
	    }
	  }
	
	  Promise.prototype['catch'] = function (onRejected) {
	    return this.then(null, onRejected);
	  };
	
	  Promise.prototype.then = function (onFulfilled, onRejected) {
	    var prom = new this.constructor(noop);
	
	    handle(this, new Handler(onFulfilled, onRejected, prom));
	    return prom;
	  };
	
	  Promise.all = function (arr) {
	    var args = Array.prototype.slice.call(arr);
	
	    return new Promise(function (resolve, reject) {
	      if (args.length === 0) return resolve([]);
	      var remaining = args.length;
	
	      function res(i, val) {
	        try {
	          if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
	            var then = val.then;
	            if (typeof then === 'function') {
	              then.call(val, function (val) {
	                res(i, val);
	              }, reject);
	              return;
	            }
	          }
	          args[i] = val;
	          if (--remaining === 0) {
	            resolve(args);
	          }
	        } catch (ex) {
	          reject(ex);
	        }
	      }
	
	      for (var i = 0; i < args.length; i++) {
	        res(i, args[i]);
	      }
	    });
	  };
	
	  Promise.resolve = function (value) {
	    if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
	      return value;
	    }
	
	    return new Promise(function (resolve) {
	      resolve(value);
	    });
	  };
	
	  Promise.reject = function (value) {
	    return new Promise(function (resolve, reject) {
	      reject(value);
	    });
	  };
	
	  Promise.race = function (values) {
	    return new Promise(function (resolve, reject) {
	      for (var i = 0, len = values.length; i < len; i++) {
	        values[i].then(resolve, reject);
	      }
	    });
	  };
	
	  // Use polyfill for setImmediate for performance gains
	  Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
	    setImmediate(fn);
	  } || function (fn) {
	    setTimeoutFunc(fn, 0);
	  };
	
	  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
	    if (typeof console !== 'undefined' && console) {
	      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	    }
	  };
	
	  /**
	   * Set the immediate function to execute callbacks
	   * @param fn {function} Function to execute
	   * @deprecated
	   */
	  Promise._setImmediateFn = function _setImmediateFn(fn) {
	    Promise._immediateFn = fn;
	  };
	
	  /**
	   * Change the function to execute on unhandled rejection
	   * @param {function} fn Function to execute on unhandled rejection
	   * @deprecated
	   */
	  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
	    Promise._unhandledRejectionFn = fn;
	  };
	
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Promise;
	  } else if (!root.Promise) {
	    root.Promise = Promise;
	  }
	})(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).setImmediate))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {"use strict";
	
	var nextTick = __webpack_require__(5).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  timeout.close();
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function (fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function (id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).setImmediate, __webpack_require__(4).clearImmediate))

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports = module.exports = __webpack_require__(7);

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	/*
	 * js-observer - lib/Camelize.js
	 * Copyright(c) 2015 ingpdw <ingpdw@gmail.com>
	 */
	
	exports = module.exports = function () {
	    function Camelize() {
	        _classCallCheck(this, Camelize);
	    }
	
	    _createClass(Camelize, [{
	        key: 'isNumerical',
	        value: function isNumerical(obj) {
	            obj = obj - 0;
	            return obj === obj;
	        }
	    }, {
	        key: 'isArray',
	        value: function isArray(obj) {
	            return obj instanceof Array;
	        }
	    }, {
	        key: 'toCamel',
	        value: function toCamel(string) {
	            if (this.isNumerical(string)) {
	                return string;
	            }
	
	            string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
	                return chr ? chr.toUpperCase() : '';
	            });
	
	            return string.substr(0, 1).toLowerCase() + string.substr(1);
	        }
	    }, {
	        key: 'convert',
	        value: function convert(obj) {
	            var _tmp = void 0,
	                _item = void 0,
	                _key = void 0,
	                _value = void 0,
	                _len = void 0;
	
	            //isArray?
	            if (this.isArray(obj)) {
	                _tmp = [];
	
	                for (_item = 0, _len = obj.length; _item < _len; _item++) {
	
	                    _value = obj[_item];
	
	                    if ((typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) === 'object') _value = this.convert(_value);
	
	                    _tmp.push(_value);
	                }
	
	                //isObject?
	            } else {
	                _tmp = {};
	                for (_item in obj) {
	                    if (obj.hasOwnProperty(_item)) {
	                        _key = this.toCamel(_item);
	                        _value = obj[_item];
	                        if (_value !== null && (typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) === 'object') _value = this.convert(_value);
	
	                        _tmp[_key] = _value;
	                    }
	                }
	            }
	
	            return _tmp;
	        }
	    }]);
	
	    return Camelize;
	}();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Lang = __webpack_require__(9);
	
	var _Lang2 = _interopRequireDefault(_Lang);
	
	var _dateFormatSimple = __webpack_require__(10);
	
	var _dateFormatSimple2 = _interopRequireDefault(_dateFormatSimple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Template
	var Config = {
		L10N: _Lang2.default[jQuery('html').attr('lang') || 'ko'],
		now: window.userData && window.userData.now ? window.userData.now : ''
	};
	
	var dateFormat = new _dateFormatSimple2.default(Config.now, {
		'a_few_seconds_ago': Config.L10N.a_few_seconds_ago,
		'seconds_ago': Config.L10N.seconds_ago,
		'a_minute_ago': Config.L10N.a_minute_ago,
		'minutes_ago': Config.L10N.minutes_ago,
		'an_hour_ago': Config.L10N.an_hour_ago,
		'hours_ago': Config.L10N.hours_ago,
		'a_day_ago': Config.L10N.a_day_ago,
		'days_ago': Config.L10N.days_ago,
		'a_month_ago': Config.L10N.a_month_ago,
		'months_ago': Config.L10N.months_ago,
		'a_year_ago': Config.L10N.a_year_ago,
		'years_ago': Config.L10N.years_ago
	}, true);
	
	module.exports = {
		promo: function promo(_list) {
			var _bgMovie = _list.video != '' && $('body').hasClass('pc') ? '\n\t\t\t<div class="promo-items-bg-movie">\n\t\t\t\t<video loop muted poster="">\n\t\t\t\t\t<source src="' + _list.video + '" type="video/mp4">\n\t\t\t\t</video>\n\t\t\t</div>' : '';
	
			var _btnTemplateNormal = _list.btnType == 'normal' ? '\n\t\t\t<div class="btns btns-normal">\n\t\t\t\t<a href="' + _list.btnNormalLink + '">\n\t\t\t\t\t<span class="bul"></span>\n\t\t\t\t\t<span class="txt">' + _list.btnNormaltext + '</span>\n\t\t\t\t</a>\n\t\t\t</div>' : '';
	
			var setBtnTemplateStore = function setBtnTemplateStore() {
				var temp = '';
				var _btnGoogle = '<a href="' + _list.btnGoogle + '" target="_blank" class="btn btn-store-android"><span></span></a>';
				var _btnApple = '<a href="' + _list.btnApple + '" target="_blank" class="btn btn-store-apple"><span></span></a>';
	
				if ($('body').hasClass('ANDROID')) {
					temp = '<div class="btns btns-store">' + _btnGoogle + '</div>';
				} else if ($('body').hasClass('IOS')) {
					temp = '<div class="btns btns-store">' + _btnApple + '</div>';
				} else {
					temp = '<div class="btns btns-store">' + _btnGoogle + ' ' + _btnApple + '</div>';
				}
	
				return temp;
			};
	
			var _btnTemplateStore = _list.btnType == 'appDownload' ? setBtnTemplateStore() : '';
	
			var setBtnTemplateMovie = function setBtnTemplateMovie() {
				var temp = '';
				var _movieButtons = '';
	
				if (_list.btnMovieYoutube1 != '') {
					_movieButtons += '<a href="https://www.youtube.com/watch?v=' + _list.btnMovieYoutube1 + '" data-youtube="' + _list.btnMovieYoutube1 + '">\n\t\t\t\t\t<img src="' + _list.btnMovieImage1 + '"  alt="" />\n\t\t\t\t\t<span class="play"></span>\n\t\t\t\t</a>';
				}
	
				if (_list.btnMovieYoutube2 != '') {
					_movieButtons += '<a href="https://www.youtube.com/watch?v=' + _list.btnMovieYoutube2 + '" data-youtube="' + _list.btnMovieYoutube2 + '">\n\t\t\t\t\t<img src="' + _list.btnMovieImage2 + '"  alt="" />\n\t\t\t\t\t<span class="play"></span>\n\t\t\t\t</a>';
				}
	
				return temp = '\n\t\t\t\t<div class="btns btns-movie">' + _movieButtons + '</div>\n\t\t\t';
			};
	
			var _btnTemplateMovie = _list.btnType == 'movieLayer' ? setBtnTemplateMovie() : '';
	
			var markup = '\n\t\t\t<div class="promo-items">\n\t\t\t\t<div class="promo-items-bg" style="background-image:url(' + _list.imgPc + ')"></div>\n\t\t\t\t<div class="promo-items-bg-mobile" style="background-image:url(' + _list.imgMobile + ')"></div>\n\t\t\t\t' + _bgMovie + '\n\t\t\t\t<div class="promo-items-bg-cover"></div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<div class="promo-items-info">\n\t\t\t\t\t<div class="cell">\n\t\t\t\t\t\t<div class="promo-page"></div>\n\t\t\t\t\t\t<div class="tit"><a href="' + _list.link + '">' + _list.title + '</a></div>\n\t\t\t\t\t\t<div class="desc"><a href="' + _list.link + '">' + _list.desc + '</a></div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t' + _btnTemplateNormal + '\n\t\t\t\t\t\t' + _btnTemplateStore + '\n\t\t\t\t\t\t' + _btnTemplateMovie + '\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>';
	
			return markup;
		},
	
		news: function news(_list) {
			var _link = _list.link == '' ? '#' : _list.link;
			var markup = '<li class="news-items ' + _list.strong + '"><a href="' + _link + '">' + _list.title + '</a></li>';
	
			return markup;
		},
	
		events: function events(_list) {
			var _link = _list.link == '' ? '#' : _list.link;
	
			var markup = '\n\t\t\t<div class="event-items">\n\t\t\t\t<a href="' + _link + '" class="event-items-link">\n\t\t\t\t\t<div class="event-items-bg" style="background-image:url(' + _list.image + ')"></div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="event-items-info">\n\t\t\t\t\t\t<div class="tit">' + _list.title + '</div>\n\t\t\t\t\t\t<div class="desc">' + _list.desc + '</div>\t\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>';
	
			return markup;
		},
	
		facebook: function facebook(_list) {
			var _imageUrl = _list.thumbnailUrl == '' || _list.thumbnailUrl == null ? '' : '<img src="' + _list.thumbnailUrl + '" class="feed-items-thumb" alt="" />';
			var _time = '<div class="time">' + dateFormat.printUntil(_list.postDate, 'month', true) + '</div>';
			var _desc = '<div class="desc">' + (_list.summary ? _list.summary.replace(/\n/g, '<br/>') : '') + '</div>';
	
			var markup = '\n\t\t\t<div class="feed-items">\n\t\t\t\t<a href="' + _list.url + '" target="_blank" class="feed-items-link">\n\t\t\t\t\t<div class="thumb">\n\t\t\t\t\t\t' + _imageUrl + '\n\t\t\t\t\t\t<span class="ribbon-fb"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t' + _desc + '\n\t\t\t\t\t' + _time + '\n\t\t\t\t</a>\n\t\t\t</div>';
	
			return markup;
		},
	
		community: function community(_list) {
			var _link = _list.link == '' ? '#' : _list.link;
	
			var markup = '\n\t\t\t<div class="comm-items">\n\t\t\t\t<a href="' + _link + '">\n\t\t\t\t\t<div class="thumb">\n\t\t\t\t\t\t<img src="' + _list.image + '" class="event-items-thumb" alt="' + _list.title + '" />\n\t\t\t\t\t\t<span class="category">' + _list.category + '</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tit">' + _list.title + '</div>\n\t\t\t\t\t<div class="desc">' + _list.desc + '</div>\n\t\t\t\t\t<div class="nick">' + _list.nick + '</div>\n\t\t\t\t</a>\n\t\t\t</div>';
	
			return markup;
		},
	
		movie: function movie(_list) {
			var markup = '\n        <div class="movie-items">\n            <a href="https://www.youtube.com/watch?v=' + _list.youtube + '" data-youtube="' + _list.youtube + '" class="movie-items-link">\n\t\t\t\t<img src="' + _list.image + '" class="movie-items-thumb" alt="" />\n\t\t\t\t<div class="movie-items-title">\n\t\t\t\t\t<span class="play"></span>\n\t\t\t\t\t<span class="title">' + _list.title + '</span>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>';
	
			return markup;
		}
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  'ko': {
	    'smart_title': '리니지 레드나이츠',
	    'a_few_seconds_ago': '몇 초 전',
	    'seconds_ago': '초 전',
	    'a_minute_ago': '일 분 전',
	    'minutes_ago': '분 전',
	    'an_hour_ago': '한 시간 전',
	    'hours_ago': '시간 전',
	    'a_day_ago': '하루 전',
	    'days_ago': '일 전',
	    'a_month_ago': '1달 전',
	    'months_ago': '달 전',
	    'a_year_ago': '1년 전',
	    'years_ago': '년 전'
	  },
	  'en': {
	    'smart_title': 'Lineage Red Knights',
	    'a_few_seconds_ago': 'a few seconds ago',
	    'seconds_ago': 'seconds ago',
	
	    'a_minute_ago': 'a minute ago',
	    'minutes_ago': 'minutes ago',
	
	    'an_hour_ago': 'an hour ago',
	    'hours_ago': 'hours ago',
	
	    'a_day_ago': 'a day ago',
	    'days_ago': 'days ago',
	
	    'a_month_ago': 'a month ago',
	    'months_ago': 'months ago',
	
	    'a_year_ago': 'a year ago',
	    'years_ago': 'years ago'
	  },
	  'zh': { //zh-tw
	    'smart_title': '天堂 Red Knights',
	    'a_few_seconds_ago': '剛才',
	    'seconds_ago': '秒前',
	
	    'a_minute_ago': '1分鐘前',
	    'minutes_ago': '分鐘前',
	
	    'an_hour_ago': '小時前',
	    'hours_ago': '小時前',
	
	    'a_day_ago': '1天前',
	    'days_ago': '天前',
	
	    'a_month_ago': '1個月前',
	    'months_ago': '個月前',
	
	    'a_year_ago': '1年前',
	    'years_ago': '年前'
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports = module.exports = __webpack_require__(11);

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var DateFormat = function () {
	  function DateFormat() {
	    var _now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();
	
	    var format = arguments[1];
	    var isGMT = arguments[2];
	
	    _classCallCheck(this, DateFormat);
	
	    this._now = _now;
	
	    this.isGMT = isGMT;
	
	    if (this.isGMT) {
	      this._now = this.toDate(this._now).getTime();
	    }
	
	    this.format = {
	      'a_few_seconds_ago': 'a few seconds ago',
	      'seconds_ago': 'seconds ago',
	      'a_minute_ago': 'a minute ago',
	      'minutes_ago': 'minutes ago',
	      'an_hour_ago': 'an hour ago',
	      'hours_ago': 'hours ago',
	      'a_day_ago': 'a day ago',
	      'days_ago': 'days ago',
	      'a_month_ago': 'a month ago',
	      'months_ago': 'months ago',
	      'a_year_ago': 'a year ago',
	      'years_ago': 'years ago'
	    };
	
	    this.extend(this.format, format);
	  }
	
	  _createClass(DateFormat, [{
	    key: 'extend',
	    value: function extend(dist, src) {
	      for (var item in src) {
	        if (src.hasOwnProperty(item)) dist[item] = src[item];
	      }
	    }
	  }, {
	    key: 'toDate',
	    value: function toDate(notUtc) {
	      return this.toGMTDate(notUtc, true);
	    }
	  }, {
	    key: 'toGMTDate',
	    value: function toGMTDate(utc, isNotUtc) {
	      var clientDate = new Date();
	      var zoneOffset = clientDate.getTimezoneOffset();
	
	      if (!utc) return clientDate;
	
	      if (isNotUtc) zoneOffset = 0;
	
	      var _utc = utc.split('T'),
	          date = _utc[0].split('-'),
	          time = _utc[1].split(':');
	
	      return new Date(date[0], parseInt(date[1], 10) - 1, date[2], time[0], parseInt(time[1], 10) - zoneOffset, time[2].split('.')[0]);
	    }
	  }, {
	    key: 'getNow',
	    value: function getNow() {
	      return new Date(this._now);
	    }
	  }, {
	    key: 'getNowMilisecond',
	    value: function getNowMilisecond() {
	      return this._now;
	    }
	  }, {
	    key: 'setNow',
	    value: function setNow() {
	      var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +new Date();
	
	      this._now = now;
	      return this._now;
	    }
	  }, {
	    key: 'calculate',
	    value: function calculate(myDate) {
	      var diff = Math.abs(this._now - myDate) / 1000,
	          years = Math.floor(diff / 31536000),
	          months = Math.floor(diff / 2592000),
	          days = Math.floor(diff / 86400),
	          hours = Math.floor(diff / 3600) % 24,
	          minutes = Math.floor(diff / 60) % 60,
	          seconds = Math.floor(diff % 60);
	
	      if (years > 1) return '' + years + this.format.years_ago;
	      if (years > 0) return '' + this.format.a_year_ago;
	
	      if (months > 1) return '' + months + this.format.months_ago;
	      if (months > 0) return '' + this.format.a_month_ago;
	
	      if (days > 1) return '' + days + this.format.days_ago;
	      if (days > 0) return '' + this.format.a_day_ago;
	
	      if (hours > 1) return '' + hours + this.format.hours_ago;
	      if (hours > 0) return '' + this.format.an_hour_ago;
	
	      if (minutes > 1) return '' + minutes + this.format.minutes_ago;
	      if (minutes > 0) return '' + this.format.a_minute_ago;
	
	      if (seconds > 20) return '' + seconds + this.format.seconds_ago;
	      if (seconds > 0) return '' + this.format.a_few_seconds_ago;
	
	      return '';
	    }
	  }, {
	    key: '_format',
	    value: function _format(_date, isOnlyDate) {
	      var y = _date.getFullYear(),
	          m = ('0' + (_date.getMonth() + 1)).slice(-2),
	          d = ('0' + _date.getDate()).slice(-2),
	          h = ('0' + _date.getHours()).slice(-2),
	          t = ('0' + _date.getMinutes()).slice(-2),
	          s = ('0' + _date.getSeconds()).slice(-2);
	
	      if (isOnlyDate) return y + '. ' + m + '. ' + d;
	
	      return y + '. ' + m + '. ' + d + ' ' + h + ':' + t + ':' + s;
	    }
	  }, {
	    key: 'diffDate',
	    value: function diffDate(date1, date2) {
	      if (!date1 || !date2) return 0;
	      return Math.abs(date2.getTime() - date1.getTime()) / 1000;
	    }
	  }, {
	    key: 'printUntil',
	    value: function printUntil(date) {
	      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'month';
	      var isOnlyDate = arguments[2];
	
	      var myDate = this.printFull(date, false, true);
	      var now = this.getNow();
	      var diff = this.diffDate(myDate, now);
	      var years = Math.floor(diff / 31536000);
	      var months = Math.floor(diff / 2592000);
	
	      if (years > 0 && type == 'year') {
	        return this._format(new Date(myDate), isOnlyDate);
	      }
	
	      if (months > 0 && type == 'month') {
	        return this._format(new Date(myDate), isOnlyDate);
	      }
	
	      return this.calculate(new Date(myDate));
	    }
	  }, {
	    key: 'printOnlyDate',
	    value: function printOnlyDate(utc) {
	      return this.printFull(utc, true);
	    }
	  }, {
	    key: 'printFull',
	    value: function printFull(utc, isOnlyDate, isPrintDate) {
	      var clientDate = new Date(),
	          _date = void 0,
	          _time = void 0;
	      var zoneOffset = clientDate.getTimezoneOffset();
	
	      if (!utc) return clientDate;
	
	      if (utc.indexOf('T') == -1) {
	        return this._format(new Date(utc));
	      }
	
	      utc = utc.split('T');
	      _date = utc[0].split('-');
	      _time = utc[1].split(':');
	
	      var y = _date[0],
	          m = parseInt(_date[1], 10) - 1,
	          d = _date[2],
	          h = _time[0],
	          t = parseInt(_time[1], 10) - zoneOffset,
	          s = _time[2].split('.')[0],
	          _newDate = new Date(y, m, d, h, t, s);
	
	      if (isPrintDate) return _newDate;
	
	      return this._format(_newDate, isOnlyDate);
	    }
	  }, {
	    key: 'print',
	    value: function print(myDate) {
	      if (!myDate) return '';
	      return this.calculate(myDate);
	    }
	  }]);
	
	  return DateFormat;
	}();
	
	exports.default = DateFormat;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Main
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Template = __webpack_require__(8);
	
	var _Template2 = _interopRequireDefault(_Template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainNews = function () {
	    function MainNews() {
	        _classCallCheck(this, MainNews);
	
	        this.init();
	    }
	
	    _createClass(MainNews, [{
	        key: 'init',
	        value: function init() {
	            this.get();
	        }
	    }, {
	        key: 'get',
	        value: function get() {
	            var _newsData = rkMain.news.list;
	            var _tmp = '';
	
	            for (var i = 0; _newsData[i]; i++) {
	                _tmp += _Template2.default.news(_newsData[i]);
	            }
	
	            $('.wrap-news').append('<ul class="news-list">' + _tmp + '</ul>');
	
	            var currentScrollTop = 0;
	            var $rocksLeft = $('#rocksLeft');
	            var $rocksRight = $('#rocksRight');
	
	            var rocksInit = function rocksInit() {
	                $rocksLeft.removeClass('disabled');
	                setTimeout(function () {
	                    $rocksRight.removeClass('disabled');
	                }, 200);
	            };
	
	            var rocksScroll = function rocksScroll(st) {
	                $rocksLeft.css('transform', 'translateY(' + st + 'px)');
	                $rocksRight.css('transform', 'translateY(' + st + 'px)');
	            };
	
	            $(window).on({
	                'load': function load() {
	                    rocksInit();
	                },
	                'scroll': function scroll() {
	                    currentScrollTop = $(window).scrollTop();
	                    if (currentScrollTop >= 600) return;
	
	                    rocksScroll(currentScrollTop);
	                }
	            });
	        }
	    }]);
	
	    return MainNews;
	}();
	
	;
	
	module.exports = { MainNews: MainNews };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Main
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Template = __webpack_require__(8);
	
	var _Template2 = _interopRequireDefault(_Template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainEvents = function () {
	    function MainEvents() {
	        _classCallCheck(this, MainEvents);
	
	        this.init();
	    }
	
	    _createClass(MainEvents, [{
	        key: 'init',
	        value: function init() {
	            this.get();
	        }
	    }, {
	        key: 'get',
	        value: function get() {
	            var _eventsData = rkMain.events.list;
	            var _tmp = '';
	
	            for (var i = 0; _eventsData[i]; i++) {
	                if (_eventsData[i].isActive == 'on') {
	                    _tmp += _Template2.default.events(_eventsData[i]);
	                }
	            }
	
	            $('.wrap-event').append('<ul class="event-list">' + _tmp + '</ul>');
	
	            $('.event-list').slick({
	                infinite: true,
	                slidesToShow: 1,
	                slidesToScroll: 1,
	                dots: true,
	                autoplay: true,
	                autoplaySpeed: 4000
	            });
	        }
	    }]);
	
	    return MainEvents;
	}();
	
	;
	
	module.exports = { MainEvents: MainEvents };

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Main
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Template = __webpack_require__(8);
	
	var _Template2 = _interopRequireDefault(_Template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainFacebook = function () {
	    function MainFacebook() {
	        _classCallCheck(this, MainFacebook);
	
	        this.init();
	    }
	
	    _createClass(MainFacebook, [{
	        key: 'init',
	        value: function init() {
	            this.getAjax();
	        }
	    }, {
	        key: 'getAjax',
	        value: function getAjax() {
	            //Util의 get( url, method, data );
	            //Util.get은 promise를 리턴한다.
	
	            var apiUrl = '' + _rkPath + _path + 'board/magazine/article/search/moreArticle?size=4&previousArticleId=0&summary=true';
	
	            var list = _Util2.default.get(apiUrl, 'GET', { size: 4, previousArticleId: 0, summanry: true });
	            list.then(function (_fbData) {
	                //resolve (성공시)
	                var _tmp = '';
	
	                for (var i = 0; _fbData.articleList[i]; i++) {
	                    _tmp += _Template2.default.facebook(_fbData.articleList[i]);
	                }
	
	                jQuery('.wrap-feeds').append('<div class="feed-list">' + _tmp + '</div>');
	
	                $('.feed-list').slick({
	                    infinite: false,
	                    slidesToShow: 4,
	                    slidesToScroll: 4,
	                    dots: true,
	                    responsive: [{
	                        breakpoint: 960,
	                        settings: {
	                            slidesToShow: 3,
	                            slidesToScroll: 3
	                        }
	                    }, {
	                        breakpoint: 700,
	                        settings: {
	                            slidesToShow: 2,
	                            slidesToScroll: 2
	                        }
	                    }, {
	                        breakpoint: 500,
	                        settings: {
	                            slidesToShow: 1,
	                            slidesToScroll: 1,
	                            adaptiveHeight: true
	                        }
	                    }]
	                });
	            }, function () {
	                //reject (실패시)
	                jQuery('#sectionFacebook').remove();
	            });
	        }
	    }]);
	
	    return MainFacebook;
	}();
	
	;
	
	module.exports = { MainFacebook: MainFacebook };

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Main
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Template = __webpack_require__(8);
	
	var _Template2 = _interopRequireDefault(_Template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainCommunity = function () {
	    function MainCommunity() {
	        _classCallCheck(this, MainCommunity);
	
	        this.init();
	    }
	
	    _createClass(MainCommunity, [{
	        key: 'init',
	        value: function init() {
	            this.get();
	        }
	    }, {
	        key: 'get',
	        value: function get() {
	            var _commData = rkMain.community.list;
	            var _tmp = '';
	            var stackFlag = 0;
	            for (var i = 0; _commData[i]; i++) {
	                _tmp += _Template2.default.community(_commData[i]);
	
	                if (_commData[i].link == '') {
	                    stackFlag++;
	                }
	            }
	
	            if (stackFlag == 4) {
	                $('#sectionCommunity').remove();
	            } else {
	                $('.wrap-community').append('<div class="comm-list">' + _tmp + '</div>');
	
	                $('.comm-list').slick({
	                    infinite: false,
	                    slidesToShow: 4,
	                    slidesToScroll: 4,
	                    dots: true,
	                    responsive: [{
	                        breakpoint: 960,
	                        settings: {
	                            slidesToShow: 3,
	                            slidesToScroll: 3
	                        }
	                    }, {
	                        breakpoint: 700,
	                        settings: {
	                            slidesToShow: 2,
	                            slidesToScroll: 2
	                        }
	                    }, {
	                        breakpoint: 400,
	                        settings: {
	                            slidesToShow: 1,
	                            slidesToScroll: 1
	                        }
	                    }]
	                });
	            }
	        }
	    }]);
	
	    return MainCommunity;
	}();
	
	;
	
	module.exports = { MainCommunity: MainCommunity };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Main
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Util = __webpack_require__(2);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Template = __webpack_require__(8);
	
	var _Template2 = _interopRequireDefault(_Template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainMovie = function () {
	    function MainMovie() {
	        _classCallCheck(this, MainMovie);
	
	        this.init();
	    }
	
	    _createClass(MainMovie, [{
	        key: 'init',
	        value: function init() {
	            this.get();
	        }
	    }, {
	        key: 'get',
	        value: function get() {
	            var _movieData = rkMain.movie.list;
	            var _tmp = '';
	
	            for (var i = 0; _movieData[i]; i++) {
	                _tmp += _Template2.default.movie(_movieData[i]);
	            }
	
	            $('#sectionMovie').append('<div class="movie-list">' + _tmp + '</div>');
	        }
	    }]);
	
	    return MainMovie;
	}();
	
	;
	
	module.exports = { MainMovie: MainMovie };

/***/ }
/******/ ]);
//# sourceMappingURL=Main.js.map