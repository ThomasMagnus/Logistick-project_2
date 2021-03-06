// const { get } = require("browser-sync");

function testWebP(callback) {

	var webP = new Image();
	
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
	
testWebP(function (support) {
	
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});

window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	// Слайдер
	
	const feedbackUser = document.querySelectorAll('.feedback__user'),
		  btnNext = document.querySelector('.next'),
		  btnPrev = document.querySelector('.prev'),
		  slide = document.querySelector('.feedback__user'),
		  feedbackDescr = document.querySelector('.feedback__descr');
	
	let counter = 1;
	
	const width = parseFloat(window.getComputedStyle(slide).width);
	let offset = 0;
	
	const showSlider = (n) => {
		feedbackUser.forEach(item => {
			item.style.cssText = `
				transform: translateX(${offset}px) scale(0.6);
				opacity: 0.5;
				transition: all 0.3s linear;
			`
		})
		feedbackUser[n].style.cssText = `
			transform: translateX(${offset}px) scale(1);
			opacity: 1;
			transition: all 0.3s linear;
		`
	}
	
	showSlider(1);
	
	btnNext.addEventListener('click', () => {
		offset -= width;
		counter++;
		if (counter == (feedbackUser.length)) {
			offset = width;
			counter = 0;
		}
		showSlider(counter);
	})
	
	btnPrev.addEventListener('click', () => {
		offset += width;
		counter--;
		if (counter < 0) {
			offset = -width * (feedbackUser.length - 2);
			counter = feedbackUser.length - 1
		}
		showSlider(counter);
	})


	// Меню 

	const headerBurger = document.querySelector('.header__burger'),
		  burgerLine = document.querySelectorAll('.burger-line'),
		  headerList = document.querySelector('.header__list'),
		  headerLink = document.querySelectorAll('.header__link');

	headerBurger.addEventListener('click', () => {
		document.querySelector('body').classList.toggle('overflow');
		burgerLine.forEach(item => {
			item.classList.toggle('active-burger');
			headerList.classList.toggle('active-menu');
		})
	})

	headerLink.forEach(item => {

		item.addEventListener('click', () => {
			document.querySelector('body').classList.remove('overflow');
			headerList.classList.remove('active-menu');

			burgerLine.forEach(item => {
				item.classList.remove('active-burger');
			})
		})
	})

})

