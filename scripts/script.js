

$('nav .hamburger').click(function () {
    $('nav .menu').fadeToggle();
    this.classList.toggle("change");
});

$('nav ul a').click(function () {
    if ($(window).width() > 1350) return;
    $('nav .menu').fadeOut();
    $('nav .hamburger').removeClass("change");
});

var last = $(window).width();
if (last <= 1350) {
    $('nav .menu').css('display', 'flex');
    $('nav .menu').hide();
}
$(window).resize(function () {
    var w = $(window).width();
    if (last > 1350 && w <= 1350) {
        $('nav .menu').hide();
        $('nav .hamburger').removeClass("change");
    }
    if (last < 1350 && w > 1350) {
        $('nav .menu').show();
        $('nav .hamburger').removeClass("change");
    }
    last = $(window).width();
    scrollReaction();
});
/*-------------------*/

function landingPage() {
    $('.section').each(function (i, obj) {
        console.log($(obj).position().top - window.scrollY);
        if ($(obj).position().top - window.scrollY <= 500 && $(obj).position().top - window.scrollY > 0) {
            $(obj).removeClass('no-animate');
        }
    });
}

landingPage();
/*----4*/
var flag = false;
$('#section-4 .main-frame').hide();
fun4();
function fun4() {

    if (!$('#section-4 .section').hasClass('no-animate') && !flag) {
        $('#section-4 .main-frame').hide().delay(1200).slideDown('slow');
        flag = true;
    }
}

/*---------------------------------14*/


// let isPlay = false;
// let vid = document.getElementById("myVideo");
// vid.currentTime = 5;
// let clock;




// $('#play-button').click(function () {
//     $('.tbir').attr('max', parseInt(vid.duration * 1000));
//     $('.tbir').attr('steps', vid.duration * 1000);
//     $('.tbir').val('value', 0);

//     if (isPlay) {
//         vid.pause();
//         $('#play-button').html('<i class="fa fa-play"></i>');
//         $('.text,.time-bar').removeClass('c');
//         $('#play-button').addClass('jump');
//         clearInterval(clock);
//         isPlay = false;
//     }
//     else {
//         vid.play();
//         $('#play-button').html('<i class="fa fa-pause"></i>');
//         $('.text, .time-bar').addClass('c');
//         $('#play-button').removeClass('jump');
//         isPlay = true;
//         console.log('aa');
//         clock = setInterval(function () {
//             $('.tbir').val(parseInt(vid.currentTime * 1000));

//         }, 100);
//     }

// });

// $('.tbir').on('input', function () {
//     vid.pause();

//     vid.currentTime = ($(this).val() / 1000);
//     vid.play();
// });

/*-----------------17------*/

var flag2 = false;
$('#section-17 .main-frame').hide();
fun17();
function fun17() {

    if (!$('#section-17 .section').hasClass('no-animate') && !flag2) {
        $('#section-17 .main-frame').hide().delay(1200).slideDown('slow');
        flag2 = true;
    }
}

$(`#section-17 .subcontent`).hide();
$('#section-17 .category #c1').show();
$('#section-17 .categories #1').addClass('active');

$('#section-17 .name').click(function () {
    let id = $(this).attr('id');
    $('#section-17 .categories .name').removeClass('active');
    $(this).addClass('active');
    $(`#section-17 .subcontent`).fadeOut();
    $(`#section-17 .category #c${id}`).delay(350).fadeIn();

});

/*-------------18-----------*/

$('#section-18 .box').hover(function () {
    $(this).children('.subcontent').slideDown();
});

$('#section-18 .box').mouseleave(function () {
    $(this).children('.subcontent').slideUp();
});
//--------------------------------------

var sections = [0, 6, 8, 9, 12, 15, 4, 18, 27, 17, 2, 3, 19, 1, 100];
let currentSection = parseInt(localStorage.getItem('lastSection') || 0);
let wheel = 0;

scrollReaction();

$(window).on('scroll', function () {
    landingPage();
    fun4();
    fun17();

    $('nav li a').removeClass('cur-sect');
    $('nav li:nth-child(' + currentSection + ') a').addClass('cur-sect');
    console.log('s');
});

$(window).on('touchmove', function () {
    console.log('t');
});

$(window).on('mousewheel DOMMouseScroll touchmove', function (e) {
    if ($(window).width() <= 800) return;

    wheel++;
    if (wheel == 1) {
        setTimeout(function () {
            wheel = 0;
        }, 500);
    }
    if (wheel == 2 || wheel == 3) return;
    if (wheel > 3) wheel -= 3;



    if (typeof e.originalEvent.detail == 'number' && e.originalEvent.detail !== 0) {
        if (e.originalEvent.detail > 0) {
            currentSection++;
            if (currentSection >= sections.length) {
                currentSection = sections.length - 1;
            }
        }
        else if (e.originalEvent.detail < 0) {
            currentSection--;
            if (currentSection < 0) currentSection = 0;
        }
    }
    else if (typeof e.originalEvent.wheelDelta == 'number') {
        if (e.originalEvent.wheelDelta < 0) {
            currentSection++
            if (currentSection >= sections.length) {
                currentSection = sections.length - 1;
            }
        } else if (e.originalEvent.wheelDelta > 0) {
            currentSection--;
            if (currentSection < 0) currentSection = 0;
        }
    }
    scrollReaction();
    localStorage.setItem('lastSection', currentSection);
});



$('nav a').click(function () {
    let target = $(this).attr('href');
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });

    let tym = parseInt(target.replace('#section-', ''));
    for (i = 0; i < sections.length; i++) {
        if (sections[i] == tym) {
            currentSection = i;
            break;
        }
    }
    localStorage.setItem('lastSection', currentSection);
});

function scrollReaction(text = 0) {
    text = Number(sections[parseInt(currentSection)]);
    document.querySelector('#section-' + text).scrollIntoView({
        behavior: 'smooth'
    });
}


if ($.browser.mozilla) {
    $.getScript("scripts/sticky-for-firefox.js");
}

