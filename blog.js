const dialog = document.getElementById("blog-post");
const sumbitBtn = dialog.querySelector('#blog-post-submit');
const cancelBtn = dialog.querySelector('#blog-post-cancel');

const editDialog = document.getElementById("edit-blog-post");
const editSubmitBtn = editDialog.querySelector('#edit-blog-post-submit');
const editCancelBtn = editDialog.querySelector('#edit-blog-post-cancel');

const itemList = document.querySelector('#item-list');
const addPostBtn = document.getElementById("add-post-btn");

// Load items from local storage
let items = JSON.parse(localStorage.getItem('items')) || [];

if (Object.keys(items).length == 0) {
    let index = 0;
    while (index < 3) {
        const titleInput = "title " + index;
        const dateInput = "2023-03-01";
        const messageInput = `my ${index} post`;
        const newItem = { 
            title: titleInput,
            date: dateInput,
            message: messageInput
        };
        items.push(newItem);
        localStorage.setItem('items', JSON.stringify(items));
        index++;
    }
}
displayItems();

// Display items
function displayItems() {
    if (Object.keys(items).length == 0) {
        itemList.innerHTML = "no blog in the list";
        return;
    }

    itemList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        const itemText = document.createTextNode(`${item.title} ${item.date} ${item.message}`);
        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.addEventListener('click', () => editItem(index));
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () => deleteItem(index));
        li.appendChild(itemText);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        itemList.appendChild(li);
    });
}

addPostBtn.addEventListener("click", () => {
    dialog.showModal();
});

// Edit item
function editItem(index) {
    editDialog.showModal();
    document.getElementById("edit-blog-title").value = items[index].title;
    document.getElementById("edit-blog-date").value = items[index].date;
    document.getElementById("edit-blog-message").value = items[index].message;


    editSubmitBtn.addEventListener("click", () => {
        const editTitleInput = document.getElementById("edit-blog-title").value;
        const editDateInput = document.getElementById("edit-blog-date").value;
        const editMessageInput = document.getElementById("edit-blog-message").value;
    
        items[index].title = editTitleInput;
        items[index].date = editDateInput;
        items[index].message = editMessageInput;

        clearAllFields();
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
        editDialog.close();
    });
    
    editCancelBtn.addEventListener("click", () => {
        editDialog.close();
    });
}
  
// Delete item
function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}

sumbitBtn.addEventListener("click", () => {
    const titleInput = document.getElementById("blog-title").value;
    const dateInput = document.getElementById("blog-date").value;
    const messageInput = document.getElementById("blog-message").value;
    if (titleInput === '' || dateInput === '' || messageInput === '') {
        alert('Please enter all fields');
        return;
    }
    const newItem = { 
        title: titleInput,
        date: dateInput,
        message: messageInput
    };
    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));
    clearAllFields();

    displayItems();
    dialog.close();
});
cancelBtn.addEventListener("click", () => {
    dialog.close();
});

function clearAllFields() {
    document.getElementById("blog-title").value = '';
    document.getElementById("blog-date").value = '';
    document.getElementById("blog-message").value = '';

    document.getElementById("edit-blog-title").value = '';
    document.getElementById("edit-blog-date").value = '';
    document.getElementById("edit-blog-message").value = '';
}