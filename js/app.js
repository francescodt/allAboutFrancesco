

window.addEventListener('load', (event) => {
    'use strict';
    console.log('This is working!');

    // var userName = prompt('Hello! What is your name?');
    // console.log(userName);
    // alert('Hello, ' + userName + '. Welcome to Francesco\'s wonderful and in-progress site.');


    function beginQuestionaire() {
        questionOne();
        questionTwo();
        questionThree();
        questionFour();
        questionFive();
        issueSix();
        //  issueSeven();
        totalpoints();

    }

    var pointsEarned = 0;
    
    var possibleAnswers = ['yes', 'y', 'no', 'n'];

    function questionOne() {

        var questionOne = prompt('Do I enjoy all board games?')
        var answerOne = questionOne.toLowerCase();

        console.log(answerOne);

        while (!possibleAnswers.includes(answerOne)) {
            alert('Try using Yes or No.');
            answerOne = prompt('Do I enjoy all board games?').toLowerCase();
        } if (answerOne === 'yes' || answerOne === 'y') {
            alert('Wrong! I do not enjoy cooperative or competitive cooperative board games.')
        } else if (answerOne === 'no' || answerOne === 'n') {
            alert('Correct! There are tiers to board-game hierarchy, and some are terrible.')
            pointsEarned = pointsEarned + 1;
        }
    }

    function questionTwo() {

        var questionTwo = prompt('Do I have any neices or nephews?')
        var answerTwo = questionTwo.toLowerCase();

        console.log(answerTwo);

        while (!possibleAnswers.includes(answerTwo)) {
            alert('Try using Yes or No.');
            answerTwo = prompt('Do I have any neices or nephews?').toLowerCase();
        } if (answerTwo === 'yes' || answerTwo === 'y') {
            alert('Correct. I have two nephews, a neice and another gender undisclosed family member along the way.')
            pointsEarned = pointsEarned + 1;
        } else if (answerTwo === 'no' || answerTwo === 'n') {
            alert('Wrong, Chachi. Sorry, I mean ' + userName + '. I wish you were right though, I am not a fan of kids. ')
        }
    }

    function questionThree() {

        var questionThree = prompt('Have I been out of the country at least 8 times?!')
        var answerThree = questionThree.toLowerCase();

        console.log(answerThree);

        while (!possibleAnswers.includes(answerThree)) {
            alert('Try using Yes or No.');
            answerThree = prompt('Have I been out of the country at least 8 times?!').toLowerCase();
        } if (answerThree === 'yes' || answerThree === 'y') {
            alert('Correct. Just barely. Also I assume you\'re just guessing with this since the directive was so specific. I\'ve been in a few countries though, but I wouldn\'t say I\'m familiar with them like I am Italy or Canada.')
            pointsEarned = pointsEarned + 1;
        } else if (answerThree === 'no' || answerThree === 'n') {
            alert('Wrong. I\'ve spent some time in Italy, Canada, Spain, and a few other countries that the time spent was much less notable. ')
        }
    }

    function questionFour() {

        var questionFour = prompt('Did I go to at least 12 concerts last year?')
        var answerFour = questionFour.toLowerCase();

        console.log(answerFour);

        while (!possibleAnswers.includes(answerFour)) {
            alert('Try using Yes or No.');
            answerFour = prompt('Did I go to at least 12 concerts last year?').toLowerCase();
        } if (answerFour === 'yes' || answerFour === 'y') {
            alert('Wrong. Thought the specificity would work this time, huh? Not quite. I only attended 11 last year.')
            pointsEarned = pointsEarned + 1;
        } else if (answerFour === 'no' || answerFour === 'n') {
            alert('Correct! Just barely, though. Honestly trying to name them all is difficult as I think about it. Not due to how much I liked or did not like them, but it\'s actually just super difficult to remember all of that. Notables were: Chvrches, Alt-J, Hippo-campus, Atmosphere. ')
        }
    }

    function questionFive() {

        var questionFive = prompt('Is this my 5-year anniversary from when I was diagnosed with cancer? ')
        var answerFive = questionFive.toLowerCase();

        console.log(answerFive);

        while (!possibleAnswers.includes(answerFive)) {
            alert('Try using Yes or No.');
            answerFive = prompt('Is this my 5-year anniversary from when I was diagnosed with cancer? ').toLowerCase();
        } if (answerFive === 'yes' || answerFive === 'y') {
            alert('Word. That means correct, in case you weren\'t sure. Only thing I really liked about it was that it landed on a year that was easy to remember, 2015.')
            pointsEarned = pointsEarned + 1;
        } else if (answerFive === 'no' || answerFive === 'n') {
            alert('Wrong, though I wish it were different. Everything is all good now, and it has brought a lot of awareness to my life. I donate my hair now, and do a lot of volunteer work because of it. ')
        }
    }

    function issueSix() {

        var secretNumber = Math.floor(Math.random() * 10 + 1);
        var guess = '';
        var correct = false;
        console.log(secretNumber)

        for (var i = 0; i < 4; i++) {
            guess = prompt('Guess a number between 1 and 10!');
            guess = parseInt(guess);

            if (guess === secretNumber) {
                alert('Your guess was correct! Great job.');
                correct = !correct;
                pointsEarned = pointsEarned + 1;
                break;
            }
            else if (guess == null) {
                alert('Quitting game. You\'re not fun.');
                break;
            }
            else if (guess < secretNumber) {
                alert('Your guess is too low! Try again.');
            }
            else if (guess > secretNumber) {
                alert('Your guess is too high! Try again.');
            }
        }

        if (!correct) {
            alert('You\'ve guessed too many times! Not sure how you didn\'t get it, but that is okay. You are still weclome here.');
        }

    }

    function issueSeven() {

        var disneyMovies = ['Mulan', 'Moana', 'Hercules',]
        var moviesAnswer = false;
        var j = 0;
        var tries = 6;


        do {
            var questionSeven = prompt('What are the top three animated Disney movies?')
            var answerSeven = questionSeven.toLowerCase();
        } while (j !== 7)
        if (disneyMovies.indexOf(answerSeven) >= 0) {
            alert('You are correct, ' + answerSeven + 'is one of the top three animated Disney movies.');
            j++;
            tries--;
        } else {
            alert('Sorry, try again. You have' + tries + 'remaining to get three correct answers.');

        }
    }

    function totalPoints() {
        alert('You earned' + pointsEarned + '.')
    }



    beginQuestionaire();

    function endingThank() {
        alert('Thanks for taking this questionaire about ME, ' + userName + '.');
    }
    endingThank();

});


// create an element, when hovered a list of all the image sources for each parameter
// html documentcreateelement - element.setattributes (bojack, path to image)
// div id=


//[] Do the point system

//[] wrap everything inside the script loading tag nonsense

//[x] write while statements for questions 1-5 so craig can't break your code
//[] write code so if someone tries to cancel they can leave


// var answerYes = ['yes', 'y', 'Yes', 'Y'];
// var answerNo = ['no', 'n', 'No', 'N'];

// var questionOne = prompt('So, ' + userName + ' are you learning to code?'); 
// if (questionOne == answerYes) {
//     alert('Fantastic! So am I.')
// } else if (questionOne == answerNo) {
//     alert('Begone, nerd!')

// look up how to check array parsing, 



