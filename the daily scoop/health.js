
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
