var sliderContainerID = document.getElementById('sliderContainerID');
var banerHeadingAnimContainer = document.getElementsByClassName('banerHeadingAnimContainer');
var timeLine = document.getElementsByClassName('timeLine');
var leftHeading = document.getElementsByClassName('leftHeading');


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

var jsxProperty = ['Sell','Rent','Buy'];
var propertyModule = 0;
function leftHeadingInner() {
  leftHeading[0].innerHTML = `${jsxProperty[propertyModule%3]} <span>PROPERTIES</span>`;
  propertyModule++;
}

function banerHeadingAnimContainerFun() {
  timeLine[0].style.width = '100%';
  // blur text timeout
  setTimeout(function () {
    leftHeading[0].style.filter = 'blur(17px)';
  }, 5000);

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
        leftHeadingInner();
        setTimeout(function () {
          banerHeadingAnimContainer[0].style.right = '0%';
          banerHeadingAnimContainer[0].style.width = '100%';
          banerHeadingAnimContainer[0].style.transition = '0.8s';
          leftHeading[0].style.filter = 'blur(0px)';
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

// searchIconBox search bar
var searchIconBox = document.getElementsByClassName('searchIconBox');
var searchContentContainer = document.getElementsByClassName('searchContentContainer');
var advancedContainer = document.getElementsByClassName('advancedContainer');
var outerHolder = document.getElementsByClassName('outerHolder');
var blackOverlay = document.getElementsByClassName('blackOverlay');
var searchNav = document.getElementsByClassName('searchNav');


var searchBoxSwitch = 0;
var searchBoxFailSafe = 0;
searchIconBox[0].addEventListener('click',()=>{
  if (searchBoxFailSafe === 0) {
    searchBoxFailSafe = 1;
    if (searchBoxSwitch === 0) {
      searchBoxSwitch = 1;
      searchNav[0].style.height = '7.7vw';
      blackOverlay[0].style.opacity = '0.7';
      sliderContainerID.style.filter = 'blur(100px)';
      outerHolder[0].style.filter = 'blur(100px)';
      searchContentContainer[0].style.width = '99.5vw';
      searchContentContainer[0].style.right = '-16vw';
      setTimeout(function () {
        searchIconBox[0].style.top = '6vw';
        searchIconBox[0].style.left = '4vw';
        advancedContainer[0].style.height = '15vw';
        searchContentContainer[0].style.top = '-4.6vw';
      }, 1000);
    }else{
      searchBoxSwitch = 0;
      blackOverlay[0].style.opacity = '0';
      sliderContainerID.style.filter = 'blur(0px)'
      outerHolder[0].style.filter = 'blur(0px)'
      searchContentContainer[0].style.top = '0vw';
      advancedContainer[0].style.height = '0vw';
      searchIconBox[0].style.top = '0vw';
      searchIconBox[0].style.left = '0vw';
      setTimeout(function () {
        searchNav[0].style.height = ' 6.39225vw';
        searchContentContainer[0].style.width = '0vw';
        searchContentContainer[0].style.right = '50%';
      }, 500);

    }
    setTimeout(function () {
      searchBoxFailSafe = 0;
    }, 1500);
  }
});



window.addEventListener('load',()=>{
  sliderClassStartFun();
});
