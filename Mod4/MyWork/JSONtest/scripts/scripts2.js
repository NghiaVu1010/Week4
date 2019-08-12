/*
* Description: 
*
* Author: Neo
*/
"use strict";

function getUserInfo() {
    let userID = document.getElementById("userID");
    let xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let json = JSON.parse(this.responseText);
            //console.log(json);
            insertTableData(json);
        }
    }
    var url = "https://jsonplaceholder.typicode.com/users/" + userID.value;
    xhr.open("GET", url, true);
    xhr.send();
}

function insertTableData(list) {
    let dataBody = document.getElementById("dataBody");
    let row = dataBody.insertRow(-1);

    let cell1 = row.insertCell(0);
    cell1.innerHTML = list.id;

    let cell2 = row.insertCell(1);
    cell2.innerHTML = list.name;

    let cell3 = row.insertCell(2);
    cell3.innerHTML = list.username;

    let cell4 = row.insertCell(3);
    cell4.innerHTML = list.address.city;

    let cell5 = row.insertCell(4);
    cell5.innerHTML = list.phone;
        
    let cell6 = row.insertCell(5);
    cell6.innerHTML = list.email;
}

window.onload = function() 
{
    let searchBtn = document.getElementById("searchBtn");
    searchBtn.onclick = function() {
        getUserInfo();
    };

    var resetBtn = document.getElementById('resetBtn');
    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function() {
    };
};