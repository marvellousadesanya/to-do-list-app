const newTask = document.querySelector('#add__task-btn');

const box = document.querySelector('#box');
const taskList = document.querySelector('.task__container');
const cancelBtn = document.querySelector('.cancel__btn');




// window.addEventListener('load', () => {
//     aList();
//     readData();
    
// });

let id = 0;
aList = () => {
    aTask = `
        <div class="task" id="task-${id}">
            <button class="done__btn">
                <i class="far fa-check-square"></i>
            </button>
            <p>${box.value}</p>
            <button class="priority">Make priority</button>
            <button class="cancel__btn">
                <i class="far fa-times-circle"></i>
            </button>
        </div>`
        ;
        
       
}

  
function addTaskFunc() {
    x = box.value;
    if (x) {
        aList();
        taskList.insertAdjacentHTML('afterbegin', aTask);
        
        box.value = '';
        persistData();
};

        let cid = id;
            const cancelBtn = document.querySelector(`#task-${id} .cancel__btn`);
            cancelBtn.addEventListener('click', () => {
            deleteItem(cid);
            });
            persistData();
        let cid2 = id;
            const doneBtn = document.querySelector(`#task-${id} .done__btn`);
            doneBtn.addEventListener('click', () => {
                markDone(cid2);
                persistData();
            });
        let cid3 = id;
            const priorityBtn = document.querySelector(`#task-${id} .priority`);
            priorityBtn.addEventListener('click', () => {
                priority(cid3);
                persistData();
            });
        
        
        id++; 
        return x;
    }
    


newTask.addEventListener('click', () => {
    
    addTaskFunc();

});

// readData();
// aList();



deleteItem = id => {
    const el = document.getElementById(`task-${id}`);
    el.remove();
}
        
markDone = id => {
    let el = document.querySelector(`#task-${id}`);
    el.style.textDecoration = 'line-through';
    el.parentNode.append(el);
}

priority = id => {
    const el = document.querySelector(`#task-${id}`);
    el.parentNode.prepend(el);
}


persistData = () => {
    const el = document.querySelector(`.task`);
    localStorage.setItem('addedTasks222', el.innerHTML);
};

readData = () => {
    const el = document.querySelector(`.task`);
    const saved = localStorage.getItem('addedTasks222');
    if (saved) el.innerHTML = saved;
    console.log(el.innerHTML); 
};


document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
        addTaskFunc();
        aList();
    }
});


const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});