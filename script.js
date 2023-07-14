const questionEle = document.getElementById('question');
const selectAnswer = document.getElementById('answer-btn'); 
const result = document.getElementById('result');
const answer1 = document.querySelector('#ans1');
const answer2 = document.querySelector('#ans2');
const answer3 = document.querySelector('#ans3');
const answer4 = document.querySelector('#ans4');
let ANS = (answer1,answer2,answer3,answer4);

// to display timer in html
let timer = document.querySelector(".countdowntimer");


let questionindex = 0;
let score = 0;
let secondsleft = 00; 

let QandA = { //arrays of objects that contains Questions, answers and correct answer --}
    Q1 = {
        Quest: "Who is the all-time scoring leader in the NBA?)",
        ans:("Lebron James", "Larry Bird", "Micheal Jordan", "Karrem Abdul-Jabbar"),
        correctanswer: "Lebron James"
    },
    Q2 = { 
        Quest: "Who is the all-time lead rebounder in the NBA?)",
        ans: ("Elvin Hayes", "Bill Russell", "Walt Chamberland" , " Kevin Garrnet"),
        correctanswer: "Walt Chamberland"
    },
    Q3 = {
        Quest: "Who is the all-time assist leader in the NBA?",
        ans: ("Chris Paul", "Rajon Rondo", "Ervin 'Magic' Johnson" , "John Stockton"),
        correctanswer: "John Stockton",
    
    },
    Q4 = {
        Quest: "Who was the M.V.P season 2003/04 in the NBA?)",
        ans:("Kobe Bryant", "Tim Duncan", "Tracy Mcgrady", "Kevin Garrnet"),
        correctanswer: "Kevin Garnett"
    },
     Q5 = {
            Quest: "Who won the NBA Championship in 2003?)",
            ans:("Detroit Pistons", "New York Knicks", "Boston Celtics", "Chicago Bulls"),
            correctanswer: "Detroit Pistons"
        },
     Q6 = {
                Quest: "What Year was Micheal Jordan drafted in the NBA?)",
                ans:("1987", "1984", "1985", "1982"),
                correctanswer: "1984"
         },
      Q7 = { 
                    Quest: "Who won the dunk contest in 2015?)",
                    ans:("Aaron Gordon", "Zack Lavine", "Demar Derozen", "Chris Bosh"),
                    correctanswer: "Zack Lavine"
          },
      Q8 = {
                        Quest: "What team drafted Andrew Wiggins?)",
                        ans:("Minneasota Timberwolves", "Golden State Warriors", "New York Knicks ", "Brookyln Nets"),
                        correctanswer: "Minneasota Timberwolves"
          },
       Q9 = {
                            Quest: "How many championship does Micheal Jordan has?)",
                            ans:("6 rings", "5 rings", "10 rings", "7 rings"),
         correctanswer: "6 rings"
          },
       Q10 = {
         Quest: "Who was the youngest player to be ever drafed?)",
         ans:("Andrew Bynum", "Kobe Bryant", "Lebron James", "Kevin Garrnet"),
        correctanswer: "Andrew Bynum"
       },
    }

       function DisplayQuestionAnswers() {
           let Qnum = questionindex + 1;
           questionEle.textContent = QandA[questionindex].ans[i];
       }
    

    // setTimeout(function () {
    //     result.fadeout("slow");
    // },

    selectAnswer.addEventListener("click" , function (event) {
        let username = event.target;
        if(questionindex<QandA.length){
            event.stopPropagation();
            score++;
            result.style.color = "green";
            result.#textContent = "correct!!";
         } else {
        result.style.color = "red";
        result.textContent = "Wrong!!";
        secondsleft - 10;
    }
    questionindex++;
    DisplayQuestionAnswers();
    console.log(score);
},
 else {
  prompt("Enter your name");
 }


function startquiz() {
    setTimer();
    DisplayQuestionAnswers();
},