/*
* Description: 
*
* Author: Neo
*/
"use strict";

function validateForm() {
    let ccForm = document.getElementById("ccForm");
    let expMonth = document.getElementById("expMonth");
    let expYear = document.getElementById("expYear");
    let ccCode = document.getElementById("ccCode");
    const ccMsgDiv = document.getElementById("ccMsgDiv");

    //console.log(ccForm.validity.patternMismatch);
    console.log(expMonth.checkValidity());
    console.log(expYear.checkValidity());
    console.log(ccCode.checkValidity());
    if(ccForm.validity.patternMismatch) {
        ccMsgDiv.innerHTML = "Please enter a valid CC#";
        return false;
    }
    else if(!expMonth.checkValidity()) {
        ccMsgDiv.innerHTML = "Please enter a valid month";
        return false;
    }
    else if(!expYear.checkValidity()) {
        ccMsgDiv.innerHTML = "Please enter a valid year";
        return false;
    }
    else if(!ccCode.checkValidity()) {
        ccMsgDiv.innerHTML = "Please enter the correct security code (on back of card)";
        return false;
    }
    else
        ccMsgDiv.innerHTML = "";

}

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

    //capitalizes the state field
    const stateFormField = document.getElementById("stateForm");
    stateFormField.onchange = function() {
        stateFormField.value = stateFormField.value.toUpperCase();
    }

    //capitalizes the ship state field
    const shipStateForm = document.getElementById("shipStateForm");
    shipStateForm.onchange = function() {
        shipStateForm.value = shipStateForm.value.toUpperCase();
    }

    //display or hide shipDiv depending on selection
    let sameShip = document.getElementById("sameShip");
    let shipDiv = document.getElementById("shipDiv");
    sameShip.onchange = function() {
        if(sameShip.value == 1)
            shipDiv.style.display = 'initial';
        else
            shipDiv.style.display = 'none';
    }

    let submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = function() {
        validateForm();
    };

    var resetBtn = document.getElementById('resetBtn');
    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function() {
        document.getElementById("nameForm").focus();
    };
};