const openMenu = document.querySelector(".menu-mobile")
const closeMenu = document.querySelector(".mobile")
const menuMobile = document.querySelector('.mobile')

function open(param) {
    param.addEventListener('click', () => {
        setTimeout(() => {
            menuMobile.style.display = 'block'
        }, 200)
        openAnimation(menuMobile)
    })
}

function openAnimation(param) {
    param.animate([
        { transform: 'translateX(300px)' },
        { transform: 'translateX(0)' }
    ], { duration: 300 }, { iterations: 1 })
}

function close(param) {
    param.addEventListener('click', () => {
        // closeAnimation(menuMobile)
        setTimeout(() => {
            menuMobile.style.display = 'none'
        }, 200) 
    })
}

function closeAnimation(param) {
    param.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(300px)' }
    ], { duration: 200 }, { iterations: 1 })
}

open(openMenu)
close(closeMenu)


function smoothScroll(target, duration) {
    var target = document.querySelector(target)
    var targetPosition = target.getBoundingClientRect().top
    var startPosition = window.pageYOffset
    var distance = targetPosition - startPosition
    var startTime = null

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime
        var timeElapsed = currentTime - startTime
        var run = ease(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation)
}

var livia = document.querySelector('.sobreLivia')
var comoFunciona = document.querySelector('.comoFunciona')
var aprender = document.querySelector('.aprender')


livia.addEventListener('click', function() {
    smoothScroll('.sobre-a-livia', 1000)
})

comoFunciona.addEventListener('click', function() {
    smoothScroll('.como-funciona', 1000)
})

aprender.addEventListener('click', function() {
    smoothScroll('.oque-voce-vai-aprender', 1000)
})