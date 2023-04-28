const question = [
{
    question: " What tag defines the body of the HTML document, and usually includes all the contents such as the text, hyperlinks, images, tables, lists, and more?",
    answers: [
        { text: "<head></head>", correct: false},
        { text: "<br></br>", correct: false},
        { text: "<body></body>", correct: true},
        { text: "<title></title>", correct: false},
    ]
},
{question: " What tag is used to specify a line of text that is no longer correct (it used to be the strike tag, but that no longer works in HTML5)?",
    answers: [
        { text: "<s>", correct: true},
        { text: "<u>", correct: false},
        { text: "<li>", correct: false},
        { text: "<ul>", correct: false},
    ]
},
{
    question: " What tag is used to define an image - or add an image - to an HTML page?",
    answers: [
        { text: "<table>", correct: false},
        { text: "<img>", correct: true},
        { text: "<div>", correct: false},
        { text: "<meta>", correct: false},
    ]
},
{
    question: " What tag is used to define an interactive field where users can enter data?",
    answers: [
        { text: "<input>", correct: true},
        { text: "<datalist>", correct: false},
        { text: "<enterpoint>", correct: false},
        { text: "<dialog>", correct: false},
    ]
},
{question: " What tag is used to define a standard cell inside a table?",
    answers: [
        { text: "<button>", correct: false},
        { text: "<footer>", correct: false},
        { text: "<h1> to <h6>", correct: false},
        { text: "<td>", correct: true},
    ]
},
{question: " What tag is used to render or transform text into an emphasized (italics) version?",
    answers: [
        { text: "<blockquote>", correct: false},
        { text: "<strong>", correct: false},
        { text: "<a>", correct: false},
        { text: "<em>", correct: true},
    ]
}
];

const questionEl = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.indexHTML = "Next";
    showQuestion();
}

//
function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        button.addEventListener("click", () =>{
            if (answers.correct) {
                score ++;
            }
        })
        answerButton.appendChild(button);
    
    })
}

startQuiz();

