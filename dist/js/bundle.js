/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(5);

	var _page = __webpack_require__(6);

	var submit = document.querySelector('[data-js=submit');

	submit.addEventListener('click', function (event) {
	  event.preventDefault();
	  (0, _page.actionSubmit)();
	});

	window.fitText(document.querySelector('h1'), 1.4, { minFontSize: '40px', maxFontSize: '80px' });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "article, aside, details,\nfigcaption, figure,\nfooter, header, hgroup,\nmain, nav, section,\nsummary {\n  display: block; }\n\naudio, canvas, video {\n  display: inline-block; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden], template {\n  display: none; }\n\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\na {\n  background: transparent; }\n\na:focus {\n  outline: thin dotted; }\n\na:active, a:hover {\n  outline: 0; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb, strong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\ncode, kbd, pre,\nsamp {\n  font-family: monospace, serif;\n  font-size: 1em;\n  line-height: 1.2; }\n\npre {\n  white-space: pre-wrap; }\n\nq {\n  quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\"; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 0; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\nbutton, input, select,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0; }\n\nbutton, input {\n  line-height: normal; }\n\nbutton, select {\n  text-transform: none; }\n\nbutton, html input[type=\"button\"],\ninput[type=\"reset\"], input[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled], html input[disabled] {\n  cursor: default; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n  max-height: 100%; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\nhtml, body {\n  font-family: \"proxima-nova\", sans-serif;\n  color: #fff; }\n\nbody {\n  height: 100%;\n  max-height: 100%;\n  font-size: 100%;\n  background: #242021; }\n\n.hidden {\n  display: none !important; }\n\n.container {\n  max-width: 980px;\n  margin: 0 auto;\n  font-size: 1em;\n  line-height: 1.5em; }\n\n.results, .home {\n  display: none; }\n  .results.active, .home.active {\n    display: block; }\n\nh1, h2, h3, .h1, .h2, .h3 {\n  font-family: \"factoria\", sans-serif; }\n\nh1, .h1 {\n  font-size: 2em;\n  line-height: 1.25;\n  text-transform: uppercase;\n  text-align: center;\n  color: #1168A5; }\n\na {\n  color: #329eea;\n  -webkit-transition: color ease 0.2s;\n  -moz-transition: color ease 0.2s;\n  -ms-transition: color ease 0.2s;\n  -o-transition: color ease 0.2s;\n  transition: color ease 0.2s; }\n  a:hover {\n    color: #60b4ef; }\n\n.content {\n  border: 1px solid #0c4b77;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n  background: #395674; }\n  .content aside {\n    padding: 1em;\n    background: #4a6f96; }\n    .content aside .input-group {\n      margin-bottom: 2em; }\n  .content main {\n    padding: 2em; }\n    .content main h2 {\n      margin-top: 0; }\n    .content main .display {\n      padding: 1em;\n      background: #242021;\n      color: #F5CEAD;\n      font-family: \"factoria\", sans-serif; }\n    .content main #homeLink {\n      cursor: pointer;\n      float: right;\n      display: block;\n      text-align: right; }\n\n.button-submit {\n  background: #E94131;\n  width: 100%;\n  color: #fff;\n  border: 1px solid #1168A5;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px; }\n\ninput {\n  color: #333; }\n\ninput[type=text], input[type=number] {\n  width: 100%; }\n\n.error {\n  border: 1px solid #E94131;\n  background: #f8c1bb;\n  padding: 0 10px;\n  font-size: .8em;\n  color: #242021;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	/*!
	 * FitText.js 1.0 jQuery free version
	 *
	 * Copyright 2011, Dave Rupert http://daverupert.com
	 * Released under the WTFPL license
	 * http://sam.zoy.org/wtfpl/
	 * Modified by Slawomir Kolodziej http://slawekk.info
	 *
	 * Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
	 */
	(function () {
	  var css = function css(el, prop) {
	    return window.getComputedStyle ? getComputedStyle(el).getPropertyValue(prop) : el.currentStyle[prop];
	  };

	  var addEvent = function addEvent(el, type, fn) {
	    if (el.addEventListener) el.addEventListener(type, fn, false);else el.attachEvent('on' + type, fn);
	  };

	  var extend = function extend(obj, ext) {
	    for (var key in ext) {
	      if (ext.hasOwnProperty(key)) obj[key] = ext[key];
	    }return obj;
	  };

	  window.fitText = function (el, kompressor, options) {

	    var settings = extend({
	      'minFontSize': -1 / 0,
	      'maxFontSize': 1 / 0
	    }, options);

	    var fit = function fit(el) {
	      var compressor = kompressor || 1;

	      var resizer = function resizer() {
	        el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
	      };

	      // Call once to set.
	      resizer();

	      // Bind events
	      // If you have any js library which support Events, replace this part
	      // and remove addEvent function (or use original jQuery version)
	      addEvent(window, 'resize', resizer);
	    };

	    if (el.length) for (var i = 0; i < el.length; i++) {
	      fit(el[i]);
	    } else fit(el);

	    // return set of elements
	    return el;
	  };
	})();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actionSubmit = undefined;

	var _converter = __webpack_require__(7);

	var hp = _interopRequireWildcard(_converter);

	var _utilities = __webpack_require__(8);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var _vehicle = document.querySelector('[data-js=vehicle]');
	var _horsepower = document.querySelector('[data-js=horsepower]');
	var _types = document.querySelectorAll('[data-js=type]');

	var _getSelectedType = function _getSelectedType(types) {
	  var selected = [].filter.call(types, function (type) {
	    return type.checked;
	  });

	  return selected[0] ? selected[0].value : '';
	};

	/**
	 *
	 * @param view
	 * @private
	 */
	var _changeView = function _changeView(view) {
	  var views = document.querySelectorAll('.view');
	  var activeSelector = document.querySelector('[data-js=' + view + ']');

	  for (var i = 0, length = views.length; i < length; i++) {
	    if (views[i].classList.contains('active')) {
	      views[i].classList.remove('active');
	    }
	  }

	  activeSelector.classList.add('active');
	};

	/**
	 *
	 * @param vehicle
	 * @param hp
	 * @param conversion
	 * @private
	 */
	var _showResults = function _showResults(vehicle, hp, conversion) {
	  var results = document.querySelector('[data-js=results]');
	  var template = '<a id="homeLink" data-js="home-link">Back Home</a>\n                  <h2>' + conversion.name + ' Power</h2>\n                  <p>Your</p>\n                  <div class="display">' + vehicle + '</div>\n                  <p>has</p>\n                  <div class="display">' + (0, _utilities.formatNumber)(hp) + ' ' + conversion.name + ' power</div>';

	  var homeLink = undefined;

	  results.innerHTML = template;
	  _changeView('results');
	  _buildHomeLink();
	};

	var _buildHomeLink = function _buildHomeLink() {
	  var homeLink = document.querySelector('[data-js=home-link]');

	  homeLink.addEventListener('click', function () {
	    _changeView('home');
	  });
	};

	var _validateValues = function _validateValues(entry) {
	  switch (entry.type) {
	    case 'vehicle':
	      return entry.value.length > 0;
	    case 'horsepower':
	      return entry.value > 0;
	    case 'type':
	      return entry.value.length > 0;
	  }
	};

	var _toggleError = function _toggleError(type) {
	  var display = arguments.length <= 1 || arguments[1] === undefined ? 'hide' : arguments[1];

	  var error = document.querySelector('[data-js=error-' + type + ']');

	  switch (display) {
	    case 'show':
	      error.classList.remove('hidden');
	      break;
	    case 'hide':
	      error.classList.add('hidden');
	      break;
	  }
	};

	/**
	 *
	 */
	var actionSubmit = exports.actionSubmit = function actionSubmit() {
	  var vehicle = _vehicle.value;
	  var horsepower = _horsepower.value;
	  var type = _getSelectedType(_types);

	  var errors = false,
	      convertedPower = undefined,
	      conversion = undefined;

	  if (_validateValues({ type: 'vehicle', value: vehicle })) {
	    _toggleError('vehicle', 'hide');
	  } else {
	    errors = true;
	    _toggleError('vehicle', 'show');
	  }

	  if (_validateValues({ type: 'horsepower', value: horsepower })) {
	    _toggleError('horsepower', 'hide');
	  } else {
	    errors = true;
	    _toggleError('horsepower', 'show');
	  }

	  if (_validateValues({ type: 'type', value: type })) {
	    _toggleError('type', 'hide');
	  } else {
	    errors = true;
	    _toggleError('type', 'show');
	  }

	  if (errors) {
	    return false;
	  }

	  ga('send', 'event', 'Conversion', type, '{$vehicle} | {$horsepower}');

	  convertedPower = hp.convert(horsepower, type);
	  conversion = hp.getConversion(type);

	  _showResults(vehicle, convertedPower, conversion);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Trap Speed Formula: horsepower = weight * (velocity/234)^3 (http://www.ajdesigner.com/phphorsepower/horsepower_equation_trap_speed_method_horsepower.php)

	// Space Shuttle Main Engines: 37,000,000 horsepower (http://www.nasa.gov/returntoflight/system/system_SSME.html)
	// Tyrannosaurus Rex: weight - 17990lbs, top speed - 18mph, horsepower (trap speed formula): 8.1884387801548 (http://www.livescience.com/23868-tyrannosaurus-rex-facts.html)
	// Tortoise: weight - 661.4lb, top speed - 0.2mph, horsepower (trap speed formula): 4.1295868602465E-7 (http://www.speedofanimals.com/animals/galapagos_tortoise)

	var _conversions = {
	  trex: {
	    name: 'Tyrannosaurus Rex',
	    horsepower: 8.1884387801548,
	    source: 'http://www.livescience.com/23868-tyrannosaurus-rex-facts.html'
	  },
	  tortoise: {
	    name: 'Tortoise',
	    horsepower: 4.1295868602465E-7,
	    source: 'http://www.speedofanimals.com/animals/galapagos_tortoise'
	  },
	  spaceShuttle: {
	    name: 'Space Shuttle',
	    horsepower: 37000000,
	    source: 'http://www.nasa.gov/returntoflight/system/system_SSME.html'
	  }
	};

	/**
	 *
	 * @param type
	 * @returns {*}
	 */
	var getConversion = exports.getConversion = function getConversion(type) {
	  return _conversions[type];
	};

	/**
	 *
	 * @param weight
	 * @param velocity
	 */
	var trapSpeed = exports.trapSpeed = function trapSpeed(weight, velocity) {
	  return weight * (velocity / 234) ^ 3;
	};

	/**
	 *
	 * @param hp
	 * @param type
	 * @returns {number}
	 */
	var convert = exports.convert = function convert(hp, type) {
	  return parseInt(hp) / _conversions[type].horsepower;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 *
	 * @param num
	 * @returns {*}
	 */
	var formatNumber = exports.formatNumber = function formatNumber(num) {
	  if (num > 1) {
	    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	  } else {
	    return num;
	  }
	};

/***/ }
/******/ ]);