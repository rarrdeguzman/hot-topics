function burgerToggler() {
   var listIcon = document.getElementById("listIcon");
   var closeIcon = document.getElementById("closeIcon");
   var sideNav = document.getElementById("sideNav");

   listIcon.classList.toggle("toggleHide");
   sideNav.classList.toggle("goLeft");
   closeIcon.classList.toggle("toggleShow");

   window.scrollTo(0, 0);
}

function closeOnMobile(x) {
  if (x.matches) { // If media query matches
   var closeIcon = document.getElementById("closeIcon");
   closeIcon.click();
  } else {
   // none
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 600px)")

// Call listener function at run time
closeOnMobile(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  closeOnMobile(x);
});