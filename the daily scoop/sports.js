/*football news image slider*/
let slider = tns({
    container: ".my_slider",
    "slideBy": 1,
    "speed": 400,
    "nav": false,
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextButton: ".next",
    responsive: {
        1600:{
            items: 4,
            gutter: 20
        },
        
        1024:{
            items: 3,
            gutter: 20
        },
        
        768:{
            items: 2,
            gutter: 20
        },
        
        480:{
            items: 1
        }
    }
})

/*basketball news image slider*/
let slider1 = tns({
    container: ".my_slider1",
    "slideBy": 1,
    "speed": 400,
    "nav": false,
    controlsContainer: "#controls1",
    prevButton: ".previous1",
    nextButton: ".next1",
    responsive: {
        1600:{
            items: 4,
            gutter: 20
        },
        
        1024:{
            items: 3,
            gutter: 20
        },
        
        768:{
            items: 2,
            gutter: 20
        },
        
        480:{
            items: 1
        }
    }
})

/*back to top button*/
const getUserSelectedText = () => {
    return window.getSelection().toString();
}

window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        
    }
}

const toTop = () => window.scrollTo({top: 0, behaviour: 'smooth'});

$(window).on('load', function() {
  $('.backtotop').delay(1000).fadeIn()
})
