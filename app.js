

window.addEventListener('load', () => {


    const sound = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    //Working with sound

    pads.forEach((pad, index) => {

        pad.addEventListener("click", function () {
            sound[index].currentTime = 0;
            sound[index].play();
            createBubble(index);
        });
    });


    const createBubble = index => {

        //Create bubbles
        const bubble = document.createElement("div");

        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        });
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});

//Azizul Hakim Tareq
//Computer Science & Engineering
//North South University
