document.getElementById('year').textContent = new Date().getFullYear();
const btn=document.querySelector('.nav-toggle');const nav=document.querySelector('.main-nav');if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
