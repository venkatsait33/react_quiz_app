import { useState } from "react";

const quizData = [
    {
        question: "What is the capital of Germany?",
        options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
        answer: 0, // Berlin
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 1, // Mars
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3, // Pacific Ocean
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["50°C", "100°C", "150°C", "200°C"],
        answer: 1, // 100°C
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            "Charles Dickens",
            "William Shakespeare",
            "Mark Twain",
            "Leo Tolstoy",
        ],
        answer: 1, // William Shakespeare
    },
    {
        question: "Which is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: 1, // 2
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        answer: 0, // Au
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: 1, // Japan
    },
    {
        question: "Who painted the Mona Lisa?",
        options: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Claude Monet",
        ],
        answer: 2, // Leonardo da Vinci
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: 2, // Canberra
    },
];
const QuizApp = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null); // Tracks selected option
    const [isAnswered, setIsAnswered] = useState(false); // Prevents multiple clicks on one question
    const [answeredQuestions, setAnsweredQuestions] = useState(0); // Tracks number of answered questions

    const selectOption = (index) => {
        if (isAnswered) return; // Prevent re-selection

        setSelectedOptionIndex(index);
        setIsAnswered(true);

        const currentQuestion = quizData[currentQuestionIndex];
        setAnsweredQuestions(answeredQuestions + 1);
        if (currentQuestion.answer === index) {
            setScore(score + 1);
            // if we not wont give option to repeat the same question
            // } else {
            //   setAttempts(attempts + 1);
            // }


            // Move to the next question after showing the feedback
            setTimeout(() => {
                if (currentQuestionIndex < quizData.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                } else {
                    alert(`Quiz finished! Your score is ${score + (currentQuestion.answer === index ? 1 : 0)}`);
                }
                setSelectedOptionIndex(null);
                setIsAnswered(false);
            }, 1000);
        } else {
            setAttempts(attempts + 1);
            setTimeout(() => {
                setSelectedOptionIndex(null);
                setIsAnswered(false);
            }, 1000)
        }
    };

    const loadQuestion = () => {
        const currentQuestion = quizData[currentQuestionIndex];

        return (
            <div className=" flex justify-between border-2 rounded-lg items-center mx-auto h-[300px] w-[800px]">
                <h2 className="border-r-2 h-full p-4 text-2xl">{currentQuestion.question}</h2>
                <div className="flex flex-col gap-2 w-[50%]">
                    {currentQuestion.options.map((option, index) => (
                        <div
                            key={index}
                            className={`option border text-center hover:border-2 hover:bg-stone-500  p-2 m-2`}
                            onClick={() => selectOption(index)}
                            style={{
                                pointerEvents: isAnswered ? "none" : "auto", // Disable further clicks after answer
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const progressPercentage = (score / quizData.length) * 100;
    const unAnsweredQuestions = quizData.length - answeredQuestions;
    return (
        <div className=" flex flex-col h-screen justify-center items-center bg-slate-400 gap-4">
            <h1>Quiz App</h1>
            <div className="flex justify-center items-center gap-6"> <div id="score" className="">Score: {score}</div>
                <div id="attempts">Attempts: {attempts}</div>
            </div>
            <div className="flex justify-center items-center gap-6">
                <p>Total Questions: {quizData.length}</p>
                <p>Answered Questions: {answeredQuestions}</p>
                <p>Unanswered Questions: {unAnsweredQuestions}</p>
            </div>

            <div id="progress" className="w-[80%] mx-auto ">
                <div
                    style={{
                        width: `${progressPercentage}%`,
                        height: "10px",
                        background: "green",
                        margin: "10px 0",
                    }}
                ></div>
                <div id="question" className="w-full">{loadQuestion()}</div>
            </div>


            <button id="retry" className="border-2 p-2 rounded-md  text-center text-xl" onClick={() => window.location.reload()}>
                Retry
            </button>
        </div>
    );
}

export default QuizApp