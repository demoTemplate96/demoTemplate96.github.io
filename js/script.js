window.onload=(()=>{MicroModal.init();const e=document.querySelector(".row-categories__items");tns({container:e,items:11,gutter:20,autoWidth:!0,slideBy:5,controls:!0,prevButton:".row-categories__button.row-categories__button-left",nextButton:".row-categories__button.row-categories__button-right",nav:!1,speed:500,loop:!1});const t=document.querySelectorAll(".slider .slider__carousel");if(t)for(const e of t){const t=e.querySelectorAll(".slider__buttons .slider__button"),o=e.querySelector(".slider__slides"),r=o.querySelectorAll(".slider__slide img"),s=o.closest(".slider__container").querySelector(".slider__offers");if(r){const e=tns({container:o,items:1,controls:!0,prevButton:t[0],nextButton:t[1],nav:!1,speed:500});if(s)for(const[t,o]of r.entries()){const r=document.createElement("a");r.href="#",r.innerText=o.alt,r.classList.add("slider__offer"),r.onclick=(o=>{o.preventDefault();const r=o.target.closest(".slider__offers").querySelectorAll(".slider__offer.slider__offer-active");if(r)for(const e of r)console.log(e),e.classList.remove("slider__offer-active");o.target.classList.add("slider__offer-active"),e.goTo(t)}),s.appendChild(r)}}}const o=document.querySelectorAll(".products-row-carousel");if(o)for(const e of o){const t=e.querySelectorAll(".products-row__buttons button"),o=e.querySelector(".products-row__carousel");o&&tns({container:o,items:2,gutter:20,controls:!0,prevButton:t[0],nextButton:t[1],nav:!1,speed:500})}});const recipesCarousels=document.querySelectorAll(".recipe-row__carousel");if(recipesCarousels)for(const e of recipesCarousels){const t=e.querySelector(".recipe-row__carousel-div");if(t){const o=e.querySelector(".recipe-row__next");tns({container:t,items:3,gutter:16,controls:!0,nextButton:o,prevButton:document.createElement("div"),nav:!1,speed:500})}}