// NAVBAR TOGGLE JS

const body = document.querySelector("body"),
nav = document.querySelector("nav"),
searchToggle = document.querySelector(".searchToggle"),
sidebarOpen = document.querySelector(".sidebarOpen");

let getMode = localStorage.getItem("mode");
	if(getMode && getMode === "dark-mode"){
	  body.classList.add("dark");
	}

// js code to toggle search box
  searchToggle.addEventListener("click" , () =>{
  searchToggle.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
nav.classList.add("active");
});

body.addEventListener("click" , e =>{
let clickedElm = e.target;

if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
  nav.classList.remove("active");
}
});

// CART JS

let cartdata = document.querySelector(".cart_tab");
let select = document.querySelector(".select");
let button = document.getElementsByTagName("button");
for(let btn of button){
  btn.addEventListener("click", (e)=>{
	  let add = Number(cartdata.getAttribute("data-count") || 0);
	  cartdata.setAttribute("data-count", add +1);
	  cartdata.classList.add("zero")

	  // image --animation to cart ---//
	  let image = e.target.parentNode.querySelector(".cart_img");
	  let span = e.target.parentNode.querySelector("span");
	  let s_image = image.cloneNode(false);
	  span.appendChild(s_image);

	  // copy and paste image to cart
	  let parent = e.target.parentNode;
	  let clone = parent.cloneNode(true);
	  select.appendChild(clone);
	  clone.lastElementChild.innerText = "Remove";

	  if (clone) {
		  cartdata.onclick = ()=>{
			  select.classList.toggle("display");
		  }		 	
	  }	  
  }) 
  
}
