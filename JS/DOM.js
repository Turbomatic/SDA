var x = document.querySelector(".container");

var table = document.createElement("table");
x.insertBefore(table, x.firstChild);
table.id = "table";

var newTableHead = document.createElement("thead");
table.appendChild(newTableHead);
newTableHead.id = "tablehead";
newTableHead.innerHTML = "Table Head";

var newTableBody = document.createElement("tbody");
table.appendChild(newTableBody);
newTableBody.id = "tablebody";
newTableBody.innerHTML = "<tr><td>Table body row</td></tr>";

var newTableFooter = document.createElement("tfoot");
table.appendChild(newTableFooter);
newTableFooter.id = "tablefooter";
newTableFooter.innerHTML = "Table Footer";

document.querySelector("input").onkeypress = function(e){
    newTableBody.innerHTML = "Table boyd no row"
}