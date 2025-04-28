const btnOpenMenue = document.querySelector("nav .btn-bars");
const navMoblieMenu = document.querySelector("nav .viewboard");
const navGroupMobile = document.querySelector("nav .viewboard .nav-group-m");

navGroupMobile.addEventListener('click',(e)=>{
    e.stopPropagation();
})
btnOpenMenue.addEventListener('click', () => {
    btnOpenMenue.classList.toggle('hidden');
    navMoblieMenu.classList.remove('hidden');
})
navMoblieMenu.addEventListener('click',()=>{
    navMoblieMenu.classList.toggle('hidden');
    btnOpenMenue.classList.remove('hidden');
})