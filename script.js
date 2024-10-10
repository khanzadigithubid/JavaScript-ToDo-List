function addItem() {
    var input = document.getElementById('input')
    if (input.value !== "") {
        var list = document.getElementById('list')
        var liElement = document.createElement('li')
        var editBtn = '<button onclick=editItem(event)>Edit</button>'
        var deleteBtn = '<button onclick=delItem(event)>Delete</button>'
        liElement.innerHTML = '<span>' + input.value + '</span>' + editBtn + deleteBtn
        list.append(liElement)
        input.value = ''
    } else {
        alert("Input Cannot Be Empty...")
    }
}


function deleteAllItem() {
    var list = document.getElementById('list');
    list.innerHTML = " "
}

function delItem(event) {
    var liElement = event.target.parentElement
    liElement.remove()
}

var itemElement

function editItem(event) {
    var inputElement = document.getElementById('input')
    itemElement = event.target.previousSibling
    inputElement.value = itemElement.innerHTML

    var addBtn = document.getElementById('add-btn');
    addBtn.className = 'hide'

    var updateBtn = document.getElementById('update-btn');
    updateBtn.className = ''

    var deleteBtn = document.getElementById('deleteAll-btn');
    deleteBtn.className = 'hide'

}

function updateItem() {
    var inputElement = document.getElementById('input')
    itemElement.innerHTML = inputElement.value

    var updateBtn = document.getElementById('update-btn');
    updateBtn.className = 'hide'

    var deleteBtn = document.getElementById('deleteAll-btn');
    deleteBtn.className = ' '

    var addBtn = document.getElementById('add-btn');
    addBtn.className = ''


    inputElement.value = ''

}