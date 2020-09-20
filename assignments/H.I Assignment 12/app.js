getFirebaseData();
nothing.style.display = "none";

function addTask() {


    list.style.display = "inline-block";
    nothing.style.display = "none";

    var task = document.getElementById("task");
    var time = document.getElementById("time");

    var key = firebase.database().ref('todoTasks').push().key;
    var todoTasks = {
        task: task.value,
        time: time.value,
        key: key
    }

    firebase.database().ref('todoTasks/' + key).set(todoTasks);

    task.value = "";
    time.value = "";
    location.reload(true);

}


function getFirebaseData() {




    var database = firebase.database();
    database.ref('todoTasks').on('value', function(snapshot) {
        if (snapshot.exists()) {
            var content = '';
            snapshot.forEach(function(data) {
                var val = data.val();
                content += '<tr>';
                content += '<td style="display:none">' + val.key + '</td>';
                content += '<td>' + val.task + '</td>';
                content += '<td>' + val.time + '</td>';
                content += '<td>' + '<button class="edit_button button" onclick="editTask(this)">Edit</button><button class="save_button button" onclick="saveTask(this)" style="display:none;">Save</button>' + '</td>';
                content += '<td>' + '<button class="delete_button button" onclick="deleteTask(this)">Delete</button>' + '</td>';
                content += '</tr>';
            });

            $('#list').append(content);
        } else {
            nothing.style.display = "block";
            list.style.display = "none";
        }
    });

}


function editTask(e) {

    var key = e.parentNode.parentNode.children[0];
    var task = e.parentNode.parentNode.children[1];
    var time = e.parentNode.parentNode.children[2];





    key.innerHTML = "<input type='text' name='newkey" + "' class='form-control" + "' id='newkey" + "' value='" + e.parentNode.parentNode.children[0].innerHTML + "'>";
    task.innerHTML = "<input type='text' name='newtask" + "' class='form-control" + "' id='newtask" + "' value='" + e.parentNode.parentNode.children[1].innerHTML + "'>";
    time.innerHTML = "<input type='text' name='newtime" + "' class='form-control" + "' id='newtime" + "' value='" + e.parentNode.parentNode.children[2].innerHTML + "'>";



    e.parentNode.parentNode.children[3].children[0].style.display = "none";
    e.parentNode.parentNode.children[3].children[1].style.display = "block";


}

function saveTask(e) {

    var key = e.parentNode.parentNode.children[0];
    var task = e.parentNode.parentNode.children[1];
    var time = e.parentNode.parentNode.children[2];


    var keyValue = e.parentNode.parentNode.children[0].children[0].value;
    var taskValue = e.parentNode.parentNode.children[1].children[0].value;
    var timeValue = e.parentNode.parentNode.children[2].children[0].value;




    firebase.database().ref('todoTasks/' + keyValue).set({
        key: keyValue,
        task: taskValue,
        time: timeValue
    })




    location.reload(true);

    e.parentNode.parentNode.children[3].children[0].style.display = "block";
    e.parentNode.parentNode.children[3].children[1].style.display = "none";

}


function deleteTask(e) {

    var keyValue = e.parentNode.parentNode.children[0].innerHTML;

    firebase.database().ref('todoTasks/' + keyValue).remove();
    location.reload(true);
}





function deleteAll() {

    firebase.database().ref('todoTasks').remove();
    location.reload(true);
}