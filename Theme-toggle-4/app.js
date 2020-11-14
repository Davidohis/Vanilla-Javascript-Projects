

const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', () =>{
    //change background theme color
    document.body.classList.toggle('dark');
})