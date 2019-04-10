// nav scroll
var navLinks = document.getElementsByClassName("nav-link");
var navItems = document.getElementsByClassName("nav-item");
var navigationLinks = document.querySelectorAll('nav li');

for ( var i = 0; i < navLinks.length; i++ ){
	navLinks[i].addEventListener( "click", function(){
		for ( var j = 0; j < navigationLinks.length; j++ ){
			navigationLinks[j].classList.remove("active")
		};

		var linkParent = this.parentNode;
		linkParent.classList.add("active");
		var element = document.getElementById(this.classList[1]);
		window.scroll({
			top: element.offsetTop - 50, 
			behavior: 'smooth' 
		})
	})
};
window.addEventListener("scroll", function(){
	var home = document.getElementById("home");
	var service = document.getElementById("service");
	var about = document.getElementById("about");
	var price = document.getElementById("price");
	var gallery = document.getElementById("gallery");
	var contact = document.getElementById("contact");
		if( window.scrollY >= home.offsetTop && window.scrollY < service.offsetTo ){
			navigationLinks[0].classList.add("active");
		}else{
			navigationLinks[0].classList.remove("active");
		};
		if( window.scrollY > service.offsetTop && window.scrollY < about.offsetTo ){
			navigationLinks[1].classList.add("active");
		}else{
			navigationLinks[1].classList.remove("active");
		};
		if( window.scrollY > about.offsetTop && window.scrollY < price.offsetTo ){
			navigationLinks[2].classList.add("active");
		}else{
			navigationLinks[2].classList.remove("active");
		};
		if( window.scrollY > price.offsetTop && window.scrollY < gallery.offsetTo ){
			navigationLinks[3].classList.add("active");
		}else{
			navigationLinks[3].classList.remove("active");
		};
		if( window.scrollY > gallery.offsetTop && window.scrollY < contact.offsetTo ){
			navigationLinks[4].classList.add("active");
		}else{
			navigationLinks[4].classList.remove("active");
		};
		if( window.scrollY > contact.offsetTop ){
			navigationLinks[5].classList.add("active");
		}else{
			navigationLinks[5].classList.remove("active");
		};
	})

// optional
$('#blogCarousel').carousel({
    interval: 5000
});
// scroll top
var btnScrollTop = document.getElementById("btnScrollTop");
btnScrollTop.addEventListener("click",scrollTop)
window.addEventListener("scroll", runOnScroll);

function runOnScroll(){
	if ( window.scrollY  > 1000){
		btnScrollTop.style.opacity = "0.5";
		btnScrollTop.style.zIndex = "1";
		btnScrollTop.style.display = "block";
	}else{
		btnScrollTop.style.opacity = "0";
		btnScrollTop.style.zIndex = "-1";
		btnScrollTop.style.display = "none";
	}
}
function scrollTop(){
    var topTarget = document.getElementById("topTarget");
	topTarget.scrollIntoView({behavior: "smooth", block: "center", inline: "end"});
}