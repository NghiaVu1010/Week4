/*
* Description: Calculates mortgage payment
*
* Author: Neo
*
* @param monthlyRate (Number) - Calculate the rate according to formula
* @param totalPayments (Number) - Total number of payments (in months)
* @param mortgageRate (Number) - Rate based on formula
* @param mortgagePayment (Number) - Monthly payments based on loan and rate
*
*/
"use strict";

function calculateMortgagePayment() {
    //grab each of the values and assigns value
    let loan = parseFloat($("#loanForm").val());
    let interest = parseFloat($("#interestRateForm").val());
    let length = parseFloat($("#lengthForm").val());
    let monthlyPayment = $("#monthlyPayment");
    let totalLoan = $("#totalLoan");

    if (loan <= 0 || interest <= 0 || length <= 0) {
        //return incorrectNum.style.display = 'block';
        return $("#incorrectNum").css("display", "block");
    }
    else {
        $("#incorrectNum").css("display", "none");
    }

    //do mortgage calculations based on formula
    let monthlyRate = ((interest / 100) / 12) + 1;
    let totalPayments = length * 12;
    let mortgageRate = 1 - Math.pow(monthlyRate, -totalPayments);
    mortgageRate = (monthlyRate - 1) / mortgageRate;

    //assign value and insert to field for monthly payments
    let mortgagePayment = mortgageRate * loan;
    monthlyPayment.val(mortgagePayment.toFixed(2));
    
    //assign value and insert to field for total payments
    totalLoan.val((mortgagePayment * totalPayments).toFixed(2));
}

$(function() {
    $("#calcMortgageBtn").prop("disabled", true);
    $("input[type='text']:lt(3)").blur(function() {
        let loan = parseFloat($("#loanForm").val());
        let interest = parseFloat($("#interestRateForm").val());
        let length = parseFloat($("#lengthForm").val());

        if(isNaN(loan) || isNaN(interest) || isNaN(length)) {
            $("#calcMortgageBtn").prop("disabled", true);
        }
        else {
            $("#calcMortgageBtn").prop("disabled", false);
        }
    });

    const calcMortgageBtn = $("#calcMortgageBtn");
    $(calcMortgageBtn).click(function() {
        calculateMortgagePayment()
        //alert("clicked");
    });

    var resetBtn = document.getElementById('resetBtn');
    $(resetBtn).click(function() {
        $("#incorrectNum").css("display", "none");
        $("#loanForm").focus();
        //alert("clicked");
    });

});