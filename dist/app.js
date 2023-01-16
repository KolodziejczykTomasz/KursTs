//typy podstawowe
const firstName = "John";
const lastName = "Doe 2";
let age = 20;
let ageAsString = "dwadziescia";
// typy w parametrach funkcji
const addTwoNumber = (n1, n2) => n1 + n2;
console.log(addTwoNumber(2, 98));
// typy w praktyce 1
const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');
const buttonClick = document.querySelector('button');
const showSum = document.querySelector("#showSum");
const add = (v1, v2) => String(v1 + v2);
buttonClick.addEventListener("click", () => {
    const sum = add(Number(input1.value), Number(input2.value));
    const displayElement = document.createElement('div');
    displayElement.innerText = sum;
    showSum.appendChild(displayElement);
});
// typy w praktyce part 2
const formInput = document.querySelector('#inputTask');
const formButtonToAdd = document.querySelector('#addTask');
const taksList = document.querySelector('#taksList');
const tasks = [
    { title: "Wynieść śmieci",
        done: false
    },
    { title: "Zagrać w piłkę",
        done: false
    },
    { title: "Wyłączyć komputer",
        done: false
    },
];
const render = () => {
    taksList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        /*taskElement.innerText = task.name;
        taksList.appendChild(taskElement);*/
        const labelElement = document.createElement('label');
        labelElement.innerText = task.title;
        const id = `task-${index}`;
        labelElement.setAttribute('for', id);
        const checkBoxElement = document.createElement('input');
        checkBoxElement.type = "checkbox";
        checkBoxElement.name = "name";
        checkBoxElement.id = id;
        checkBoxElement.checked = task.done;
        checkBoxElement.addEventListener('change', () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkBoxElement);
        taksList.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
formButtonToAdd.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: formInput.value, done: false });
    formInput.value = "";
    render();
});
render();
