let tasks = []
let undoStack = []
let redoStack = []
let taskId = 1

function addTask(){

const name = document.getElementById("inp-name").value
const time = document.getElementById("inp-time").value
const priority = document.getElementById("inp-priority").value

if(name.trim() === "") return

const task = {
id: taskId++,
name: name,
time: time,
priority: priority,
done: false
}

tasks.push(task)
undoStack.push({type:"add",task})

renderTasks()

document.getElementById("inp-name").value = ""
}

function renderTasks(list = tasks){

const container = document.getElementById("task-list")
container.innerHTML = ""

document.getElementById("tasks-count").innerText = list.length + " tasks"

if(list.length === 0){
container.innerHTML =
`<div class="no-results">No tasks found</div>`
return
}

list.forEach(task => {

let priorityClass = "priority-low"
let badge = "LOW"

if(task.priority == 1){
priorityClass = "priority-high"
badge = "HIGH"
}

if(task.priority == 2){
priorityClass = "priority-med"
badge = "MEDIUM"
}

const div = document.createElement("div")

div.className = `task-card ${priorityClass} ${task.done ? "done" : ""}`

div.innerHTML = `

<div class="task-check ${task.done ? "checked":""}"
onclick="toggleTask(${task.id})">
✔
</div>

<div class="task-info">
<div class="task-title">${task.name}</div>

<div class="task-meta">
<div class="task-time">🕐 ${task.time || "No time"}</div>
</div>

</div>

<div class="priority-badge ${badge.toLowerCase()}">${badge}</div>

<div class="task-actions">
<button class="btn-icon delete"
onclick="deleteTask(${task.id})">🗑</button>
</div>

`

container.appendChild(div)

})

updateStats()
}

function toggleTask(id){

tasks = tasks.map(t=>{
if(t.id === id){
t.done = !t.done
}
return t
})

renderTasks()
}

function deleteTask(id){

const task = tasks.find(t=>t.id===id)

tasks = tasks.filter(t=>t.id!==id)

undoStack.push({type:"delete",task})

renderTasks()
}

function updateStats(){

const done = tasks.filter(t=>t.done).length
const pending = tasks.length - done

document.getElementById("stat-done").innerText = done
document.getElementById("stat-pending").innerText = pending

}

function onSearch(){

const text = document.getElementById("search-inp").value.toLowerCase()

const result = tasks.filter(t =>
t.name.toLowerCase().includes(text)
)

renderTasks(result)

}

function sortBy(type){

document.querySelectorAll(".btn-sort")
.forEach(b => b.classList.remove("active"))

if(type === "heap"){
tasks.sort((a,b)=>a.priority - b.priority)
document.getElementById("sort-heap").classList.add("active")
}

if(type === "time"){
tasks.sort((a,b)=>new Date(a.time) - new Date(b.time))
document.getElementById("sort-time").classList.add("active")
}

if(type === "name"){
tasks.sort((a,b)=>a.name.localeCompare(b.name))
document.getElementById("sort-name").classList.add("active")
}

if(type === "none"){
tasks.sort((a,b)=>a.id - b.id)
document.getElementById("sort-none").classList.add("active")
}

renderTasks()

}

function undoAction(){

if(undoStack.length === 0) return

const action = undoStack.pop()

if(action.type === "add"){
tasks = tasks.filter(t => t.id !== action.task.id)
}

if(action.type === "delete"){
tasks.push(action.task)
}

renderTasks()
}

function redoAction(){

alert("Redo feature demo only")

}

function getNextTask(){

const next = tasks
.filter(t => !t.done)
.sort((a,b)=>a.priority - b.priority)[0]

if(next){
alert("Next Task: " + next.name)
}else{
alert("No pending tasks")
}

}

function showDsaStats(){

alert(

`DSA Used In Project

Linked List (Task Storage)
Stack (Undo / Redo)
Heap Sort (Priority)
Merge Sort (Name)
Insertion Sort (Time)
Linear / Binary Search`

)

}

renderTasks()