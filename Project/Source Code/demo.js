// Move to top arrow

window.onscroll = function () { myFunction() , myFunc()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('.scrollhide').style.visibility = "visible";
  } else {
    document.querySelector('.scrollhide').style.visibility = "hidden";
  }
}

// Dark mode button

document.querySelector('.flip-box').addEventListener("click", darkModeFunction);
function darkModeFunction(){
document.body.classList.toggle("dark-mode");
}

// Sticky Navbar

function myFunc() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.querySelector('.navbar').style.position = "sticky";
    document.querySelector('.navbar').style.top = "0";
    document.querySelector('.navbar').style.height = "5vh";
    document.querySelector('.navbar').style.zIndex = "2";
    document.querySelector('.navbar').style.boxShadow = "1px 5px 10px gray";
  } else {
    document.querySelector('.navbar').style.position = "relative";
    document.querySelector('.navbar').style.height = "auto";
    document.querySelector('.navbar').style.boxShadow = "none"
    document.querySelector('.navbar').style.border = "none";
  }
}

// Burger Menu Activation

// const menu = document.querySelector('.nav-right')
// document.querySelector('#bm').addEventListener("click", burgerMenu);
// function burgerMenu(){
//   if(menu.style.display=="none"){
// document.querySelector('.nav-right').style.display = "block";
// document.querySelector('#glow').style.flexDirection = "column";
// document.querySelector('.navbar').style.flexDirection = "column";
// document.querySelector('.navbar').style.justifyContent = "flex-start";
// document.querySelector('.navbar').style.alignItems = "flex-start";
// document.querySelector('#glow').style.textAlign = "center";
//   }else{
//     menu.style.display = "none";
//   }
// };

document.querySelector('#bm').addEventListener("click", burgerMenu);

function burgerMenu () {
  document.querySelector('.nav-right').classList.toggle("burgerM");
}