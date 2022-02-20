'use strict';

class Guess {
    constructor() {
        this.score = 20;
        this.number = Math.floor(Math.random() * 20) + 1;
        this.high = 0;
    }

    reveal() {
        return this.number;
    }

    resetGame(){
        this.score = 20;
        this.number = Math.floor(Math.random() * 20) + 1;
    }

    testNumber(number){
        if (number === '') {
            //console.log('it is not a number');
            document.querySelector('.message').textContent = '⛔️ No number!';

        } else {
            if (Number(number) === this.number) {
                document.querySelector('.message').textContent = '🎉 Correct Number!';
                document.querySelector('body').setAttribute('style', 'background-color: #60b347');
                document.querySelector('.number').textContent = number;
                document.querySelector('.number').setAttribute('style', 'width: 30rem');
                if (this.high < this.score) {
                    document.querySelector('.highscore').textContent = this.score;
                    this.high = this.score;
                }
            }
            else if (Number(number) < this.number) {
                document.querySelector('.message').textContent = '📉 Too low!';
                this.score--;
                document.querySelector('.score').textContent = this.score;
            }
            else if (Number(number) > this.number) {
                document.querySelector('.message').textContent = '📈 Too high!';
                this.score--;
                document.querySelector('.score').textContent = this.score;
            }
        }
    }

}

let x = new Guess();
//console.log(x.reveal());

document.querySelector('.check').addEventListener(
    'click', function() {
        x.testNumber(document.querySelector('.guess').value);
    });

document.querySelector('.again').addEventListener(
    'click', function() {
        document.querySelector('.score').textContent = '20';
        document.querySelector('body').setAttribute('style', 'background-color: #222');
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').setAttribute('style', 'width: 15rem');
        document.querySelector('.guess').value = "";
        x.resetGame();
        //console.log(x.reveal());
    });