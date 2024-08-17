const imgs = document.querySelectorAll('.header-slider ul img')
//select all images from the html in the class 

const prev_btn = document.querySelectorAll('.control-previous')
// const prev_btn = document.querySelector('.control-prev')

// const next_btn = document.querySelectorAll('.control-next')
const next_btn = document.querySelector('.control-next')

let n = 0;

function changeSlide(){
  for(let i = 0; i < imgs.length; i++){
    imgs[i].style.display = 'none' //change the css of the image

  }
  imgs[n].style.display = 'block' //make image n visible
}


changeSlide();

prev_btn[0].addEventListener('click', (e)=>{
  if (n>0){
    n--;
  }else{
    n = imgs.length - 1;
  }
  changeSlide();
})

next_btn.addEventListener('click', (e)=>{
  if (n >= imgs.length-1 ){
    n = 0;
  }else{
    n++;
  }
  changeSlide();
})


const scrollContainer = document.querySelectorAll('.products')

// SCROLLING

// for (const item of scrollContainer){
//   item.addEventListener('wheel', (evt)=>{
//     evt.preventDefault();
//     item.scrollLeft += evt.deltaY;
//   });
// }


function rateLimit(func, time){
  var callback = func,
          waiting = false,
          context = this;
  var rtn = function(){
      if(waiting) return;
      waiting = true;
      var args = arguments;
      setTimeout(function(){
          waiting = false;
          callback.apply(context, args);
      }, time);
  };
  return rtn;
}

function onWheel(e){
// Add your code here
  for (const item of scrollContainer){
    item.addEventListener('wheel', (evt)=>{
      evt.preventDefault();
      item.scrollLeft += evt.deltaY;
    });
  }
}

// will only fire a maximum of 10 times a second
var debouncedOnWheel = rateLimit(onWheel, 20);
window.addEventListener("wheel", debouncedOnWheel);




