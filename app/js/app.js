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

document.addEventListener("DOMContentLoaded", () => {
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
		$("html, body").addClass("wedoit-overflowhidden");
		$(".wedoit-header__popup").addClass("active");
	});
	$(document).on("click", ".wedoit-header__popup-close", function () {
		$("html, body").removeClass("wedoit-overflowhidden");
		$(".wedoit-header__popup").removeClass("active");
	});
	// BURGER -----

	// ANCHOR MENU +++++
	$(".wedoit-header__top-menu a, .wedoit-header__scroll-btn, .wedoit-header__popup-menu a, .wedoit-footer__menu a").on('click', function (event) {
		let position = $(this.hash).offset().top;
		if ($('body').width() >= 1340) {
			position = position - 110;
		}

		$('html, body').animate({scrollTop: position}, 800);
		$('.wedoit-header__popup').removeClass('active');
		$("html, body").removeClass("wedoit-overflowhidden");

		event.preventDefault ();
	});
	// ANCHOR MENU -----
});
