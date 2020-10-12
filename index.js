function Utils() {}
Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return pageTop < elementTop && pageBottom > elementBottom;
        } else {
            return elementTop <= pageBottom && elementBottom >= pageTop;
        }
    },
};

var Utils = new Utils();
$(window).on("load", addFadeIn());

$(window).scroll(function () {
    addFadeIn(true);
});

function addFadeIn(repeat) {
    var classToFadeIn = ".will-fadeIn";

    $(classToFadeIn).each(function (index) {
        var isElementInView = Utils.isElementInView($(this), false);
        if (isElementInView) {
            if (
                !$(this).hasClass("fadeInRight") &&
                !$(this).hasClass("fadeInLeft")
            ) {
                if (index % 2 == 0) $(this).addClass("fadeInRight");
                else $(this).addClass("fadeInLeft");
            }
        } else if (repeat) {
            $(this).removeClass("fadeInRight");
            $(this).removeClass("fadeInLeft");
        }
    });
}

window.addEventListener("scroll", function () {
    const scrollElement = document.getElementsByClassName("mouse-position")[0];
    if (window.pageYOffset > "5") {
        // scrollElement.style.transitionDuration = "500ms";
        // scrollElement.style.transitionTimingFunction = "ease";
        scrollElement.style.opacity = "0";
    } else {
        scrollElement.style.opacity = "1";
    }
});
