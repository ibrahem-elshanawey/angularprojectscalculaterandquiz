import { Component } from '@angular/core';
interface Answer {
  text: string;
  correct: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  questions: Question[] = [
    {
      question: 'What are you learning right now?',
      answers: [
        { text: 'JavaScript', correct: true },
        { text: 'HTML5', correct: false },
        { text: 'CSS3', correct: false },
      ]
    },
    {
      question: 'Do you like winter?',
      answers: [
        { text: 'YES', correct: true },
        { text: 'NO', correct: false },
      ]
    },
    {
      question: 'Do you like JS?',
      answers: [
        { text: 'Indeed', correct: true },
        { text: 'NO', correct: false },
        { text: 'KINDA', correct: false },
        { text: 'NOT REAL', correct: false },
      ]
    }
  ];

  currentQuestion: Question | undefined;
  shuffledQuestions: Question[] = [];
  currentQuestionIndex: number = 0;
  hideQuestionContainer: boolean = true;
  hideNextButton: boolean = true;
  iscorrect: boolean | null = null;
  start='start'
  startQuiz() {
    this.currentQuestionIndex = 0;
    this.shuffledQuestions = [...this.questions].sort(() => Math.random() - 0.5);
    this.hideQuestionContainer = false;
    this.hideNextButton = true;
    this.nextQuestion();
  }

  nextQuestion() {
    this.resetState();
    this.currentQuestion = this.shuffledQuestions[this.currentQuestionIndex];
    this.currentQuestionIndex++;
  }

  selectAnswer(correct: boolean) {
    this.iscorrect = correct;
    this.setStatusClass(document.body, correct);
    if (this.shuffledQuestions.length > this.currentQuestionIndex) {
      this.hideNextButton = false;
    } else {
      this.currentQuestion = undefined;
      this.hideQuestionContainer = true;
    }
  }

  setStatusClass(element: HTMLElement, correct: boolean) {
    this.clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }

  clearStatusClass(element: HTMLElement) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }

  resetState() {
    this.clearStatusClass(document.body);
    this.hideNextButton = true;
    this.iscorrect = null;
    this.start='Restart'
  }
}
