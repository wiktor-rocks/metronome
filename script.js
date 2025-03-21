var bpm = 60;

var playing = false;


initButtons();

function startClick() {
    playing = true;

    startStop.innerHTML = "Stop";
    intervalID = setInterval(function () {
        var clonedClick = new Audio(click.src);
        clonedClick.volume = volumeRange.value;
        clonedClick.play();
        console.log("click");

        clonedClick.addEventListener("ended", () => {
            clonedClick = null;
        });


    }, (60 / bpm) * 1000);
}

function stopClick() {
    clearInterval(intervalID);
    playing = false;
    startStop.innerHTML = "Start";
    console.log("stopped");
}


function restartClick(){

    stopClick();
    startClick();
}

function initButtons() {

    const plus5 = document.getElementById("plus5");
    const minus5 = document.getElementById("minus5");

    const plus1 = document.getElementById("plus1");
    const minus1 = document.getElementById("minus1");

    const startStop = document.getElementById("startStop");

    const click = document.getElementById("click");

    const bpmDisplay = document.getElementById("bpmDisplay");

    const volumeRange = document.getElementById("volumeRange");

    function clamp(value, min, max){
        return Math.min(Math.max(value, min), max);
    }


    function alterBpm(value) {

        bpm += value;
        bpm = clamp(bpm,30,300);
        bpmDisplay.innerHTML = bpm;
    }




    startStop.addEventListener("click", () => {
        if (!playing) {
            clonedClick = new Audio(click.src);
            clonedClick.play();
            console.log("click");
            
            clonedClick.addEventListener("ended", () => {
                clonedClick = null;
            });
        
            startClick();
        }

        else if (playing) {
            stopClick();
        }

    });


    plus5.addEventListener("click", () => {

        alterBpm(5);

        if(playing){

        restartClick();
        }
    });

    minus5.addEventListener("click", () => {
        alterBpm(-5);
        if(playing){

            restartClick();
            }
    });


    plus1.addEventListener("click", () => {
        alterBpm(1);
        if(playing){

            restartClick();
            }
    });

    minus1.addEventListener("click", () => {
        alterBpm(-1);
        if(playing){

            restartClick();
            }
    });


    // Keyboard controls 

    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        if (event.code === "Space") {
            startStop.click();
        }
    });

    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        if (event.code === "ArrowLeft") {
            minus1.click();

        }
    });

    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        if (event.code === "ArrowRight") {
            plus1.click();

        }
    });

    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        if (event.code === "ArrowDown") {
            minus5.click();

        }
    });

    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        if (event.code === "ArrowUp") {
            plus5.click();

        }
    });


}

