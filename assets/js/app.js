var sliderContainerID = document.getElementById('sliderContainerID');
var banerHeadingAnimContainer = document.getElementsByClassName('banerHeadingAnimContainer');
var timeLine = document.getElementsByClassName('timeLine');


var jsxImage = `<img src="assets/images/banner-slider/${'ce vidimo'}.jpg" alt="">`;
var newImageElem;
var imgNum = 0;
function createNewElem() {
  var newDiv = document.createElement('div');
  newDiv.innerHTML = `<img src="assets/images/banner-slider/${imgNum%6}.jpg" alt="">`;
  sliderContainerID.removeChild(sliderContainerID.children[1]);
  sliderContainerID.insertAdjacentElement('afterbegin',newDiv);
  // setTimeout(function () {
  //   sliderContainerID.children[1].style.opacity = '0';
  // }, 4000);
  imgNum++;
  console.log(imgNum%6);
}


function banerHeadingAnimContainerFun() {
  timeLine[0].style.width = '100%';
  setTimeout(function () {
    timeLine[0].style.transition = '0s';
    banerHeadingAnimContainer[0].style.width = '0';
    setTimeout(function () {
      timeLine[0].style.width = '0%';
      banerHeadingAnimContainer[0].style.transition = '0s';
      banerHeadingAnimContainer[0].style.right = '100%';
      setTimeout(function () {
        timeLine[0].style.transition = 'all 6s ease';
        banerHeadingAnimContainer[0].style.transition = '0s';
        setTimeout(function () {
          banerHeadingAnimContainer[0].style.right = '0%';
          banerHeadingAnimContainer[0].style.width = '100%';
          banerHeadingAnimContainer[0].style.transition = '0.8s';
        }, 50);
      }, 50);
    }, 900);
  }, 6000);
}

function intervalStart(){
  setInterval(function () {
    banerHeadingAnimContainerFun();
  }, 8000);
}

function sliderClassStartFun() {
  banerHeadingAnimContainerFun();
  sliderContainerID.className += ' sliderContainer';
  setInterval(function () {
    createNewElem();
  }, 8000);
  intervalStart();
}

window.addEventListener('load',()=>{
  sliderClassStartFun()
});
