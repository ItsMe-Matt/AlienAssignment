moveTimer = null;
        currentStep = 14;
        alienCounter = 0;
        isReverse = false;
        moveTimer = null;


        function takeAStep()
            {
                var myAlien = document.getElementById("al");
                // .src is in this format: "images/alien/alienrwalk14.gif"
                currentStep++;   // adds one to currentStep

                if(currentStep > 30)
                {
                    currentStep = 0;
                }

                myAlien.src = "images/alien/alienrwalk" + currentStep + ".gif";
            }
        function takeAStepBack()
            {
                var myAlien = document.getElementById("al");
                currentStep++;

                if(currentStep > 30)
                {
                    currentStep = 0;
                }

                myAlien.src = "images/alien/alienlwalk" + currentStep + ".gif";
            }

        function moveRight()
            {
                var myAlien = document.getElementById("al");

                if (parseInt(myAlien.style.left) >= window.screen.width - 80) {
                    isReverse = true;
                }
                if (isReverse == true) {
                    takeAStepBack();
                    myAlien.style.left = parseInt(myAlien.style.left) - 1 + "px";
                }
                if (parseInt(myAlien.style.left) <=  0)
                {
                    isReverse = false;
                }
                if (isReverse == false)
                {
                    takeAStep();
                    myAlien.style.left = parseInt(myAlien.style.left) + 1 + "px"
                }
            }

        function stopMoving()
            {
                if(moveTimer != null)
                {
                    isReverse = false;
                    clearInterval(moveTimer);
                    moveTimer = null;
                }
            }
        
// When the button is clicked, run buttonClicked

        function buttonClicked() {
            // if storage is in the textbox, it creates a link that takes you to storage.html
        // Alien Stuff
        if (textbox.value == "alien") 
            {
                if (alienCounter == 0) 
                {
                    var Alien = document.createElement("img");
                    Alien.src = "images/alien/alienrwalk14.gif";
                    Alien.id = "al";
                    Alien.style.display = "";
                    Alien.style.left = "50px";
                    Alien.style.position = "absolute";
                    document.body.appendChild(Alien);
                    var myAlien = document.getElementById("al");
                    alienCounter++;
                }
            }
            if (textbox.value == "walk") 
            {
                var myAlien = document.getElementById("al")        
                console.log(textbox.value)
                moveTimer = setInterval(moveRight, 100)   
            }
            if (textbox.value == "run") 
            {
                var myAlien = document.getElementById("al")       
                console.log(textbox.value)

                moveTimer = setInterval(moveRight, 10)
            }
            if (textbox.value == "stop")
            {
                stopMoving()
            }
            if (textbox.value == "bye") 
            {
                var myAlien = document.getElementById("al")
                console.log("bye")
                myAlien.style.display = "none"
                alienCounter = 0
            }
        }