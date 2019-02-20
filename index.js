const target = document.getElementById('target');
const startButton = document.getElementById('start-button');
const timeRemainingP = document.getElementById('time-remaining');
const hitP = document.getElementById('hit');

const totalTime = 5000;
startButton.addEventListener('click', function() {
    target.hidden = false;
    startButton.hidden = true;
    // remember start time
    let startTime = Date.now();

    let hit = false;

    target.addEventListener('click', function() {
        hit = true;
        timeRemainingP.hidden = true;
        hitP.textContent = 'Hit! You Win';
    });


    let timer = setInterval(function() {
        // how much time has passed form the start?
        let timePassed = Date.now() - startTime;
        const timeRemaining = 5 - Math.floor(timePassed / 1000);
        timeRemainingP.textContent = 'Time Remaining: ' + timeRemaining + ' s';

        if(timePassed >= totalTime) {
            // finish the animation after 5 seconds
            clearInterval(timer);
            target.hidden = true;
            timeRemainingP.hidden = true;
            hitP.textContent = 'You got hit! Game Over';
            return;
        }
        if(hit === true) {
            clearInterval(timer);
            target.hidden = true;
            timeRemainingP.hidden = true;
            return;
        }

        // draw the animation at the momet timePased
        drawX(timePassed);
        drawY(timePassed);

    }, 15);
});

// as timePased goes from 0 to 2000
// left gets values from 0px to 400px
function drawX(timePased) {
    target.style.left = timePased / 20 + 'px';
}

function drawY(timePased) {
    target.style.top = timePased / 100 + 'px';
}