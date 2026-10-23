const apiUrl = 'http://localhost:3000/task';

const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

try {
    const res = await fetch(apiUrl, {
        method: 'POST'
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({titel, description})
    });

if (!res.ok) throw new Error('Erro ao adicionar tarefa');

const task await.res.json();
form.requestFullscreen();

addTaskToUl(task);

} catch (error) {
    
}

});

