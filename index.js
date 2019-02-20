const target = document.getElementById('target');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function() {
    // remember start time
    // can we delay this a bit to give the user time to 
    // oriente themselves before things start moving?
    let startTime = Date.now();

    let hit = false;

    target.addEventListener('click', function() {
        hit = true;
    });

    let timer = setInterval(function() {
        // how much time has passed form the start?
        let timePassed = Date.now() - startTime;

        if(timePassed >= 5000 || hit === true) {
            // finish the animation after 5 seconds
            clearInterval(timer);
            return;
        }

        // draw the animation at the momet timePased
        draw(timePassed);

    }, 20);
});

// as timePased goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePased) {
    target.style.left = timePased / 20 + 'px';
    // target.style.top = timePased / 20 + 'px';
}