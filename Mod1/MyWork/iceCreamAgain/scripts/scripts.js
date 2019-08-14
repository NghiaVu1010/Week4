/*
* Description: Calculates ice cream money
*
* Author: Neo
*/
"use strict";

function calculateTotal() {
    //grab each of the values and assigns value
    let scoops = $("#scoopForm").val();
    let holdType = $("input[name='holdType']:checked").val();
    let hotFudge = $("#hotFudge").prop("checked");
    let sprinkles = $("#sprinkles").prop("checked");
    let whipCream = $("#whipCream").prop("checked");
    let total = $("#total");
    let currTotal = 0;

    if(scoops == 1) currTotal += 2.50;
    else currTotal += 2.50 + 1.25 * scoops;

    if(holdType == "waffle") currTotal += 1.00;
    else if(holdType == undefined) {
        $("#errorMsg").text("Please select a holder");
        return false;
    }

    if(hotFudge) currTotal += 1.50;
    if(sprinkles) currTotal += 0.25;
    if(whipCream) currTotal += 0.75;

    total.val(currTotal.toFixed(2));
    $("#totalDiv").fadeIn();
}

$(function() {
    $("input[name='holdType']").on("change", function() {
        if($(this).val() == "waffle") {
            $("#fudgeDiv").hide();
            $("#hotFudge").prop("checked", false);
        }
        else
            $("#fudgeDiv").show();
    });

    const priceBtn = $("#priceBtn");
    $("#priceBtn").on("click", function() {
        calculateTotal();
        //$("#totalDiv").fadeIn();
    });

    let max = Number($("#charCount").text());
    $("#message").on("keyup", function() {
        $("#charCount").text(max - $(this).val().length);
    });
    
    const resetBtn = $("#resetBtn");
    // Bind Click Event Handler to Reset Buttom
    resetBtn.on("click", function() {
        $("#errorMsg").text("");
    });
});