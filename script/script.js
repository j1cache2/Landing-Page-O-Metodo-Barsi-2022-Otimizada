var countDownDate = new Date("Nov 30, 2022 8:59:59").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if ((days + "").length === 1) {
        days = "0" + days;
    }
    if ((hours + "").length === 1) {
        hours = "0" + hours;
    }
    if ((minutes + "").length === 1) {
        minutes = "0" + minutes;
    }
    if ((seconds + "").length === 1) {
        seconds = "0" + seconds;
    }

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

var countDownDate = new Date("Nov 30, 2022 8:59:59").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if ((days + "").length === 1) {
        days = "0" + days;
    }
    if ((hours + "").length === 1) {
        hours = "0" + hours;
    }
    if ((minutes + "").length === 1) {
        minutes = "0" + minutes;
    }
    if ((seconds + "").length === 1) {
        seconds = "0" + seconds;
    }

    document.getElementById("daysm").innerHTML = days;
    document.getElementById("hoursm").innerHTML = hours;
    document.getElementById("minutesm").innerHTML = minutes;
    document.getElementById("secondsm").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);






// var smoothScroll = function (elementId) {
//     var MIN_PIXELS_PER_STEP = 16;
//     var MAX_SCROLL_STEPS = 30;
//     var target = document.getElementById("formulario");
//     var scrollContainer = target;
//     do {
//         scrollContainer = scrollContainer.parentNode;
//         if (!scrollContainer) return;
//         scrollContainer.scrollTop += 1;
//     } while (scrollContainer.scrollTop === 0);

//     var targetY = 0;
//     do {
//         if (target === scrollContainer) break;
//         targetY += target.offsetTop;
//     } while (target = target.offsetParent);

//     var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
//         Math.abs(targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

//     var isUp = targetY < scrollContainer.scrollTop;

//     var stepFunc = function () {
//         if (isUp) {
//             scrollContainer.scrollTop = Math.max(targetY, scrollContainer.scrollTop - pixelsPerStep);
//             if (scrollContainer.scrollTop <= targetY) {
//                 return;
//             }
//         } else {
//             scrollContainer.scrollTop = Math.min(targetY, scrollContainer.scrollTop + pixelsPerStep);

//             if (scrollContainer.scrollTop >= targetY) {
//                 return;
//             }
//         }

//         window.requestAnimationFrame(stepFunc);
//     };

//     window.requestAnimationFrame(stepFunc);
// };










// var element = document.getElementById("formulario");

// element.scrollIntoView({behavior: "smooth"});




// var smoothScroll = function (elementId) {
//     var MIN_PIXELS_PER_STEP = 16;
//     var MAX_SCROLL_STEPS = 30;
//     var target = document.getElementById("formulario");
//     var scrollContainer = target;
//     do {
//         scrollContainer = scrollContainer.parentNode;
//         if (!scrollContainer) return;
//         scrollContainer.scrollTop += 1;
//     } while (scrollContainer.scrollTop == 0);

//     var targetY = 0;
//     do {
//         if (target == scrollContainer) break;
//         targetY += target.offsetTop;
//     } while (target = target.offsetParent);

//     var pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
//         (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

//     var iterations = 0;
//     var stepFunc = function () {
//         if (iterations > MAX_SCROLL_STEPS) {
//             return;
//         }
//         scrollContainer.scrollTop =
//             Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

//         if (scrollContainer.scrollTop >= targetY) {
//             return;
//         }

//         window.requestAnimationFrame(stepFunc);
//     };

//     window.requestAnimationFrame(stepFunc);
// }
