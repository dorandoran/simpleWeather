"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: () => {
        return this._temperature;
    },
    set: (value) => {
        this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
    }
});