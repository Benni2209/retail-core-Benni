
const imageSwap = () => {
    for (let i = 0; i < 5; i++){
        document.getElementsByTagName('img')[i].classList.toggle("hide");
    }



}
const unhide = () => {document.getElementById('unhide').classList.toggle('unhiddenImg');}


document.getElementById('clickToReplace').addEventListener('click', unhide);

document.getElementById('clickToReplace').addEventListener('click', imageSwap);

