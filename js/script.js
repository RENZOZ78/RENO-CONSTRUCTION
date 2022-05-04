let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

// derouler du menu shandwich
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
 };

// apparition du formulaire  de recherche
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
 };

//  quand je selectionne login-btn
document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

//  quand je selectionne btn-info
document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

//  quand je clic sur closeContact
document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

 //scroll=  enlever navbar, searchbar, login, contact
 window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
 }


    