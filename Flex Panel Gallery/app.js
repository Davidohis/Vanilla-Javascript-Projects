
const panelsFlex = document.querySelectorAll('.panel');

function toggleOpen(e) {
    this.classList.toggle('open');
}

function toggleActive(e) {
   if (e.propertyName.includes('flex')) {
       this.classList.toggle('open-active');
   }
}


panelsFlex.forEach(panel => panel.addEventListener('click', toggleOpen));
panelsFlex.forEach(panel => panel.addEventListener('transitionend', toggleActive));