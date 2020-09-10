burger = document.querySelector('.burger')
Navbar = document.querySelector('.navbar')
NavList = document.querySelector('.nav-list')
RightNav = document.querySelector('.right-nav')

burger.addEventListener('click',()=>{
    RightNav.classList.toggle('v-class-res');
    NavList.classList.toggle('v-class-res');
    Navbar.classList.toggle('h-nav-res');
})