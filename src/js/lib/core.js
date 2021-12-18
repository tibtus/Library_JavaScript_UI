
const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
    if (!selector) {
        return this; // {} - возвращаем пустой обьект
    }
    Object.assign(this, document.querySelectorAll(selector)); // Передаём в первое значение this (Обьект), второе значение.
    this.length = document.querySelectorAll(selector).length;
    return this; // Хранится прототип this и елемент  Selector который мы передали. 
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;