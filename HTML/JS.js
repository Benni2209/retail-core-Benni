


const showDropdown = () => {
        document.getElementById('d2').classList.toggle("show");


}

const changeBackground = () => {
        window.onclick = e => {
                let getColor = e.target;
                if (getColor === document.getElementById('redBackground')){
                        document.getElementById('backgroundBody').style.backgroundColor = "red";
                }
                else if(getColor === document.getElementById('greenBackground')){
                        document.getElementById('backgroundBody').style.backgroundColor = "green";
                }
                else if(getColor === document.getElementById('blueBackground')){
                        document.getElementById('backgroundBody').style.backgroundColor = "blue";
                }
        }

}

document.getElementById('d1').addEventListener('mouseover', showDropdown);
document.getElementById('d1').addEventListener('mouseout', showDropdown);


changeBackground();


