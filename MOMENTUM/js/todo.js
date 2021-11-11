const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); //id와 다른것은 남기기 위해
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deletToDo);
    li.appendChild(span); //span을 li에 집어넣음
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //array에 todo 항목들을 넣는다.
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDo = localStorage.getItem(TODOS_KEY);

if (saveToDo != null) {
    const parsedToDos = JSON.parse(saveToDo); //object로 만들어줌 
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); //각각의 item에 대해 함수를 실행시켜주는 함수 foreach()
    //arrow function = 함수를 쓰는거랑 동일함
}