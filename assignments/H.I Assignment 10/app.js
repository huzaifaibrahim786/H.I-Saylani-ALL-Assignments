var list = document.getElementById("list")
list.style.display = "none";
var nothing = document.getElementById("nothing")

function addTask() {
    list.style.display = "inline-block";
    nothing.style.display = "none";

    var todoTask = document.getElementById("task");
    var todoTime = document.getElementById("time");



    var tr = document.createElement('tr')

    var td1 = document.createElement('td');
    var tdTask = document.createTextNode(todoTask.value)
    td1.setAttribute("id", "task_row")


    var td2 = document.createElement('td');
    var tdTime = document.createTextNode(todoTime.value)
    td2.setAttribute("id", "time_row")



    var td3 = document.createElement('td');
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class", "editbtn");
    editBtn.setAttribute("class", "button");
    editBtn.setAttribute("id", "editbtn");
    editBtn.setAttribute("onclick", "editTask(this)");
    editBtn.appendChild(editText)

    var saveBtn = document.createElement('button')
    var saveText = document.createTextNode("SAVE")
    saveBtn.setAttribute("class", "savebtn");
    saveBtn.setAttribute("class", "button");
    saveBtn.setAttribute("onclick", "saveTask(this)");
    saveBtn.appendChild(saveText)
    saveBtn.style.display = "none";



    var td4 = document.createElement('td');
    var delBtn = document.createElement('button')
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class", "delbtn");
    delBtn.setAttribute("onclick", "deleteTask(this)");
    delBtn.appendChild(delText)


    td1.appendChild(tdTask)
    td2.appendChild(tdTime)
    td3.appendChild(editBtn)
    td3.appendChild(saveBtn)
    td4.appendChild(delBtn)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    list.appendChild(tr)


    todoTask.value = "";
    todoTime.value = "";

}


function deleteTask(e) {

    e.parentNode.parentNode.remove();



}

function editTask(e) {


    var task = e.parentNode.parentNode.children[0];
    var time = e.parentNode.parentNode.children[1];



    task.innerHTML = "<input type='text' name='newtask" + "' class='form-control" + "' id='newtask" + "' value='" + e.parentNode.parentNode.children[0].innerHTML + "'>";
    time.innerHTML = "<input type='text' name='newtime" + "' class='form-control" + "' id='newtime" + "' value='" + e.parentNode.parentNode.children[1].innerHTML + "'>";


    e.parentNode.parentNode.children[2].children[0].style.display = "none";
    e.parentNode.parentNode.children[2].children[1].style.display = "block";


}

function saveTask(e) {
    var task = e.parentNode.parentNode.children[0];
    var time = e.parentNode.parentNode.children[1];

    task.innerHTML = e.parentNode.parentNode.children[0].children[0].value;
    time.innerHTML = e.parentNode.parentNode.children[1].children[0].value;

    e.parentNode.parentNode.children[2].children[0].style.display = "block";
    e.parentNode.parentNode.children[2].children[1].style.display = "none";

}


function deleteAll() {
    const firstElementChild = document.getElementById("thead");
    list.innerHTML = '';
    list.append(firstElementChild);
    nothing.style.display = "block"
    nothing.innerHTML = "All Task Has Been Deleted From Todo List"
    list.style.display = "none";
}