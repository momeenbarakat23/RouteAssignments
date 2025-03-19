
const NavBar=document.getElementById("navBar");
const img=document.getElementById("image");

function myFunction() {
  if (window.scrollY > 0) {
    
    NavBar.classList.add("scrolled")
    img.src="images/bakery-color.png"
}
else{
     NavBar.classList.remove("scrolled")
    img.src="images/bakery-light-1.png"
}}