const getInput = () => {
    let inputFirst = document.getElementById('inputFirstName').value;
    let inputLast = document.getElementById('inputLastName').value;
    let divElement = document.createElement("div");
    let nachricht = document.createTextNode(`Willkommen ${inputFirst } ${inputLast}`);
    divElement.appendChild(nachricht);
    document.getElementById('welcome').appendChild(divElement);
    divElement.style.fontSize = "100px";
    document.getElementById('submitButton').classList.toggle('hide');
    document.getElementsByTagName('div')[0].classList.toggle('hide');
    document.getElementsByTagName('div')[1].classList.toggle('hide');
}
document.getElementById('submitButton').addEventListener('click', getInput);