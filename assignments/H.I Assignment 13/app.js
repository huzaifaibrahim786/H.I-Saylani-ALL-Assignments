var topic, ques_no, question, answer1, answer2, answer3, answer4, correct_answer;


function Ready() {

    topic = document.getElementById("topic").value;
    ques_no = document.getElementById("ques_no").value;
    question = document.getElementById("question").value;
    answer1 = document.getElementById("answer1").value;
    answer2 = document.getElementById("answer2").value;
    answer3 = document.getElementById("answer3").value;
    answer4 = document.getElementById("answer4").value;
    correct_answer = document.getElementById("correct_answer").value;

}

function add_question() {




    Ready();
    firebase.database().ref('quiz/' + topic + '/' + ques_no).set({

        topic: topic,
        ques_no: ques_no,
        question: question,
        answer1: answer1,
        answer2: answer2,
        answer3: answer3,
        answer4: answer4,
        correct_answer: correct_answer
    })

    // var questions = {
    //     //key: key,
    //     topic: topic.value,
    //     ques_no: ques_no.value,
    //     question: question.value,
    //     answer1: answer1.value,
    //     answer2: answer2.value,
    //     answer3: answer3.value,
    //     answer4: answer4.value,
    //     correct_answer: correct_answer.value,

    // }

    // firebase.database().ref('quiz/' + topic).set(questions)

    alert("Added Successfully")

}



function add_one_more() {
    topic = document.getElementById("topic");
    topic.setAttribute('readonly', true)
    question = document.getElementById("question");
    answer1 = document.getElementById("answer1");
    answer2 = document.getElementById("answer2");
    answer3 = document.getElementById("answer3");
    answer4 = document.getElementById("answer4");
    correct_answer = document.getElementById("correct_answer");

    question.value = ""
    answer1.value = ""
    answer2.value = ""
    answer3.value = ""
    answer4.value = ""
    correct_answer.value = ""





    var value = parseInt(document.getElementById('ques_no').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('ques_no').value = value;

}


function edit_getquiztopic() {

    var database = firebase.database();
    database.ref('quiz/').on('value', function(snapshot) {
        if (snapshot.exists()) {
            var content = '';
            snapshot.forEach(function(data) {
                var key = data.key;
                // childData will be the actual contents of the child
                var childData = data.val();

                var val = data.val();
                content += '<tr>';
                content += '<td>' + key + '</td>';
                content += '<td>' + '<button class="select_button button" onclick="select(this)">Select</button>' + '</td>';
                content += '</tr>';
            });

            $('#list').append(content);
        } else {
            nothing.style.display = "block";
            list.style.display = "none";
        }
    });


}

function select(e) {


    var keyValue = e.parentNode.parentNode.children[0].innerHTML;

    document.getElementById("main").style.display = "none";
    document.getElementById("edit").style.display = "block";

    var topic = document.getElementById('topic');
    document.getElementById('topic').value = keyValue;
    topic.setAttribute('readonly', true)

    Ready()
    question = document.getElementById("question");
    answer1 = document.getElementById("answer1");
    answer2 = document.getElementById("answer2");
    answer3 = document.getElementById("answer3");
    answer4 = document.getElementById("answer4");
    correct_answer = document.getElementById("correct_answer");


    var database = firebase.database();
    database.ref('quiz/' + topic.value + '/' + ques_no).on('value', function(snapshot) {
        if (snapshot.exists()) {
            var val = snapshot.val();

            question.value = val.question;
            answer1.value = val.answer1;
            answer2.value = val.answer2;
            answer3.value = val.answer3;
            answer4.value = val.answer4;
            correct_answer.value = val.correct_answer;

        } else {

        }
    });

    console.log(topic.value)
    console.log(ques_no)

}


function check_next() {
    console.log("check next clicked")

    var topic = document.getElementById('topic');
    topic.setAttribute('readonly', true)



    var value = parseInt(document.getElementById('ques_no').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('ques_no').value = value;



    Ready()
    question = document.getElementById("question");
    answer1 = document.getElementById("answer1");
    answer2 = document.getElementById("answer2");
    answer3 = document.getElementById("answer3");
    answer4 = document.getElementById("answer4");
    correct_answer = document.getElementById("correct_answer");

    question.value = ""
    answer1.value = ""
    answer2.value = ""
    answer3.value = ""
    answer4.value = ""
    correct_answer.value = ""


    console.log(topic.value)
    console.log(ques_no)

    var database = firebase.database();
    database.ref('quiz/' + topic.value + '/' + ques_no).on('value', function(snapshot) {
        if (snapshot.exists()) {
            Ready();
            console.log(topic.value)
            console.log(ques_no)
            var val = snapshot.val();

            var question = document.getElementById("question");
            question.value = val.question;

            var answer1 = document.getElementById("answer1");
            answer1.value = val.answer1;

            var answer2 = document.getElementById("answer2");
            answer2.value = val.answer2;

            var answer3 = document.getElementById("answer3");
            answer3.value = val.answer3;

            var answer4 = document.getElementById("answer4");
            answer4.value = val.answer4;

            var correct_answer = document.getElementById("correct_answer");
            correct_answer.value = val.correct_answer;

        } else {

        }
    });
}


// function edit_questions(keyValue) {

//     window.location.href = "edit_questions.html";
//     var topic = document.getElementById('topic');
//     document.getElementById('topic').value = keyValue;
//     topic.setAttribute('readonly', true)


//     console.log(topic)
// }


function delete_getquiztopic() {

    var database = firebase.database();
    database.ref('quiz/').on('value', function(snapshot) {
        if (snapshot.exists()) {
            var content = '';
            snapshot.forEach(function(data) {
                var key = data.key;
                // childData will be the actual contents of the child
                var childData = data.val();

                var val = data.val();
                content += '<tr>';
                content += '<td>' + key + '</td>';
                content += '<td>' + '<button class="delete_button button" onclick="deleteTopic(this)">Delete</button>' + '</td>';
                content += '</tr>';
            });

            $('#list').append(content);
        } else {
            nothing.style.display = "block";
            list.style.display = "none";
        }
    });


}


function deleteTopic(e) {
    var keyValue = e.parentNode.parentNode.children[0].innerHTML;

    firebase.database().ref('quiz/' + keyValue).remove();
    location.reload(true);
}



function student_getquiztopic() {

    var database = firebase.database();
    database.ref('quiz/').on('value', function(snapshot) {
        if (snapshot.exists()) {
            var content = '';
            snapshot.forEach(function(data) {
                var key = data.key;
                // childData will be the actual contents of the child
                var childData = data.val();

                var val = data.val();
                content += '<tr>';
                content += '<td>' + key + '</td>';
                content += '<td>' + '<button class="select_button button btn_quiz" onclick="student_select(this)">Start Quiz</button>' + '</td>';
                content += '</tr>';
            });

            $('#list').append(content);
        } else {
            nothing.style.display = "block";
            list.style.display = "none";
        }
    });


}


function student_select(e) {


    document.getElementById("quiz").style.display = "block";
    document.getElementById("getname").style.display = "none";


    //var topic = document.getElementById("topic").value;

    var topic = e.parentNode.parentNode.children[0].innerHTML;

    console.log(topic)

    firebase.database().ref('quiz/' + topic).on('value', function(data) {




        var scores = data.val();
        var keys = Object.keys(scores);
        console.log(keys.length)
            // var count = document.getElementById("count").value;
            // count = keys.length
        for (var i = 1; i <= keys.length; i++) {
            document.getElementById('count').value = i++;
        }



    })

    var name = document.getElementById("name").value;
    var topic = e.parentNode.parentNode.children[0].innerHTML;
    document.getElementById("topic").value = topic;
    console.log(name)
    console.log(topic)

    var ques_no = document.getElementById("ques_no").value;
    console.log(ques_no)





    var question = document.getElementById("question");
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var correct_answer = document.getElementById("correct_answer");
    var ans1 = document.getElementById("ans1");
    var ans2 = document.getElementById("ans2");
    var ans3 = document.getElementById("ans3");
    var ans4 = document.getElementById("ans4");


    var database = firebase.database();
    database.ref('quiz/' + topic + '/' + ques_no).on('value', function(snapshot) {
        if (snapshot.exists()) {
            var val = snapshot.val();

            console.log(val.question)
            console.log(val.answer1)
            console.log(val.answer2)
            console.log(val.answer3)
            console.log(val.answer4)



            question.value = val.question;
            answer1.value = val.answer1;
            answer2.value = val.answer2;
            answer3.value = val.answer3;
            answer4.value = val.answer4;


            ans1.value = val.answer1;
            ans2.value = val.answer2;
            ans3.value = val.answer3;
            ans4.value = val.answer4;
            correct_answer.value = val.correct_answer;
            console.log(correct_answer.value)


        } else {

        }
    });


}


function save_answer() {

    var name = document.getElementById("name").value;
    var topic = document.getElementById("topic").value;
    var ques_no = document.getElementById("ques_no").value;
    var question = document.getElementById("question").value;
    var correct_answer = document.getElementById("correct_answer").value;

    var selectedanswer;
    document.getElementsByName("answer").forEach(function(elm) {
        if (elm.checked) {
            selectedanswer = elm.value;
        }
    })

    if (selectedanswer === correct_answer) {
        var score = 1;
    } else {
        var score = 0;

    }



    firebase.database().ref('students/' + name + '/' + topic + '/' + ques_no).set({

        topic: topic,
        ques_no: ques_no,
        question: question,
        answer: selectedanswer,
        correct_answer: correct_answer,
        score: score
    })


    alert("Added Successfully")


}


function next_question() {


    var topic = document.getElementById('topic');
    topic.setAttribute('readonly', true)


    var value = parseInt(document.getElementById('ques_no').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('ques_no').value = value;


    console.log(topic.value)



    var question = document.getElementById("question");
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var ans1 = document.getElementById("ans1");
    var ans2 = document.getElementById("ans2");
    var ans3 = document.getElementById("ans3");
    var ans4 = document.getElementById("ans4");
    var correct_answer = document.getElementById("correct_answer");


    question.value = ""
    answer1.value = ""
    answer2.value = ""
    answer3.value = ""
    answer4.value = ""
    correct_answer.value = ""


    console.log(topic.value)
    console.log(value)
    var current = document.getElementById("ques_no").value;
    var max = document.getElementById("count").value;
    if (current === max) {
        document.getElementById("next").style.display = "none";
        document.getElementById("finish").style.display = "inline-block";

    }

    var database = firebase.database();
    database.ref('quiz/' + topic.value + '/' + value).on('value', function(snapshot) {
        if (snapshot.exists()) {

            console.log(topic.value)
            console.log(value)
            var val = snapshot.val();
            question.value = val.question;
            answer1.value = val.answer1;
            answer2.value = val.answer2;
            answer3.value = val.answer3;
            answer4.value = val.answer4;
            ans1.value = val.answer1;
            ans2.value = val.answer2;
            ans3.value = val.answer3;
            ans4.value = val.answer4;
            correct_answer.value = val.correct_answer;
            console.log(correct_answer.value)

        } else {

        }
    });









}


function finish() {

    document.getElementById("answer").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("getname").style.display = "none";

    var topic = document.getElementById('topic').value;
    var name = document.getElementById("name").value;
    var marks = document.getElementById("marks");
    console.log(marks)
    var mark = 0;



    var database = firebase.database();
    database.ref('students/' + name + '/' + topic).on('value', function(snapshot) {
        console.log(topic)
        if (snapshot.exists()) {
            var content = '';
            snapshot.forEach(function(data) {
                var key = data.key;
                console.log(key)

                // childData will be the actual contents of the child
                var childData = data.val();

                var val = data.val();
                console.log(val.answer)
                console.log(val.correct_answer)

                var sc = val.score;



                if (sc === 1) {
                    mark++
                    console.log(mark)
                    marks.innerHTML = mark;
                } else if (sc === 0) {
                    marks.innerHTML = mark;
                }







                content += '<tr class="result_td">';
                content += '<td class="result_td">' + key + '</td>';
                content += '<td class="result_td">' + val.question + '</td>';
                content += '<td class="result_td">' + val.answer + '</td>';
                content += '<td class="result_td">' + val.correct_answer + '</td>';
                content += '<td class="result_td">' + val.score + '</td>';

                content += '</tr>';

                // var marks = document.getElementById("marks").value;
                // var ans = document.getElementById("ans").innerHTML;
                // var correct_ans = document.getElementById("correct_ans").innerHTML;

                // if (ans === correct_ans) {
                //     console.log(marks++)
                // }



            });

            $('#answers').append(content);
        } else {
            alert("data not found")
        }
    });






}