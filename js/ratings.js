// Variables
const firstCard = document.querySelector('.card').style.display = 'block';
const secondCard = document.querySelector('.card_two').style.display = 'none';


// Event listeners
let number;

document.querySelector('.one').addEventListener('click', () => {
    number = 1;
});
document.querySelector('.two').addEventListener('click', () => {
    number = 2;
});
document.querySelector('.three').addEventListener('click', () => {
    number = 3;
});
document.querySelector('.four').addEventListener('click', () => {
    number = 4;
});
document.querySelector('.five').addEventListener('click', () => {
    number = 5;
});


document.querySelector('.submit').addEventListener('click', submit);



// Functions
function submit() {
    if(number != undefined){
        document.querySelector('.card').style.display = 'none';
        document.querySelector('.card_two').style.display = 'block';
        document.querySelector('.paragraph').innerHTML = number;
    } else {
        document.querySelector('.card_paragraph-one').appendChild(document.createTextNode('Please select a number'));
        document.querySelector('.card_paragraph-one').style.color = 'red';

        setTimeout(() => {
            document.querySelector('.card_paragraph-one').style.display = 'none';
        }, 2000);
    }
}