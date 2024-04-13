// масив обектов
let questions = [
    {
        question: "Какой метод JavaScript используется для добавления нового элемента в конец массива?",
        options: ["add", "append", "push", "insert"],
        correctAnswer: "push"
    },
    {
        question: "Как звали первого прагромиста",
        options: ["Ада", "Игорь", "Леха", "Лилипут"],
        correctAnswer: "Ада"
    },
    {
        question: "Кто придумал js",
        options: ["Адага", "Бренданом", "Лируиг", "Автарит"],
        correctAnswer: "Бренданом"
    }
]
let currentQuestion = 0 // текущий вопрос 
let correctAnswer = 0 // пр ответы 


// функция для отображения вопроса варианта ответа
function displayQuestion() {
    let questionElement = document.getElementById("question");
    // размещяем вопрос на станице
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    let optionsElement = document.getElementById("options"); // получиь для размищения кнрогпок
    optionsElement.innerHTML = ""; // очещяет содержитмаоеа блоук 

    // получить массив ответов 
    let optionsArray = questions[currentQuestion].options;

    // создать кнопки с вароиантами ответами  и привизать к ним ФУНКЦИЮ 

    optionsArray.forEach((option) => {
        let button = document.createElement("button");
        optionsElement.append(button);
        button.textContent = option;
        button.classList.add('glow-on-hover')
    })
}

displayQuestion();