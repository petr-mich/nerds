'use strict';

var contactsButton = document.querySelector('.contacts-column-button');
var overlay = document.querySelector('.modal-overlay');
var popup = document.querySelector('.modal-feedback');
var closeButton = popup.querySelector('.modal-close');
var userName = popup.querySelector('[name=username]');
var form = popup.querySelector('form');
var userEmail = popup.querySelector('[name=email]');
var firstFormElem = form.elements[0];

contactsButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.add('modal-show');
	overlay.classList.add('modal-show-overlay');
	userName.focus();
});

closeButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.remove('modal-show');
	overlay.classList.remove('modal-show-overlay');
	popup.classList.remove('modal-error');
});

closeButton.tabIndex = 0;

form.addEventListener('submit', function(evt) {
	evt.preventDefault();
	if (!userName.value || !userEmail.value) {
		evt.preventDefault();
		// Для повторения эффекта 'shake':
		popup.classList.remove('modal-error');
		var a = popup.offsetWidth;
		
		popup.classList.add('modal-error');
		console.log('Не введено имя пользователя или e-mail');
	}
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains('modal-show')) {
			popup.classList.remove('modal-show');
			popup.classList.remove('modal-error');
		}
		if (overlay.classList.contains('modal-show-overlay')) {
			overlay.classList.remove('modal-show-overlay');
		}
	}
});

firstFormElem.onkeydown = function(evt) {
	if (evt.code === 'Tab' && evt.shiftKey) {
		evt.preventDefault();
		this.focus();
	}
};

closeButton.onkeydown = function(evt) {
	if (evt.code === 'Tab' && !evt.shiftKey) {
		evt.preventDefault();
		this.focus();
	}
};