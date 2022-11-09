// function alertMe(){
//     // alert ("Hello")
//     // variables
// //     let myName = "Kelvo";
// //     // myName = "Voke";
// //     alert (myName);
// // 
// // constant vaariables
// const PI = 3.142;
// PI = 1.2;
// alert(PI)


// }

const userInput = document.querySelector(".userInput");
const addBtn = document.querySelector(".addItem");
const listContainer = document.querySelector(".todo_items");
addBtn.addEventListener('click', addItem);

function addItem(e) {

    e.preventDefault();

    let input = userInput.value;

    const LI = document.createElement('li');
    LI.innerHTML = input;
    listContainer.appendChild(LI);

}