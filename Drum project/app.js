

window.addEventListener('keydown', function(e){
   
    const audioSound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);


    if(!audioSound) return;
     
    audioSound.currentTime = 0;
    audioSound.play();

    key.classList.add('playing');


    
    function removeTransition(e) {

        if (e.propertyName !== 'transform'){
            this.classList.remove('playing');
        }  return;

    }

    const keys = document.querySelectorAll('.key');
    for (i = 0; i < keys.length; i++) {
        key.addEventListener('transitionend', removeTransition);
    }
});