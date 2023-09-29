const colorValue = document.getElementById('color-value');
const changeBtn = document.getElementById('color-changer');
const mainBg = document.getElementsByTagName('body')[0];

console.log(changeBtn)

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const randomNum = function(){
    return Math.floor(Math.random() * hex.length);
}

changeBtn.addEventListener('click',function(){
    let hexWord = '#';
    for(let i = 0; i < 6; i++){
        hexWord = hexWord + hex[randomNum()]
    }
    mainBg.style.backgroundColor = hexWord;
    colorValue.textContent = hexWord;
    colorValue.style.color = hexWord;
});
