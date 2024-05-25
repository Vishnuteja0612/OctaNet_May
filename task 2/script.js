document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task-input').value;
    const priority = document.getElementById('priority-select').value;
    const dueDate = document.getElementById('due-date-input').value;
    
    if (taskInput === '') {
        alert('Please enter a task');
        return;
    }
    
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    
    const taskContent = document.createElement('span');
    taskContent.textContent = `${taskInput} (Priority: ${priority}, Due: ${dueDate || 'No due date'})`;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete';
    completeButton.onclick = function() {
        li.classList.toggle('complete');
    };
    
    li.appendChild(taskContent);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    
    taskList.appendChild(li);
    
    document.getElementById('task-form').reset();
});
