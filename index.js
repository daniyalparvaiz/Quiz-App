

// const quiz = [
//     {
//         question: "what is your name ?",
//         options: ["Biigates", "Jethalal", "Furqan", "Daniyal"],
//         correctanswer: "Daniyal"
//     },
//     {
//         question: "What is your age ?",
//         options: ["43", "16", "74", "24"],
//         correctanswer: "16"
//     },
//     {
//         question: "What is your Nationality ?",
//         options: ["Bangladeshi", "Arbi", "Pakistani", "Indian"],
//         correctanswer: "Pakistani"
//     },
//     {
//         question: "Apka intrest kis chiz me h ?",
//         options: ["Sports", "Travelling", "Gaming", "Technology"],
//         correctanswer: "Travelling"
//     },
//     {
//         question: "Free time me kia krte ho ?",
//         options: ["Sleep", "Netflix", "Social Media", "Study"],
//         correctanswer: "Sleep"
//     },
//     // {
//     //     question: "Apka favourite food ?",
//     //     options: ["Biryani", "Palao", "Karahi", "Qorma"],
//     //     correctanswer: "Palao"
//     // },
//     // {
//     //     question: "Ap daily kitne ghnte sote h ?",
//     //     options: ["3hr", "5hr", "7hr", "8+hr"],
//     //     correctanswer: "3hr"
//     // },
//     // {
//     //     question: "Ap kaha travel krna psnd krte h ?",
//     //     options: ["Iran", "Bakuu", "Saudi", "Maldives"],
//     //     correctanswer: "Saudi"
//     // },
//     // {
//     //     question: " Agr Apko ek superpower milti, to wo kia hoti ? ",
//     //     options: ["Othes", "Invisibility", "Mind Reading", "Flying"],
//     //     correctanswer: "Invisibility"
//     // },
//     // {
//     //     question: "Apka current mood kesa h ?",
//     //     options: ["Sad", "Happy", "Tierd", "Angry"],
//     //     correctanswer: "Tierd"
//     // }

// ]

// var currentQuestion = 0
// var score = 0
// var scoreElement = document.getElementById("score")
// var correctAnswer = 0
// // goTONext()

// function renderQuestions() {
//     var quizQuestion = document.getElementById("Question")
//     quizQuestion.innerHTML = quiz[currentQuestion].question

//     var quizOption = document.getElementById("quizOption")

//     quizOption.innerHTML = ""
//     for (var i = 0; i < quiz[currentQuestion].options.length; i++) {
//         quizOption.innerHTML += `<li onclick = "checkCorrect(event)">${quiz[currentQuestion].options[i]}</li>`

//     }
// }

// function goTONext(){
//     currentQuestion++
//     renderQuestions()
//     showResult()
// }
// function checkCorrect(event){
//     console.log(quiz[currentQuestion].correctanswer.correctanswer)
//         console.log(quiz[currentQuestion].correctanswer.correctanswer)

//     if(quiz[currentQuestion].correctanswer === event.target.innerHTML){
//         event.target.style.backgroundColor="green"
//         event.target.style.color="white"
//         // alert("you are right")
//         score += 20
//     } else {
//         event.target.style.backgroundColor = "red"
//         event.target.style.color="white"
//     }
//     scoreElement.innerHTML = "" + score
// }
//     if(currentQuestion === quiz.length - 1){
//         showResult(); 
//     } else {
//         setTimeout(() => {
//             goTONext();
//         }, 1000);
//     }
//     function showResult() {
//         document.getElementById("quiz-container").style.display = "none"
//         document.getElementById("next-btn").style.display = "none"
//         document.querySelector(".result-box").style.diplay = "block"
//         let totalQuestions = quiz.length;
//         let percentage = (correctCount / totalQuestions) * 100;
//        document.getElementById("correc").innerHTML ="Sahi Jawab: " + correctCount 
//        document.getElementById("wrong").innerText = "Galat Jawab: " + wrongCount
//        document.getElementById("percentage").innerText = "percentage: " + percentage.toFixed(2) + "%"
//     }
// // document.getElementById("score").innerHTML = "Score" + score;
// // if(currentQuestion === quiz.length - 1){
// //     showResult();
// // } else {
// //     setTimeout(() => {
// //         goTONext();
// //     }, 1000);

// // }
// // function showResult(){ //Percentage Formula
// //     var totalQuestion = quiz.length
// //     var percentage = ((correctAnswer/totalQuestiom) * 100).toFixed(2)


// //     document.getElementById("quiz-container").innerHTML = 

// //    " <h2>Quiz Finished</h2>",
// //    " <p>Total Questions: ${totalQuestion}</p>"
// //     "<P>Correct Answer: ${correctAnswer}</P>"
// //     "<p>Your Score : ${score}</p>"
// //    " <p>Percentage : ${percentage}%</p>"

// // }
// renderQuestions()
