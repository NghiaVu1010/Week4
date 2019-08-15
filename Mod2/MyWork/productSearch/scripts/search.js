/*
* Description: 
*
* Author: Neo
*/
"use strict";

function displayData(list) {
    for(let i = 0; i < list.length; i++) {
        if($("#productDDL").val() == list[i].CategoryName) {
            insertTableRow(list[i]);
        }
    }
}

function insertTableRow(list) {
    let productID = list.ProductID;
    let productName = list.ProductName;
    let productUnitPrice = list.UnitPrice;
    //let productDetails = $("<a>", {text: "View Details", href: "details.html?productid=" + productID});
    //let productDetails = $("<a text='View Details' href='details.html?productid=" + productID + "'</a>");

    let element = 
    "<tr><td>" + productID + 
    "</td><td>" + productName + 
    "</td><td>" + productUnitPrice + 
    "</td><td><a href='details.html?productid=" + productID + "'>View Details</a>"+ 
    "</a></td></tr>";

    $("#productBody").append(element);
}

$(function() {
    let objs;
    $.getJSON("data/products.json", function(data) {
        objs = data.Items;
    });

    $("#productDDL").on("change", function() {
        $("#productBody").empty();
        displayData(objs);
        //$("#totalDiv").fadeIn();
    });
    
    // Bind Click Event Handler to Reset Buttom
    $("#resetBtn").on("click", function() {
        $("#productBody").empty();
    });
});