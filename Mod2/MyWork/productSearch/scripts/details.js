/*
* Description: 
*
* Author: Neo
*/
"use strict";

//obsolete
function insertTableRow(list) {
    let productID = list.ProductID;
    let productName = list.ProductName;
    let productUnitPrice = list.UnitPrice;
    let productUnitsInStock = list.UnitsInStock;
    let productCategoryName = list.CategoryName;
    let productSupplier = list.Supplier;
    let productDiscontinued = list.Discontinued;

    let element = 
    "<tr><td>Product ID</td><td><input value='" + productID + 
    "' disabled /></td></tr><tr><td>Product Name</td><td>" + productName + 
    "</td></tr><tr><td>Unit Price</td><td>" + productUnitPrice +
    "</td></tr><tr><td>Units in Stock</td><td>" + productUnitsInStock +
    "</td></tr><tr><td>Category Name</td><td>" + productCategoryName +
    "</td></tr><tr><td>Supplier</td><td>" + productSupplier +
    "</td></tr><tr><td>Discontinued</td><td><input value='" + productDiscontinued +
    "' disabled></td></tr>";

    $("#productBody").append(element);

    if(productDiscontinued == "true") {
        $("tr:contains(Discontinued) input").css({color : "red"});
    }
}

//new improved using double nested loops
function showData(prop, value) {
    value = value.replace("'", "`");

    let element = 
    "<tr><td>" + prop + "</td><td><input type='text' value='" + value + 
    "' disabled /></td></tr>";

    $("#productBody").append(element);

    if(value == "true") {
        $("tr:contains(Discontinued) input").css({color : "red"});
    }
}

$(function() {
    let urlParams = new URLSearchParams(location.search);
    let productId = urlParams.get("productid");
    
    let storage;

    let objs;
    $.getJSON("data/products.json", function(data) {
        objs = data.Items;

        for(let i = 0; i < objs.length; i++) {
            if(productId == objs[i].ProductID) {
                for(let j in objs[i]) {
                    showData(j, objs[i][j]);

                    storage = objs[i][j].newValue;
                    console.log(storage);
                }
                //insertTableRow(objs[i]);
                break;
            }
        }
    });

    $("#saveBtn").hide();
    $("#cancelBtn").hide();
    $("#editBtn").on("click", function() {
        $("input:not([type='button'])").prop("disabled", false);

        console.log($("input:text").val());

        $("#saveBtn").show();
        $("#cancelBtn").show();
        $("#editBtn").hide();
    });

    $("#saveBtn").on("click", function() {
        alert("Feature Pending");
        $("input:not([type='button'])").prop("disabled", true);

        $("#editBtn").show();
        $("#saveBtn").hide();
        $("#cancelBtn").hide();
    });

    $("#cancelBtn").on("click", function() {
        $("input:not([type='button'])").prop("disabled", true);

        $("#editBtn").show();
        $("#saveBtn").hide();
        $("#cancelBtn").hide();
    });
});