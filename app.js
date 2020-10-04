// UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners 
function loadEventListeners() {
    // Add Task
    form.addEventListener('submit', addTask);

    // Remove Task Event - USING EVENT DELEGATION TO TARGET ONLY THE DELETE BUTTONS
    taskList.addEventListener('click', removeTask);

    // Clear tasks
    clearBtn.addEventListener('click', clearTasks);

    // Filter Tasks
    filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }

    // Create LI Element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // Create text node and append
    li.appendChild(document.createTextNode(taskInput.value));
    // Create link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append to li
    li.appendChild(link);
    // Append LI to UL
    taskList.appendChild(li);

    // Clear current input
    taskInput.value = '';

    // Form Submit default reloads page
    e.preventDefault();
}

// Remove Task
function removeTask(e) {
    // Event Delegation for Dynamic Amount of Buttons
    if(e.target.parentElement.classList.contains('delete-item')) {
        // console.log(e.target);
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();

        }
    }
}

// Clear Tasks
function clearTasks() {
    // taskList.innerHTML = '';

    // Faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter Tasks 
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}