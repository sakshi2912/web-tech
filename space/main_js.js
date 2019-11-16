
window.addEventListener('wheel', function(event)
{
 if (event.deltaY < 0)
 {
  console.log('scrolling up');
  document.getElementsByClassName("rocket")[0].setAttribute('style' , 'transform:rotate(180deg)');

 }
 else if (event.deltaY > 0)
 {
  console.log('scrolling down');
  document.getElementsByClassName("rocket")[0].setAttribute('style' , 'transform:rotate(0deg)');

 }
});


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        document.getElementsByClassName("rocket")[0].setAttribute('style' , 'transform:rotate(180deg)');
        
    }
    else if (e.keyCode == '40') {
        document.getElementsByClassName("rocket")[0].setAttribute('style' , 'transform:rotate(0deg)');
        
    }

}

var lastScrollPosition = $(document).scrollTop();

$(window).on('scroll', function(e) {

})
