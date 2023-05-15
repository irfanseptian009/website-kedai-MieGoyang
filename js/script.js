// Toggle calss active
const navbarNav = document.querySelector('.navbar-nav')
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const shoppingCart = document.querySelector('.shopping-cart');
// toggle kketika mie menu di klik
document.querySelector('#mie-menu').onclick=()=>{
    navbarNav.classList.toggle('active');
};

// toggle ketika shopping cart activ
document.querySelector('#shopping-cart-button').onclick=(e)=>{
	shoppingCart.classList.toggle('active');
	e.preventDefault();
};

// toggle class active untuk menu search

document.querySelector('#search-button').onclick=(e) =>{
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};


// Klik di luar elemen

const mm = document.querySelector ('#mie-menu');
const sb= document.querySelector('#search-button');
const sc= document.querySelector('#shopping-cart-button');


document.addEventListener('click', function (e) {
    if(!mm.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
}
    if(!sb.contains(e.target)&& !searchForm.contains(e.target)){
    searchForm.classList.remove('active');
}
    if(!sc.contains(e.target)&& !shoppingCart.contains(e.target)){
    shoppingCart.classList.remove('active');
}
});


// Modal BOx

const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((Btn) => {
	Btn.onclick =(e) => {
			itemDetailModal.style.display ='flex';
			e.preventDefault();
	};	
});




// klik model close modal

document.querySelector('.modal .close-icon').onclick= (e)=> {
	itemDetailModal.style.display ='none';
	e.preventDefault();
};

//  klik di luar modal

const modal = document.querySelector('#item-detail-modal');
window.onclick = (e) => {
	if (e.target === modal) {
		modal.style.display= 'none';
	}
};