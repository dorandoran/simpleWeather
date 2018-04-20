"use strict";

var searchButton = document.querySelector('button');
var searchCity = document.querySelector('#city');

var loadingText = document.querySelector('#load');
var weatherDiv = document.querySelector('#weather');

var weatherCity = weatherDiv.firstElementChild;
var weatherDescripton = document.querySelector('#weatherDescription');
var weatherTemperature = weatherDiv.lastElementChild;
