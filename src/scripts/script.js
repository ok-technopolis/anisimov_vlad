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

counter = 0;
counterElem = document.getElementById("counter");

function setupItem(text) {
    counter++;
    counterElem.innerHTML = counter + " todos left";
    var item = createItem(text);
    var todos_list = document.getElementById("list");
    removeItem(item);
    todos_list.appendChild(item);
}

function removeItem(item) {
    var remove = item.getElementsByTagName('BUTTON')[0];

    remove.onclick = function() {
        item.parentNode.removeChild(item);
        counter--;
        counterElem.innerHTML = counter + " todos left";
    };
}