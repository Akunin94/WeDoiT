import $ from "jquery";
import "slick-carousel";

// JQUERY BIG FIX +++++
jQuery.event.special.touchstart = {
	setup: function (_, ns, handle) {
		this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
	},
};
jQuery.event.special.touchmove = {
	setup: function (_, ns, handle) {
		this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
	},
};
jQuery.event.special.wheel = {
	setup: function (_, ns, handle) {
		this.addEventListener("wheel", handle, { passive: true });
	},
};
jQuery.event.special.mousewheel = {
	setup: function (_, ns, handle) {
		this.addEventListener("mousewheel", handle, { passive: true });
	},
};
// JQUERY BIG FIX -----

$(function () {
	// REVIEWS SLIDER +++++
	$(".wedoit-double__reviews-slider").each(function () {
		if ($(this).find(".wedoit-double__reviews-slider-item").length > 1) {
			$(this).slick({
				dots: false,
				autoplay: true,
				autoplaySpeed: 10000,
				arrows: true,
				infinite: true,
				pauseOnHover: false,
				rows: 0,
			});
		}
	});
	// REVIEWS SLIDER -----

	// BURGER +++++
	$(document).on("click", ".wedoit-header__top-burger", function () {
		$("body").addClass("wedoit-overflowhidden");
		$(".wedoit-header__popup").addClass("active");
	});
	$(document).on("click", ".wedoit-header__popup-close", function () {
		$("body").removeClass("wedoit-overflowhidden");
		$(".wedoit-header__popup").removeClass("active");
	});
	// BURGER -----

	// ANCHOR MENU +++++
	$(".wedoit-header__top-menu a, .wedoit-header__scroll-btn, .wedoit-header__popup-menu a, .wedoit-footer__menu a").on(
		"click",
		function (event) {
			let position = $(this.hash).offset().top;

			if ($("body").width() >= 1340) {
				position = position - 110;
			} else {
				position = position - 70;
			}

			$("html, body").animate({ scrollTop: position }, 800);

			$(".wedoit-header__popup").removeClass("active");
			$("body").removeClass("wedoit-overflowhidden");

			event.preventDefault();
		}
	);
	// ANCHOR MENU -----

	// POPUP FORM +++++
	$(".wedoit__popup").on("click", function (event) {
		showForm();

		event.preventDefault();
	});
	$(".wedoit-popup-form__close").on("click", function (event) {
		hideForm();
		event.preventDefault();
	});
	$(document).keydown(function (event) {
		if (event.which == 27) {
			hideForm();
		}
	});
	$(document).click(function (event) {
		if ($(event.target).closest(".wedoit-popup-form__wrap").length || $(event.target).closest(".wedoit__popup").length) return;
		hideForm();
		event.stopPropagation();
	});

	function hideForm() {
		$("body").removeClass("wedoit-overflowhidden");
		$(".wedoit-popup-form").removeClass("active");
	}
	function showForm() {
		$("body").addClass("wedoit-overflowhidden");
		$(".wedoit-popup-form").addClass("active");
	}
	// POPUP FORM -----

	// PHONE MASK +++++
	$(".maskme").mask("+7 (999) 999-99-99");
	// PHONE MASK -----

	// OUR WORKS SLIDER +++++
	$(".wedoit-slider__phone").each(function () {
		if ($(this).find(".wedoit-slider__phone-item").length > 1) {
			$(this).slick({
				dots: false,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 7000,
				infinite: true,
				pauseOnHover: false,
				rows: 0,
				fade: true,
			});
		}
	});
	$(".wedoit-slider__pc").each(function () {
		if ($(this).find(".wedoit-slider__pc-item").length > 1) {
			$(this).slick({
				dots: false,
				arrows: true,
				autoplay: true,
				autoplaySpeed: 7000,
				infinite: true,
				pauseOnHover: false,
				rows: 0,
				fade: true,
			});
		}
	});
	// OUR WORKS SLIDER -----
});
