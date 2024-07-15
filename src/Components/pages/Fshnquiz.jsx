import React from "react";
import { Container } from "react-bootstrap";
import "../pages/quiz.css";
import { Footer } from "../Footer/Footer";
import { addQuizData } from "../../firebase";

const questions = [
  {
    questionText:
      "What type of colors do you prefer in your clothing and surroundings?",
    options: [
      "Bright and bold",
      "Neutral and muted",
      "Pastel and soft",
      "Dark and moody",
    ],
  },
  {
    questionText: "Which type of patterns are you drawn to the most?",
    options: ["Floral", "Geometric", "Stripes", "Solid colors"],
  },
  {
    questionText: "What type of home decor style appeals to you the most?",
    options: [
      "Modern and minimalist",
      "Vintage and antique",
      "Bohemian and eclectic",
      "Rustic and farmhouse",
    ],
  },
  {
    questionText: "Which type of fabrics do you prefer in your clothing?",
    options: [
      "Cotton and linen",
      "Silk and satin",
      "Denim and leather",
      "Velvet and wool",
    ],
  },
  {
    questionText: "Which type of art style do you find most appealing?",
    options: ["Abstract", "Classical", "Pop Art", "Surrealism"],
  },
  {
    questionText: "What is your ideal type of vacation?",
    options: [
      "Beach resort",
      "Historic city tour",
      "Mountain retreat",
      "Urban adventure",
    ],
  },
  {
    questionText: "Which type of music genre resonates with you the most?",
    options: ["Pop", "Classical", "Indie", "Rock"],
  },
  {
    questionText: "What kind of accessories do you usually wear?",
    options: [
      "Statement pieces",
      "Minimalist jewelry",
      "Vintage finds",
      "Handmade and unique items",
    ],
  },
  {
    questionText: "Which type of footwear do you prefer?",
    options: ["Sneakers", "Heels", "Boots", "Sandals"],
  },
  {
    questionText: "Which type of books do you enjoy reading the most?",
    options: [
      "Fiction and fantasy",
      "Non-fiction and biographies",
      "Mystery and thrillers",
      "Romance and drama",
    ],
  },
  // Add more questions here up to 10
];

export const Fshnquiz = () => {
  const handleQuizSubmission = (e) => {
    // Prevent default behaviour, since form submission is handled through JavaScript
    e.preventDefault();

    // Gather the data from the form and store it in an array
    let quizData = new FormData(e.target);
    let submission = [];
    for (let [question, answer] of quizData.entries()) {
      submission.push({
        question,
        answer,
      });
    }
    console.log(submission);

    addQuizData({
      time: new Date(),
      answers: submission,
    })
      .then((result) => {
        // If submission is inserted successfully, notify the user
        if (result.id) {
          console.log(result);
          alert("Response saved successfully!");
          e.target.reset(); // Reset the form
        } else throw result;
      })
      .catch((error) => {
        console.error(error);
        alert(
          "An error occured while submitting the quiz! Make sure that you are connected to the internet."
        );
      });
    return;
  };
  return (
    <>
      <Container>
        <section className="qztop-tier">
          <section className="qz-heading">
            <h1>
              Can't find Your very <em>Own</em>{" "}
            </h1>
            <h1 id="aesthtic"> Aesthetic</h1>
            <h1>
              or your Fashion <em>Vibes</em> ?
            </h1>
            <p>
              Don't worry, we have got You covered. From finding the perfect
              style for you,getting your vibe and fashion matched, its all set.
              We provide a hands-On engaging quize which helps user find out
              their perfect fashion taste, likes,dislikes and most of all get
              the GenZ vibe set. A range of quiz reflecting the diverse
              customers range Myntra acters to.
            </p>
          </section>
          <section className="top-image">
            <img
              className="head-img"
              src="../public/images/quiz1.png"
              alt="mainimg"
            ></img>
          </section>
        </section>
        <section className="main-bod">
          <form onSubmit={handleQuizSubmission} className="quiz-ques">
            <h2>Play And Find Out !!</h2>
            <hr />
            <div className="btn-row">
              <button>Match Vibe & Wardrobe</button>
              <button>Fashion Trivia</button>
              <button>Find Your Aesthetic</button>
            </div>
            <section className="ques-main-part">
              {questions.map((ques, currentQuestion) => (
                <div className="question-section">
                  <div className="question-count">
                    <h4 className="question-text">
                      <span>Ques {[currentQuestion + 1]}: </span>
                      {ques.questionText}
                    </h4>
                  </div>
                  <div className="answer-section">
                    {ques.options.map((option, index) => (
                      <div key={index} className="option-container">
                        <input
                          type="radio"
                          required
                          id={`${currentQuestion}option${index}`}
                          name={ques.questionText}
                          value={option}
                        />
                        <label htmlFor={`${currentQuestion}option${index}`}>
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
            <button className="submit-btn">Submit Your Quiz</button>
          </form>
          <section className="ldr-award">
            <section className="ldrboard">
              <h3>Leaderboard</h3>
              <img src="../images/ldr1.webp" />
              <h3>WEEKLY PRIZES</h3>
              <ol>
                <li>TV led </li>
                <li>Big hamper</li>
                <li>Smartphone</li>
              </ol>
            </section>
          </section>
        </section>
        <Footer />
      </Container>
    </>
  );
};
