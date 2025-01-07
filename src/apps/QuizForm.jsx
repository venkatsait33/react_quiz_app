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

const QuizFormApp = () => {
    const [answers, setAnswers] = useState(Array(quizData.length).fill(null)); // Track selected answers
    const [score, setScore] = useState(null); // Score (null means form not submitted yet)
    const [attempts, setAttempts] = useState(0); // Count attempts
    

    // Handle answer selection
    const handleAnswerChange = (questionIndex, selectedOption) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = selectedOption;
        setAnswers(newAnswers);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        let calculatedScore = 0;
        let calculatedAttempts = 0;

        answers.forEach((answer, index) => {
            if (answer === quizData[index].answer) {
                calculatedScore += 1;
            } else if (answer !== null) {
                calculatedAttempts += 1;
            }
        });

        setScore(calculatedScore);
        setAttempts(calculatedAttempts);
    };

    return (
        <div className=" w-full h-full flex flex-col items-center justify-center gap-2">
            <h1>Quiz App</h1>
            {score === null ? (
                <form onSubmit={handleSubmit} className=" border-2 rounded-xl p-4 flex flex-col gap-2">
                    {quizData.map((question, index) => (
                        <div key={index} className=" border border-red-300 rounded-xl p-4 " style={{ marginBottom: "20px" }}>
                            <h3>
                                {index + 1}. {question.question}
                            </h3>
                            {question.options.map((option, optionIndex) => (
                                <div key={optionIndex} className=" flex items-center gap-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={optionIndex}
                                            checked={answers[index] === optionIndex}
                                            onChange={() =>
                                                handleAnswerChange(index, optionIndex)
                                            }
                                        />
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div> 
                    ))}
                    <button type="submit" className=" bg-purple-400 p-2 rounded-md text-white">Submit</button>
                </form>
            ) : (
                <div className=" w-full h-full flex justify-center items-center flex-col gap-4 mx-auto">
                    <h2>Results</h2>
                    <p>Total Questions: {quizData.length}</p>
                    <p>Score: {score}</p>
                    <p>Attempts: {attempts}</p>
                    <button onClick={() => window.location.reload()}>Retry</button>
                </div>
            )}
        </div>
    );
};

export default QuizFormApp;
