(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeOut;

var w = size.w;
var h = size.h;

function init2() {

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	tl.set(".frame1", { opacity: 1 });

	TweenLite.defaultEase = Power2.easeOut;

	TweenLite.to(".bg", 13, { scale: .5, ease: Linear.easeNone, onComplete: function onComplete() {
			// alert("sldkfj")
		} });

	var IN = .5;
	var OUT = .3;

	// tl.from(".t1", IN, {opacity:0})
	// tl.to(".t1", OUT, {opacity:0}, "+=2.3")

	tl.from(".t2", IN, { opacity: 0 }, "+=1.2");
	tl.to(".t2", OUT, { opacity: 0 }, "+=2");

	tl.from(".t3", IN, { opacity: 0 });
	tl.to(".t3", OUT, { opacity: 0 }, "+=2");

	tl.from(".t4", IN, { opacity: 0 });

	tl.add("done", "+=3.3");
	tl.to(".t4", OUT, { opacity: 0 }, "done");
	tl.to(".t1", IN, { opacity: 0 }, "done");
	tl.from(".t5", IN, { opacity: 0 });

	return tl;
}

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	tl.set(".frame1", { opacity: 1 });

	TweenLite.defaultEase = Power2.easeOut;

	TweenLite.to(".bg", 13, { x: -size.w / 2, y: -size.h / 2, scale: .5, ease: Linear.easeNone, onComplete: function onComplete() {
			// alert("sldkfj")
		} });

	var IN = .5;
	var OUT = .3;

	// tl.from(".t1", IN, {opacity:0})
	tl.to(".t1", OUT, { opacity: 0 }, "+=2.3");

	tl.from(".t2", IN, { opacity: 0 }, "+=.2");
	tl.to(".t2", OUT, { opacity: 0 }, "+=2");

	tl.from(".t3", IN, { opacity: 0 });
	tl.to(".t3", OUT, { opacity: 0 }, "+=3.7");

	tl.from(".t4", IN, { opacity: 0 });

	return tl;
}

exports.size = size;
exports.init = init;
exports.init2 = init2;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.init)();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
