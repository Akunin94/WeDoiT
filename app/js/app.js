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
});
