const table1 = document.getElementById("table1"); // table 2
let data_table1 = []; // data de la table2

function getTable1InJson(){
    // les enfants de tr 4
    for (let i = 1; i < table2.children[2].children[1].children.length; i++) {
        // les enfants de td 26+
            for (let j = 0; j < table2.children[2].children.length; j++) {
                data_table2.push(table2.children[2].children[j].children[i].innerHTML.trim())
            }
        }
}