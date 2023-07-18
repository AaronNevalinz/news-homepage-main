
    const hambarger = document.querySelector('#hambuger');
    const menuClose = document.querySelector('#menu-close');
    const navMenu = document.querySelector('#nav-menu');
    const overlay = document.querySelector('#overlay');
    const content = document.querySelector('#content');

    hambarger.addEventListener('click', ()=>{
        hambarger.classList.add('hidden');
        menuClose.classList.remove('hidden');
        navMenu.classList.remove('hidden')
        overlay.classList.remove('hidden');
    });

    menuClose.addEventListener('click', ()=>{
        hambarger.classList.remove('hidden');
        menuClose.classList.add('hidden');
        navMenu.classList.add('hidden')
        overlay.classList.add('hidden')
    });