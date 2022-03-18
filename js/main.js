/* 2. sticky And Scroll UP */
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
    } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
    }
});
// Scroll Up
$('#back-top a').on("click", function() {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});
/*3.olw calosouri*/
$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    item: 4,
    nav: true,
    dots: true,
    loop: true,
});

//5.tab content

$(document).ready(function() {
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event) {
        var x = $(event.target).text(); // active tab
        var y = $(event.relatedTarget).text(); // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });
});



//6.click follow
function myFunction() {
    document.getElementById("follow").style.background = "red";

}

function myFunction1() {
    document.getElementById("follow1").style.background = "red";
    document.getElementById("follow1").style.color = " white";

}

function myFunction2() {
    document.getElementById("follow2").style.background = "red";
    document.getElementById("follow2").style.color = " white";

}

function myFunction3() {
    document.getElementById("follow3").style.background = "red";
    document.getElementById("follow3").style.color = " white";

}

//7.cart
$('input.input-qty').each(function() {
    var $this = $(this),
        qty = $this.parent().find('.is-form'),
        min = Number($this.attr('min')),
        max = Number($this.attr('max'))
    if (min == 0) {
        var d = 0
    } else d = min
    $(qty).on('click', function() {
        if ($(this).hasClass('minus')) {
            if (d > min) d += -1
        } else if ($(this).hasClass('plus')) {
            var x = Number($this.val()) + 1
            if (x <= max) d += 1
        }
        $this.attr('value', d).val(d)
    })
})