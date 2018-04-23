//toggles between showing and hidding dropdown menu
function dropdownFunc() {
	document.querySelector(".dropdown-content").classList.toggle("show");
	// document.querySelector("#hamburgerBtn").classList.toggle("hamburgerBackground");
}

//hides dropdown menu when user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    // var hamb = document.querySelector("#hamburgerBtn");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        // hamb.classList.remove("hamburgerBackground");
      }
    }
  }
}