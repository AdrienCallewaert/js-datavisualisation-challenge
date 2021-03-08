const table1 = document.getElementById("table1"); // table 2
const table2 = document.getElementById("table2"); // table 2
let data_table1 = []; // data de la table2
let data_table2 = []; // data de la table2
getTable2InJson()
console.log(data_table2);
getTable1InJson()

function getTable1InJson(){
    let country = table1.children[1].children[0].children[1].innerHTML; // le pays
    let y1 = table1.children[2].children[0].children[2].innerHTML; 
    let y2 = table1.children[2].children[0].children[3].innerHTML; 
    let y3 = table1.children[2].children[0].children[4].innerHTML; 
    let y4 = table1.children[2].children[0].children[5].innerHTML; 
    let y5 = table1.children[2].children[0].children[6].innerHTML; 
    let y6 = table1.children[2].children[0].children[7].innerHTML; 
    let y7 = table1.children[2].children[0].children[8].innerHTML; 
    let y8 = table1.children[2].children[0].children[9].innerHTML; 
    let y9 = table1.children[2].children[0].children[10].innerHTML; 
    let y10 = table1.children[2].children[0].children[11].innerHTML;
    let y11 = table1.children[2].children[0].children[12].innerHTML; 
    console.log(country,y1,y2,y3,y4,y5,y6,y7,y8,y9,y10,y11)
}


function getTable2InJson(){
    let country = table2.children[1].children[0].children[1].innerHTML; // le pays
    let y1 = table2.children[1].children[0].children[2].innerHTML; // la premiere anne
    let y2 = table2.children[1].children[0].children[3].innerHTML; // la 2eme annee
    for (let i = 0; i < table2.children[2].children.length; i++) {
        data_table2.push({
            [country]:table2.children[2].children[i].children[1].innerHTML,
            [y1]:table2.children[2].children[i].children[2].innerHTML,
            [y2]:table2.children[2].children[i].children[3].innerHTML
        });
    }
}