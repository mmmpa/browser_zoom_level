(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  var container = document.getElementById('container');
  var display = document.getElementById('display');

  var storedRawWidth = -1;

  var write = function write(scale) {
    var clean = Math.round(scale * 10) * 10;
    display.innerHTML = '現在' + clean + '%表示です。';
  };

  // SWFから横幅が投げられるメソッド
  var onResizeSWF = function onResizeSWF(rawWidth) {
    storedRawWidth = rawWidth;
    write(compute(rawWidth));
  };

  // ブラウザの拡大率変更時
  var onResize = function onResize(e) {
    write(compute(storedRawWidth));
  };

  // SWFの横幅と、DOMの横幅を比較して拡大率を算出する
  var compute = function compute(rawWidth) {
    var zoomedWidth = container.clientWidth;
    return rawWidth / zoomedWidth;
  };

  window.addEventListener('resize', onResize);
  window.onResizeSWF = onResizeSWF;
})();

},{}]},{},[1]);
