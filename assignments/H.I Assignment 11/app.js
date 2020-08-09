var divs = document.getElementsByClassName('divs');
var emoji = document.getElementById('emoji');
var scoreShower = document.getElementById('scoreShower');
var scoreView = document.getElementById('score');
var current = document.getElementById('current');
var currentTotal = document.getElementById('currentTotal');
var selectVal = document.getElementById("option1").value;
var selectVa2 = document.getElementById("option2").value;
var selectVa3 = document.getElementById("option3").value;
var selectVa4 = document.getElementById("option4").value;
var quest = document.getElementById('quest');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var button1 = document.getElementById('btn1');
var section1 = document.getElementById('start');
var section2 = document.getElementById('questions');
button1.onclick = function() {
    section1.style.display = "none";
    section2.style.display = "block";
    renderQuestion();
}
let questions = [{
        question: "HTML stands for ?",
        //imgScr:,
        choiceA: "Hyper Text Markup Language",
        choiceB: "Hyper Text Manufacture Language",
        choiceC: "Hyper Testng Markup Language",
        choiceD: "Hyper Test Manufacture Language",
        correct: "A",
    },
    {
        question: "CSS stands for?",
        //imgScr:,
        choiceA: "Cascading Stylish Sheet",
        choiceB: "Correct Style Sheet",
        choiceC: "Cascading Style Sheet",
        choiceD: "Case Style Sheet",
        correct: "C",
    },
    {
        question: "DOM Stands for?",
        //imgScr:,
        choiceA: "Document Object Mode",
        choiceB: "Document Object Model",
        choiceC: "Document Odd Model ",
        choiceD: "Document Object Midel",
        correct: "B",
    },
    {
        question: "JavaScript is a...?",
        //imgScr:,
        choiceA: "Programing Language",
        choiceB: "Text Markup Language",
        choiceC: "Query Language",
        choiceD: "Data Mining Tool",
        correct: "A",
    },
    {
        question: "SQL stands for?",
        //imgScr:,
        choiceA: "Started Query Language",
        choiceB: "Structured Query Language",
        choiceC: "Strong Query Language",
        choiceD: "Stable Query Language",
        correct: "B",
    }

]
var counts = 1;
var totalScore = 0;
var runningQuestion = 0;

function renderQuestion() {
    let q = questions[runningQuestion];
    quest.innerHTML = q.question;
    option1.innerHTML = q.choiceA;
    option2.innerHTML = q.choiceB;
    option3.innerHTML = q.choiceC;
    option4.innerHTML = q.choiceD;

}
var buttons = document.getElementsByClassName('options');
for (i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        let q = questions[runningQuestion];
        if (this.innerHTML === q.correct) {
            //console.log("true");
            divs[runningQuestion].style.background = "green";
            runningQuestion++;
            totalScore++;
            count();
            if (runningQuestion < questions.length)

            {
                renderQuestion();
                console.log(counts);
                console.log(questions.length);

            } else {
                showScore();

            }
        } else {
            divs[runningQuestion].style.background = "red";
            runningQuestion++;
            count();
            console.log(counts);
            console.log(questions.length);
            //console.log("false");
            if (runningQuestion < questions.length) {

                renderQuestion();
            } else {
                showScore();
            }


        }


    }

    function showScore() {
        section2.style.display = "none";
        scoreView.style.display = "block";
        var score1 = ((totalScore / 5) * 100);
        scoreShower.innerHTML = "Score : " + ((totalScore / 5) * 100) + "%";

    }


}

function count() {
    current.innerHTML = ++counts;


}