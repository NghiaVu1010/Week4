/*
* Description: 
*
* Author: Neo
*/
"use strict";

//new improved using double nested loops
function showData(prop, value) {
    value = value.replace("'", "`");

    let element = 
    "<tr><td>" + prop + "</td><td><input type='text' /></td></tr>";

    $("#productBody").append(element);

    if(value == "true") {
        $("tr:contains(Discontinued) input").css({color : "red"});
    }
}

$(function() {
    //let urlParams = new URLSearchParams(location.search);
    //let productId = urlParams.get("productid");

    let objs;
    $.getJSON("data/products.json", function(data) {
        objs = data.Items;

        for(let j in objs[0]) {
            showData(j, objs[0][j]);
        }
    });

    $("#addBtn").on("click", function() {
        alert("Feature Pending");
    });

    $("#cancelBtn").on("click", function() {
        location.href = "search.html";
    });
});