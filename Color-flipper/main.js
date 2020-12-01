const arrColors = [ 0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"]
let showColor = document.getElementById("color");
let btn = document.getElementById("btn")

btn.addEventListener('click', () => {
    let hexcolor = "#";
    for (i = 0; i < 6; i++) {
        hexcolor += arrColors[getArr()]

        //console.log(hexcolor)
         
    }
    document.body.style.backgroundColor = hexcolor;
    showColor.textContent = hexcolor;

})

function getArr() {
    return Math.floor(Math.random() * arrColors.length) 
}
