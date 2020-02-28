

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
        issueSeven();
        issuePoints();
        endingThank();

    }

    var totalPoints = 0;

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
        } else if (answerOne == null) {
            alert('Quitting game. You\'re not fun.');
        } else if (answerOne === 'no' || answerOne === 'n') {
            alert('Correct! There are tiers to board-game hierarchy, and some are terrible.')
            totalPoints++;
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
            totalPoints++;
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
            totalPoints++;
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
            totalPoints++;
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
            alert('Yep. You got it. Non-Hodgkins Lymphoma Stage 4. A year of chemo wraps that up. Basically I\'m simultaneously the strongest and weakest person you can meet.')
            totalPoints++;
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
                // Below is Ian smith's doing
                correct = !correct;
                totalPoints++;
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
        var disneyMovies = ['mulan', 'moana', 'hercules'];
        var moviesAnswer = false;
        for (var i = 0; i < 6; i++) {
            var moviesMessage = prompt('What is one of the top three animated Disney Movies?').toLowerCase();
            for (var j = 0; j < disneyMovies.length; j++) {
                if (disneyMovies[j] === moviesMessage) {
                    alert('Obviously. Good job though.');
                    moviesAnswer = true;
                    totalPoints++;
                    break;
                }
            }
            if (!moviesAnswer) {
                alert('Nope. I can\'t believe you guessed that.');
            } else {
                break;
            }
        }
        alert('The correct answers were Mulan, Moana, and Hercules.')
    }


    function issuePoints() {
        alert('You earned ' + totalPoints + ' out of 7 total points.');
    }

    function endingThank() {
        alert('Thanks for taking this questionaire about ME, ' + userName + '.');
    }

    beginQuestionaire();


});


