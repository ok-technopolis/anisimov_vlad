counter = 0;
counterElem = document.getElementById("counter");
counterElem.innerHTML = counter + " todos left";

var inputField = document.getElementById("textInput");

inputField.addEventListener("keydown",function addItem(e) {
    if (e.keyCode != 13) {
    } else {
        var textInput = document.getElementsByTagName("INPUT")[0];
        var text = textInput.value;
        setupItem(text);
        return false;
    }
});

function setupItem(text) {
    counter++;
    counterElem.innerHTML = counter + " todos left";
    var item = createItem(text);
    var todos_list = document.getElementById("list");
    removeItem(item);
    todos_list.appendChild(item);
    item.setAttribute("todo-item", "todo-item");
}

function createItem(text) {
    var container = document.createElement('todo-item');

    container.innerHTML = '<div class="todo-item">\
        <input class ="todo-item_mark" type="checkbox" aria-label="Mark done">\
        <label class="todo-item_mark-checkbox" aria-hidden="true"></label>\
        <textarea class="todo-item_text" maxlength="100" >' + text + '</textarea>\
        <button class ="todo-item_remove" aria-label="Delete"></button>\
        </div>';
    return container.firstChild;
}

function removeItem(item) {
    var remove = item.getElementsByTagName('BUTTON')[0];

    remove.onclick = function () {
        item.parentNode.removeChild(item);
        counter--;
        counterElem.innerHTML = counter + " todos left";
    };
}

function removeAll() {
    var remove = document.getElementById("todos-add").getElementsByTagName('BUTTON')[1];
    var list = document.getElementById("list");
    remove.onclick = function () {
        for (var i = 0; i < counter; i++){
            list.removeChild(list.firstElementChild);
        }
        counter = 0;
        counterElem.innerHTML = counter + " todos left";
    };
}
