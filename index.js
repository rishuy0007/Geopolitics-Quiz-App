

const quizData = [{
    question: "Which of the following countries is NOT a part of NATO, or the North Atlantic Treaty Organization?",
    a: "Turkey",
    b: "Bulgaria",
    c: "Ukraine",
    d: "Estonia",
    correct: "c",
},
{
    question: "Which of the following is the dominant religion in Latin America?",
    a: "Judaism",
    b: "Protestantism",
    c: "Catholicism",
    d: "Buddhism",
    correct: "c",
},
{
    question: "Who is the current U.S. secretary of state?",
    a: "Hilary Clinton",
    b: "Antony Blinken",
    c: "Mike Pompeo",
    d: "Merrick Garland",
    correct: "b",
},
{
    question: "Who was the prime minister of the United Kingdom in March 2022?  ",
    a: "Theresa May",
    b: "Justin Trudeau",
    c: "Rishi Sunak",
    d: "Scott Morrison",
    correct: "c",
},
{
    question: "Which of the following regions or provinces of China has the highest per capita population of Muslims? ",
    a: "Xinjiang",
    b: "Macau",
    c: "Guangdong",
    d: "Tibet",
    correct: "a",
},
{
    question: "The United States-Mexico-Canada Agreement (USMCA) is a trade agreement that replaces which previous trade agreement? ",
    a: "AUKUS",
    b: "IMF",
    c: "NAFTA",
    d: "KORUS",
    correct: "c",
},
{
    question: "In 2018, the U.S. Embassy in Israel moved from one city to another. Where is it currently located? ",
    a: "NewYork City",
    b: "Jerusalem",
    c: "Haifa",
    d: "Tel Aviv",
    correct: "b",
},
{
    question: "Which of the following is the capital of Afghanistan?",
    a: "Kandahar",
    b: "Tehran",
    c: "Kabul",
    d: "Baghdad",
    correct: "c",
},
{
    question: "Which country in Africa is known for both having the largest population and for being one of the largest oil producers on the continent? ",
    a: "Kenya",
    b: "Nigeria",
    c: "Sudan",
    d: "South Africa",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("quesBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.querySelector("#box").innerHTML = `
    <div class="col">
        <h2 class="w-100"> Congratulations!!, you've scored ${correct} / ${total} </h2><h3>${correct} are right you answered</h3><h3>${incorrect} are wrong you answered</h3>
    </div>
`
}
loadQuestion(index);
