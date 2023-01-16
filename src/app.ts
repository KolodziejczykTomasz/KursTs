//typy podstawowe

const firstName: string = "John";
const lastName: string = "Doe 2";
let age: number = 20;
let ageAsString: string = "dwadziescia"

// typy w parametrach funkcji

const addTwoNumber = (n1:number, n2: number) => n1 + n2;

console.log(addTwoNumber(2,98));

// typy w praktyce 1
const input1: HTMLInputElement = document.querySelector('#number1');
const input2: HTMLInputElement = document.querySelector('#number2');
const buttonClick = document.querySelector('button');
const showSum: HTMLElement = document.querySelector("#showSum");
const add = (v1: number, v2: number) => String(v1 + v2);
buttonClick.addEventListener("click", () => {
    const sum: string = add(Number(input1.value), Number(input2.value));
    const displayElement: HTMLElement = document.createElement('div');
    displayElement.innerText = sum;
    showSum.appendChild(displayElement);
});

// typy w praktyce part 2
const formInput: HTMLInputElement = document.querySelector('#inputTask');
const formButtonToAdd = document.querySelector('#addTask');
const taksList = document.querySelector('#taksList');
interface Task {
    title: string;
    done:boolean;
}
const tasks: Task[] = [
                    {   title: "Wynieść śmieci",
                        done: false
                    },
                    {   title: "Zagrać w piłkę",
                        done: false
                    },
                    {   title: "Wyłączyć komputer",
                        done: false
                    },
                ];

const render = ()=>{
    taksList.innerHTML = "";
    tasks.forEach((task, index) => {    
    const taskElement: HTMLElement = document.createElement('li');
    /*taskElement.innerText = task.name;
    taksList.appendChild(taskElement);*/
    const labelElement: HTMLLabelElement = document.createElement('label');
    labelElement.innerText = task.title;
    const id: string = `task-${index}`;
    labelElement.setAttribute('for', id);
    const checkBoxElement: HTMLInputElement = document.createElement('input');
    checkBoxElement.type = "checkbox";
    checkBoxElement.name = "name";
    checkBoxElement.id = id;
    checkBoxElement.checked = task.done;
    checkBoxElement.addEventListener('change', ()=> {
        task.done = !task.done;
    });
    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkBoxElement);
    taksList.appendChild(taskElement);
})
}


const addTask = (task: Task) => {   
    tasks.push(task);  
    
}

formButtonToAdd.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({title: formInput.value, done:false});    
     formInput.value="";
     render()
});

render()