// On page load JQuery script hides certain html elements from the page. 
$(document).ready(function(){
    // Sets the elements to hide.
    $('#MainStage').hide();
    $('#time').hide();
    $('#levelSelect').hide();
    $('#gameOver').hide(); 
});

var time = 0;
// These variables have all been set to 1000 becuase these variables are compared to the actual value the user got. If these were set to 0 then the user would never beat this time so I set them to a time that the user would always beat the game under. 
var time1_1 = 1000;
var time2_2 = 1000;
var time3_3 = 1000;
var time4_4 = 1000;
var time5_5 = 1000;
var time6_6 = 1000;
var time7_7 = 1000;
var time8_8 = 1000;
var time9_9 = 1000;
var time10_10 = 1000;
var time11_11 = 1000;
var time12_12 = 1000;


// This function runs when all of the shapes on the screen are clicked.
function gameOver(){
    // It is responsible for hiding and showing html elements.
    $('#gameOver').hide(); 
    $('#levelSelect').show();
    $('#content').show();
    time = 0;
}

// This is run when the user clickes play after the first screen they see.
function startScreen(){
    $('#start').hide();  
    $('#levelSelect').show();
}

// This function is responsible for everything for level 1.
function level1(){
    
    // Sets time to 0.
    time = 0;
    $('#MainStage').show();
    $('#time').show();
    $('#content').hide();  
    // Creates a variable called timer1 and then creates a setInterval method that adds 1 to time every 1000 milli seconds.
    var timer1 = setInterval(function() { time++; }, 1000); 
    
    //  Runs a set interval method that will update HTML text with the latest value of time every 1000 milli seconds.  
    setInterval(function() { document.getElementById("time").innerHTML = time; }, 1000); 
    
    var shapes1 = 1;
    
    // Craetes a new stage with a HTML canvas called MainStage.
    stage = new createjs.Stage("MainStage");
    // Creates a new createjs shape called shape1.
    shape1 = new createjs.Shape();
    // Will make shape1 a red circle which will appear at 0,0 on the canvas and have a radius of 40 pixels. 
    shape1.graphics.beginFill("red").drawCircle(0, 0, 40);
    // Adds shape1 to the canvas.
    stage.addChild(shape1);
    
    // Creates a createjs ticker which is responsible for moving an element 60fps.
    createjs.Ticker.addEventListener("tick", handleTick);
    // Sets the frames per second value for the ticker to 60 to ensure smooth movement. 
    createjs.Ticker.setFPS(60);

    // Will add an event listener method that will run function one() every time the mouse is clicked down.
    shape1.addEventListener("mousedown", one);
    function one(event){
        // Will remove shape1 from the canvas.
        stage.removeAllChildren(shape1);
        // Will deduct 1 from shapes1 variable.
        shapes1 --;
        // Will stop running the setInterval method timer1.
        clearInterval(timer1);
        // Will run the function check1.
        check1();
    }
    
    // Is responsible for dealing with the tick. 
    function handleTick() {
        // Will declare where on the x axis the shape will finish.
        shape1.x += 20;
        // Will declare where on the y axis the shape will finish.
        shape1.y += 20;
        // When the shape leaves the canvas it will move to the cordinates 0,0.
        if (shape1.x > stage.canvas.width) { 
            shape1.x = 0; 
            shape1.y = 0;
        };
        // Will update the stage at the speed of 60fps with the new position of the 
        stage.update();
    };
    
    // Is responsible for checking to see if there are any shapes left on the canvas. 
    function check1(){
        // Checks to see is shapes equal to 0.
        if(shapes1 == 0){
            // Checks to see if time1_1 less than the last games time.
            if(time < time1_1){
                time1_1 = time;
            };
            // Will find a html element called score1 and then set it to tell you your current high score.
            document.getElementById("score1").innerHTML = "Best Time: " + time1_1; 
            $('#MainStage').hide();
            $('#time').hide();
            $('#gameOver').show();
            $('#content').show();
            $('#levelSelect').hide();
            // Will set the html element yourScore to your last game score.
            document.getElementById("yourScore").innerHTML = "Your time was: " + time;
            // Will find a html element called highScore and then set it to tell you your current high score.
            document.getElementById("highScore").innerHTML = "Your best time is: " + time1_1;
            // Will set the value of a html element called time to the variable time.
            document.getElementById("time").innerHTML = time;
            // Will stop the tick from running.
            createjs.Ticker.removeEventListener("tick", handleTick);
        };   
    }  
};


function level2(){
    
    time = 0;
    $('#MainStage').show();
    $('#time').show();
    $('#content').hide();
    
    var timer1 = setInterval(function() { time++; console.log("hi", time); }, 1000); 
    
    setInterval(function() { document.getElementById("time").innerHTML = time; }, 1000); 
    
    var shapes1 = 2;
    
    stage = new createjs.Stage("MainStage");
    shape1 = new createjs.Shape();
    shape1.graphics.beginFill("red").drawCircle(0, 300, 40);
    shape1.x = shape1.y = 50;
    stage.addChild(shape1);
    
    shape2 = new createjs.Shape();
    shape2.graphics.beginFill("red").drawCircle(0, 0, 40);
    shape2.x = shape2.y = 60;
    stage.addChild(shape2);
    
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    

    shape1.addEventListener("mousedown", one);
    function one(event){
        stage.removeChild(shape1);
        shapes1 --;
        check1();
    }
    shape2.addEventListener("mousedown", two);
    function two(event){
        stage.removeChild(shape2);
        shapes1 --;
        check1();
    }
    
    
    function handleTick() {
        shape1.x += 20;
        shape1.y += 5;
        if (shape1.x > stage.canvas.width) { 
            shape1.x = 0; 
            shape1.y = 0;
        };
        shape2.x += 5;
        shape2.y += 5;
        if (shape2.x > stage.canvas.width) { 
            shape2.x = 0; 
            shape2.y = 0;
        };
        stage.update();
    };
    
    function check1(){
        if(shapes1 == 0){
            if(time < time2_2){
                time2_2 = time;
            };
            clearInterval(timer1);
            document.getElementById("score2").innerHTML = "Best Time: " + time2_2;
            $('#MainStage').hide();
            $('#time').hide();
            $('#gameOver').show();
            $('#content').show();
            $('#levelSelect').hide();
            document.getElementById("yourScore").innerHTML = "Your time was: " + time;
            document.getElementById("highScore").innerHTML = "Your best time is: " + time2_2;
            createjs.Ticker.removeEventListener("tick", handleTick);
        };   
    }  
};


function level3(){
    
    time = 0;
    $('#MainStage').show();
    $('#time').show();
    $('#content').hide();
    
    var timer1 = setInterval(function() { time++; console.log("hi", time); }, 1000); 
    
    setInterval(function() { document.getElementById("time").innerHTML = time; }, 1000); 
    
    var shapes1 = 2;
    
    stage = new createjs.Stage("MainStage");
    shape1 = new createjs.Shape();
    shape1.graphics.beginFill("red").drawCircle(0, 0, 40);
    shape1.x = shape1.y = 50;
    stage.addChild(shape1);
    
    shape2 = new createjs.Shape();
    shape2.graphics.beginFill("red").drawCircle(0, 0, 40);
    shape2.x = shape2.y = 60;
    stage.addChild(shape2);
    
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    

    shape1.addEventListener("mousedown", one);
    function one(event){
        stage.removeChild(shape1);
        shapes1 --;
        check1();
    }
    shape2.addEventListener("mousedown", two);
    function two(event){
        stage.removeChild(shape2);
        shapes1 --;
        check1();
    }
    
    
    function handleTick() {
        shape1.x += 10;
        shape1.y += 15;
        if (shape1.x > stage.canvas.width) { 
            shape1.x = 0; 
            shape1.y = 0;
        };
        shape2.x += 20;
        shape2.y += 10;
        if (shape2.x > stage.canvas.width) { 
            shape2.x = 0; 
            shape2.y = 0;
        };
        stage.update();
    };
    
    function check1(){
        if(shapes1 == 0){
            if(time < time3_3){
                time3_3 = time;
            };
            clearInterval(timer1);
            document.getElementById("score3").innerHTML = "Best Time: " + time3_3;
            $('#MainStage').hide();
            $('#time').hide();
            $('#gameOver').show();
            $('#content').show();
            $('#levelSelect').hide();
            document.getElementById("yourScore").innerHTML = "Your time was: " + time;
            document.getElementById("highScore").innerHTML = "Your best time is: " + time3_3;
            createjs.Ticker.removeEventListener("tick", handleTick);
        };   
    }  
};


function level4(){
    
    time = 0;
    $('#MainStage').show();
    $('#time').show();
    $('#content').hide();
    
    var timer1 = setInterval(function() { time++; console.log("hi", time); }, 1000); 
    
    setInterval(function() { document.getElementById("time").innerHTML = time; }, 1000); 
    
    var shapes1 = 2;
    
    stage = new createjs.Stage("MainStage");
    shape1 = new createjs.Shape();
    shape1.graphics.beginFill("red").drawCircle(0, 200, 40);
    shape1.x = shape1.y = 50;
    stage.addChild(shape1);
    
    shape2 = new createjs.Shape();
    shape2.graphics.beginFill("red").drawCircle(40, 0, 40);
    shape2.x = shape2.y = 60;
    stage.addChild(shape2);
    
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    

    shape1.addEventListener("mousedown", one);
    function one(event){
        stage.removeChild(shape1);
        shapes1 --;
        check1();
    }
    shape2.addEventListener("mousedown", two);
    function two(event){
        stage.removeChild(shape2);
        shapes1 --;
        check1();
    }
    
    
    function handleTick() {
        shape1.x += 20;
        shape1.y += 5;
        if (shape1.x > stage.canvas.width) { 
            shape1.x = 0; 
            shape1.y = 0;
        };
        shape2.x += 5;
        shape2.y += 5;
        if (shape2.x > stage.canvas.width) { 
            shape2.x = 0; 
            shape2.y = 0;
        };
        stage.update();
    };
    
    function check1(){
        if(shapes1 == 0){
            if(time < time4_4){
                time4_4 = time;
            };
            clearInterval(timer1);
            document.getElementById("score4").innerHTML = "Best Time: " + time4_4;
            $('#MainStage').hide();
            $('#time').hide();
            $('#gameOver').show();
            $('#content').show();
            $('#levelSelect').hide();
            document.getElementById("yourScore").innerHTML = "Your time was: " + time;
            document.getElementById("highScore").innerHTML = "Your best time is: " + time4_4;
            createjs.Ticker.removeEventListener("tick", handleTick);
        };   
    }  
};


function level5(){
    
    time = 0;
    $('#MainStage').show();
    $('#time').show();
    $('#content').hide();
    
    var timer1 = setInterval(function() { time++; console.log("hi", time); }, 1000); 
    
    setInterval(function() { document.getElementById("time").innerHTML = time; }, 1000); 
    
    var shapes1 = 2;
    
    stage = new createjs.Stage("MainStage");
    shape1 = new createjs.Shape();
    shape1.graphics.beginFill("red").drawCircle(0, 200, 40);
    shape1.x = shape1.y = 50;
    stage.addChild(shape1);
    
    shape2 = new createjs.Shape();
    shape2.graphics.beginFill("red").drawCircle(40, 0, 40);
    shape2.x = shape2.y = 60;
    stage.addChild(shape2);
    
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    

    shape1.addEventListener("mousedown", one);
    function one(event){
        stage.removeChild(shape1);
        shapes1 --;
        check1();
    }
    shape2.addEventListener("mousedown", two);
    function two(event){
        stage.removeChild(shape2);
        shapes1 --;
        check1();
    }
    
    
    function handleTick() {
        shape1.x += 20;
        shape1.y += 20;
        if (shape1.x > stage.canvas.width) { 
            shape1.x = 0; 
            shape1.y = 0;
        };
        shape2.x += 30;
        shape2.y += 30;
        if (shape2.x > stage.canvas.width) { 
            shape2.x = 0; 
            shape2.y = 0;
        };
        stage.update();
    };
    
    function check1(){
        if(shapes1 == 0){
            if(time < time5_5){
                time5_5 = time;
            };
            clearInterval(timer1);
            document.getElementById("score5").innerHTML = "Best Time: " + time5_5;
            $('#MainStage').hide();
            $('#time').hide();
            $('#gameOver').show();
            $('#content').show();
            $('#levelSelect').hide();
            document.getElementById("yourScore").innerHTML = "Your time was: " + time;
            document.getElementById("highScore").innerHTML = "Your best time is: " + time5_5;
            createjs.Ticker.removeEventListener("tick", handleTick);
        };   
    }  
};


function level6(){
    
    time = 0;
    $('#MainStage').show();
    $('#time').show();
    $('#content').hide();
    
    var timer1 = setInterval(function() { time++; console.log("hi", time); }, 1000); 
    
    setInterval(function() { document.getElementById("time").innerHTML = time; }, 1000); 
    
    var shapes1 = 2;
    
    stage = new createjs.Stage("MainStage");
    shape1 = new createjs.Shape();
    shape1.graphics.beginFill("red").drawCircle(0, 30, 40);
    shape1.x = shape1.y = 60;
    stage.addChild(shape1);
    
    shape2 = new createjs.Shape();
    shape2.graphics.beginFill("red").drawCircle(40, 0, 40);
    shape2.x = shape2.y = 60;
    stage.addChild(shape2);
    
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    

    shape1.addEventListener("mousedown", one);
    function one(event){
        stage.removeChild(shape1);
        shapes1 --;
        check1();
    }
    shape2.addEventListener("mousedown", two);
    function two(event){
        stage.removeChild(shape2);
        shapes1 --;
        check1();
    }
    
    
    function handleTick() {
        shape1.x += 10;
        shape1.y += 10;
        if (shape1.x > stage.canvas.width) { 
            shape1.x = 0; 
            shape1.y = 0;
        };
        shape2.x += 5;
        shape2.y += 20;
        if (shape2.x > stage.canvas.width) { 
            shape2.x = 0; 
            shape2.y = 0;
        };
        stage.update();
    };
    
    function check1(){
        if(shapes1 == 0){
            if(time < time6_6){
                time6_6 = time;
            };
            clearInterval(timer1);
            document.getElementById("score6").innerHTML = "Best Time: " + time6_6;
            $('#MainStage').hide();
            $('#time').hide();
            $('#gameOver').show();
            $('#content').show();
            $('#levelSelect').hide();
            document.getElementById("yourScore").innerHTML = "Your time was: " + time;
            document.getElementById("highScore").innerHTML = "Your best time is: " + time6_6;
            createjs.Ticker.removeEventListener("tick", handleTick);
        };   
    }  
};


function level7(){
    
    time = 0;
    $('#MainStage').show();
    $('#time').show();
    $('#content').hide();
    
    var timer1 = setInterval(function() { time++; console.log("hi", time); }, 1000); 
    
    setInterval(function() { document.getElementById("time").innerHTML = time; }, 1000); 
    
    var shapes1 = 2;
    
    stage = new createjs.Stage("MainStage");
    shape1 = new createjs.Shape();
    shape1.graphics.beginFill("red").drawCircle(0, 200, 40);
    shape1.x = shape1.y = 60;
    stage.addChild(shape1);
    
    shape2 = new createjs.Shape();
    shape2.graphics.beginFill("red").drawCircle(40, 0, 40);
    shape2.x = shape2.y = 60;
    stage.addChild(shape2);
    
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    

    shape1.addEventListener("mousedown", one);
    function one(event){
        stage.removeChild(shape1);
        shapes1 --;
        check1();
    }
    shape2.addEventListener("mousedown", two);
    function two(event){
        stage.removeChild(shape2);
        shapes1 --;
        check1();
    }
    
    
    function handleTick() {
        shape1.x += 20;
        shape1.y += 5;
        if (shape1.x > stage.canvas.width) { 
            shape1.x = 0; 
            shape1.y = 0;
        };
        shape2.x += 5;
        shape2.y += 20;
        if (shape2.x > stage.canvas.width) { 
            shape2.x = 0; 
            shape2.y = 0;
        };
        stage.update();
    };
    
    function check1(){
        if(shapes1 == 0){
            if(time < time7_7){
                time7_7 = time;
            };
            clearInterval(timer1);
            document.getElementById("score7").innerHTML = "Best Time: " + time7_7;
            $('#MainStage').hide();
            $('#time').hide();
            $('#gameOver').show();
            $('#content').show();
            $('#levelSelect').hide();
            document.getElementById("yourScore").innerHTML = "Your time was: " + time;
            document.getElementById("highScore").innerHTML = "Your best time is: " + time7_7;
            createjs.Ticker.removeEventListener("tick", handleTick);
        };   
    }  
};


function level8(){
    
    time = 0;
    $('#MainStage').show();
    $('#time').show();
    $('#content').hide();
    
    var timer1 = setInterval(function() { time++; console.log("hi", time); }, 1000); 
    
    setInterval(function() { document.getElementById("time").innerHTML = time; }, 1000); 
    
    var shapes1 = 3;
    
    stage = new createjs.Stage("MainStage");
    shape1 = new createjs.Shape();
    shape1.graphics.beginFill("red").drawCircle(0, 200, 40);
    shape1.x = shape1.y = 60;
    stage.addChild(shape1);
    
    shape2 = new createjs.Shape();
    shape2.graphics.beginFill("red").drawCircle(40, 0, 40);
    shape2.x = shape2.y = 60;
    stage.addChild(shape2);
    
    shape3 = new createjs.Shape();
    shape3.graphics.beginFill("red").drawCircle(10, 0, 40);
    shape3.x = shape3.y = 60;
    stage.addChild(shape3);
    
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    

    shape1.addEventListener("mousedown", one);
    function one(event){
        stage.removeChild(shape1);
        shapes1 --;
        check1();
    }
    shape2.addEventListener("mousedown", two);
    function two(event){
        stage.removeChild(shape2);
        shapes1 --;
        check1();
    }
    shape3.addEventListener("mousedown", three);
    function three(event){
        stage.removeChild(shape3);
        shapes1 --;
        check1();
    }
    
    
    function handleTick() {
        shape1.x += 20;
        shape1.y += 5;
        if (shape1.x > stage.canvas.width) { 
            shape1.x = 0; 
            shape1.y = 0;
        };
        shape2.x += 5;
        shape2.y += 20;
        if (shape2.x > stage.canvas.width) { 
            shape2.x = 0; 
            shape2.y = 0;
        };
        shape3.x += 30;
        shape3.y += 20;
        if (shape3.x > stage.canvas.width) { 
            shape3.x = 0; 
            shape3.y = 0;
        };
        stage.update();
    };
    
    function check1(){
        if(shapes1 == 0){
            if(time < time8_8){
                time8_8 = time;
            };
            clearInterval(timer1);
            document.getElementById("score8").innerHTML = "Best Time: " + time8_8;
            $('#MainStage').hide();
            $('#time').hide();
            $('#gameOver').show();
            $('#content').show();
            $('#levelSelect').hide();
            document.getElementById("yourScore").innerHTML = "Your time was: " + time;
            document.getElementById("highScore").innerHTML = "Your best time is: " + time8_8;
            createjs.Ticker.removeEventListener("tick", handleTick);
        };   
    }  
};


function level9(){
    
    time = 0;
    $('#MainStage').show();
    $('#time').show();
    $('#content').hide();
    
    var timer1 = setInterval(function() { time++; console.log("hi", time); }, 1000); 
    
    setInterval(function() { document.getElementById("time").innerHTML = time; }, 1000); 
    
    var shapes1 = 3;
    
    stage = new createjs.Stage("MainStage");
    shape1 = new createjs.Shape();
    shape1.graphics.beginFill("red").drawCircle(0, 200, 40);
    shape1.x = shape1.y = 60;
    stage.addChild(shape1);
    
    shape2 = new createjs.Shape();
    shape2.graphics.beginFill("red").drawCircle(40, 0, 40);
    shape2.x = shape2.y = 60;
    stage.addChild(shape2);
    
    shape3 = new createjs.Shape();
    shape3.graphics.beginFill("red").drawCircle(0, 0, 40);
    shape3.x = shape3.y = 60;
    stage.addChild(shape3);
    
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    

    shape1.addEventListener("mousedown", one);
    function one(event){
        stage.removeChild(shape1);
        shapes1 --;
        check1();
    }
    shape2.addEventListener("mousedown", two);
    function two(event){
        stage.removeChild(shape2);
        shapes1 --;
        check1();
    }
    shape3.addEventListener("mousedown", three);
    function three(event){
        stage.removeChild(shape3);
        shapes1 --;
        check1();
    }
    
    
    function handleTick() {
        shape1.x += 20;
        shape1.y += 5;
        if (shape1.x > stage.canvas.width) { 
            shape1.x = 0; 
            shape1.y = 0;
        };
        shape2.x += 5;
        shape2.y += 20;
        if (shape2.x > stage.canvas.width) { 
            shape2.x = 0; 
            shape2.y = 0;
        };
        shape3.x += 10;
        shape3.y += 15;
        if (shape3.x > stage.canvas.width) { 
            shape3.x = 0; 
            shape3.y = 0;
        };
        stage.update();
    };
    
    function check1(){
        if(shapes1 == 0){
            if(time < time9_9){
                time9_9 = time;
            };
            clearInterval(timer1);
            document.getElementById("score9").innerHTML = "Best Time: " + time9_9;
            $('#MainStage').hide();
            $('#time').hide();
            $('#gameOver').show();
            $('#content').show();
            $('#levelSelect').hide();
            document.getElementById("yourScore").innerHTML = "Your time was: " + time;
            document.getElementById("highScore").innerHTML = "Your best time is: " + time9_9;
            createjs.Ticker.removeEventListener("tick", handleTick);
        };   
    }  
};


function level10(){
    
    time = 0;
    $('#MainStage').show();
    $('#time').show();
    $('#content').hide();
    
    var timer1 = setInterval(function() { time++; console.log("hi", time); }, 1000); 
    
    setInterval(function() { document.getElementById("time").innerHTML = time; }, 1000); 
    
    var shapes1 = 3;
    
    stage = new createjs.Stage("MainStage");
    shape1 = new createjs.Shape();
    shape1.graphics.beginFill("red").drawCircle(20, 50, 40);
    shape1.x = shape1.y = 60;
    stage.addChild(shape1);
    
    shape2 = new createjs.Shape();
    shape2.graphics.beginFill("red").drawCircle(40, 0, 40);
    shape2.x = shape2.y = 60;
    stage.addChild(shape2);
    
    shape3 = new createjs.Shape();
    shape3.graphics.beginFill("red").drawCircle(0, 0, 40);
    shape3.x = shape3.y = 60;
    stage.addChild(shape3);
    
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    

    shape1.addEventListener("mousedown", one);
    function one(event){
        stage.removeChild(shape1);
        shapes1 --;
        check1();
    }
    shape2.addEventListener("mousedown", two);
    function two(event){
        stage.removeChild(shape2);
        shapes1 --;
        check1();
    }
    shape3.addEventListener("mousedown", three);
    function three(event){
        stage.removeChild(shape3);
        shapes1 --;
        check1();
    }
    
    
    function handleTick() {
        shape1.x += 20;
        shape1.y += 5;
        if (shape1.x > stage.canvas.width) { 
            shape1.x = 0; 
            shape1.y = 0;
        };
        shape2.x += 5;
        shape2.y += 20;
        if (shape2.x > stage.canvas.width) { 
            shape2.x = 0; 
            shape2.y = 0;
        };
        shape3.x += 10;
        shape3.y += 15;
        if (shape3.x > stage.canvas.width) { 
            shape3.x = 0; 
            shape3.y = 0;
        };
        stage.update();
    };
    
    function check1(){
        if(shapes1 == 0){
            if(time < time10_10){
                time10_10 = time;
            };
            clearInterval(timer1);
            document.getElementById("score10").innerHTML = "Best Time: " + time10_10;
            $('#MainStage').hide();
            $('#time').hide();
            $('#gameOver').show();
            $('#content').show();
            $('#levelSelect').hide();
            document.getElementById("yourScore").innerHTML = "Your time was: " + time;
            document.getElementById("highScore").innerHTML = "Your best time is: " + time10_10;
            createjs.Ticker.removeEventListener("tick", handleTick);
        };   
    }  
};


function level11(){
    
    time = 0;
    $('#MainStage').show();
    $('#time').show();
    $('#content').hide();
    
    var timer1 = setInterval(function() { time++; console.log("hi", time); }, 1000); 
    
    setInterval(function() { document.getElementById("time").innerHTML = time; }, 1000); 
    
    var shapes1 = 3;
    
    stage = new createjs.Stage("MainStage");
    shape1 = new createjs.Shape();
    shape1.graphics.beginFill("red").drawCircle(20, 50, 40);
    shape1.x = shape1.y = 60;
    stage.addChild(shape1);
    
    shape2 = new createjs.Shape();
    shape2.graphics.beginFill("red").drawCircle(40, 0, 40);
    shape2.x = shape2.y = 60;
    stage.addChild(shape2);
    
    shape3 = new createjs.Shape();
    shape3.graphics.beginFill("red").drawCircle(0, 0, 40);
    shape3.x = shape3.y = 60;
    stage.addChild(shape3);
    
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    

    shape1.addEventListener("mousedown", one);
    function one(event){
        stage.removeChild(shape1);
        shapes1 --;
        check1();
    }
    shape2.addEventListener("mousedown", two);
    function two(event){
        stage.removeChild(shape2);
        shapes1 --;
        check1();
    }
    shape3.addEventListener("mousedown", three);
    function three(event){
        stage.removeChild(shape3);
        shapes1 --;
        check1();
    }
    
    
    function handleTick() {
        shape1.x += 30;
        shape1.y += 0;
        if (shape1.x > stage.canvas.width) { 
            shape1.x = 0; 
            shape1.y = 0;
        };
        shape2.x += 5;
        shape2.y += 30;
        if (shape2.x > stage.canvas.width) { 
            shape2.x = 0; 
            shape2.y = 20;
        };
        shape3.x += 10;
        shape3.y += 15;
        if (shape3.x > stage.canvas.width) { 
            shape3.x = 0; 
            shape3.y = 0;
        };
        stage.update();
    };
    
    function check1(){
        if(shapes1 == 0){
            if(time < time11_11){
                time11_11 = time;
            };
            clearInterval(timer1);
            document.getElementById("score11").innerHTML = "Best Time: " + time11_11;
            $('#MainStage').hide();
            $('#time').hide();
            $('#gameOver').show();
            $('#content').show();
            $('#levelSelect').hide();
            document.getElementById("yourScore").innerHTML = "Your time was: " + time;
            document.getElementById("highScore").innerHTML = "Your best time is: " + time11_11;
            createjs.Ticker.removeEventListener("tick", handleTick);
        };   
    }  
};


function level12(){
    
    time = 0;
    $('#MainStage').show();
    $('#time').show();
    $('#content').hide();
    
    var timer1 = setInterval(function() { time++; console.log("hi", time); }, 1000); 
    
    setInterval(function() { document.getElementById("time").innerHTML = time; }, 1000); 
    
    var shapes1 = 4;
    
    stage = new createjs.Stage("MainStage");
    shape1 = new createjs.Shape();
    shape1.graphics.beginFill("red").drawCircle(20, 50, 40);
    shape1.x = shape1.y = 60;
    stage.addChild(shape1);
    
    shape2 = new createjs.Shape();
    shape2.graphics.beginFill("red").drawCircle(40, 0, 40);
    shape2.x = shape2.y = 60;
    stage.addChild(shape2);
    
    shape3 = new createjs.Shape();
    shape3.graphics.beginFill("red").drawCircle(0, 0, 40);
    shape3.x = shape3.y = 60;
    stage.addChild(shape3);
    
    shape4 = new createjs.Shape();
    shape4.graphics.beginFill("red").drawCircle(0, 20, 40);
    shape4.x = shape4.y = 60;
    stage.addChild(shape4);
    
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    

    shape1.addEventListener("mousedown", one);
    function one(event){
        stage.removeChild(shape1);
        shapes1 --;
        check1();
    }
    shape2.addEventListener("mousedown", two);
    function two(event){
        stage.removeChild(shape2);
        shapes1 --;
        check1();
    }
    shape3.addEventListener("mousedown", three);
    function three(event){
        stage.removeChild(shape3);
        shapes1 --;
        check1();
    }
    shape4.addEventListener("mousedown", four);
    function four(event){
        stage.removeChild(shape4);
        shapes1 --;
        check1();
    }
    
    
    function handleTick() {
        shape1.x += 30;
        shape1.y += 0;
        if (shape1.x > stage.canvas.width) { 
            shape1.x = 0; 
            shape1.y = 0;
        };
        shape2.x += 5;
        shape2.y += 30;
        if (shape2.x > stage.canvas.width) { 
            shape2.x = 0; 
            shape2.y = 20;
        };
        shape3.x += 10;
        shape3.y += 15;
        if (shape3.x > stage.canvas.width) { 
            shape3.x = 0; 
            shape3.y = 0;
        };
        shape4.x += 30;
        shape4.y += 30;
        if (shape4.x > stage.canvas.width) { 
            shape4.x = 0; 
            shape4.y = 0;
        };
        stage.update();
    };
    
    function check1(){
        if(shapes1 == 0){
            if(time < time12_12){
                time12_12 = time;
            };
            clearInterval(timer1);
            document.getElementById("score12").innerHTML = "Best Time: " + time12_12;
            $('#MainStage').hide();
            $('#time').hide();
            $('#gameOver').show();
            $('#content').show();
            $('#levelSelect').hide();
            document.getElementById("yourScore").innerHTML = "Your time was: " + time;
            document.getElementById("highScore").innerHTML = "Your best time is: " + time12_12;
            createjs.Ticker.removeEventListener("tick", handleTick);
        };   
    }  
};