/*
* Description: 
*
* Author: Neo
*/
"use strict";

window.onload = function() 
{
    //highlights current field
    const allInputTextFields = document.querySelectorAll("input[type='text']");
    let len = allInputTextFields.length;
    for(let i = 0; i < len; i++) {
        allInputTextFields[i].onfocus = function() {
            this.style.backgroundColor = "yellow";
        }
        allInputTextFields[i].onblur = function() {
            this.style.backgroundColor = "";
        }
    }

    let charLeft = document.getElementById("charLeft");
    let commentBox = document.getElementById("commentBox");
    /*
    commentBox.onkeypress = function(e) {
        let key = e.keyCode;
        let max = 50;
        let sum = max - commentBox.value.length;

        //console.log(commentBox.value.length);
        if(key > 48 && key < 57) {
            return false;
        }

        if(sum >= 0) {
            charLeft.innerHTML = "Characters left: " + sum;
        }
    }*/

    commentBox.onkeyup = function(e) {
        let key = e.keyCode;
        let max = 50;
        let sum = max - commentBox.value.length;

        console.log(key);
        if(key > 48 && key < 57) {
            return false;
        }

        if(sum >= 0) {
            charLeft.innerHTML = "Characters left: " + sum;
        }
    }

    let allImgs = document.querySelectorAll("img");
    for(let i = 0; i < allImgs.length; i++) {
        allImgs[i].onmouseover = function() {
            allImgs[i].style.transform = "scale(1.5)";
        }

        allImgs[i].onmouseout = function() {
            allImgs[i].style.transform = "scale(1.0)";
        }
    }

    let submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = function() {
        
    };

    var resetBtn = document.getElementById('resetBtn');
    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function() {
        document.getElementById("nameForm").focus();
    };
};