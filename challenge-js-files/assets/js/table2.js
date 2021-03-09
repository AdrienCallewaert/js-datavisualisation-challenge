const table2 = document.getElementById("table2"); // table 2
const tailleTable = 30;
let data_table2 = []; // data de la table2

// window.chartColors = {
// 	red: 'rgb(255, 99, 132)',
// 	orange: 'rgb(255, 159, 64)',
// 	yellow: 'rgb(255, 205, 86)',
// 	green: 'rgb(75, 192, 192)',
// 	blue: 'rgb(54, 162, 235)',
// 	purple: 'rgb(153, 102, 255)',
// 	grey: 'rgb(201, 203, 207)'
// };

getTable2InJson()
let data0=data_table2.splice(0, tailleTable); // stock les pays
let data1=data_table2.splice(0, tailleTable); // stocks la premiere anne
let barChartData = {
    labels:data0,
    datasets: [{
        label: '2007-09',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: data1
    }, {
        label: '2010-12',
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
        data: data_table2
    }]

};


window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'horizontalBar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Prison population'
            }
        }
    });

};

function getTable2InJson(){
    // les enfants de tr 4
    for (let i = 1; i < table2.children[2].children[1].children.length; i++) {
       // les enfants de td 26+
        for (let j = 0; j < table2.children[2].children.length; j++) {
            data_table2.push(table2.children[2].children[j].children[i].innerHTML.trim())
        }
    }

}
/*
getTable2InJson();

getTable1InJson();


var svg = dimple.newSvg("#myChart", 590, 400);
var myChart = new dimple.chart(svg, data_table2);
myChart.setBounds(60, 30, 510, 330)
myChart.addCategoryAxis("x", "Country");
myChart.addMeasureAxis("y", "2010–12");
myChart.addSeries("Country", dimple.plot.bar);
myChart.addLegend(65, 10, 510, 20, "right"); // on s en
myChart.draw();

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
    for (let i = 1; i < table1.children[2].children.length; i++) {
        data_table1.push({
            [country]:table1.children[2].children[i].children[1].innerHTML,
            [y1]:table1.children[2].children[i].children[2].innerHTML,
            [y2]:table1.children[2].children[i].children[3].innerHTML,
            [y3]:table1.children[2].children[i].children[4].innerHTML,
            [y4]:table1.children[2].children[i].children[5].innerHTML,
            [y5]:table1.children[2].children[i].children[6].innerHTML,
            [y6]:table1.children[2].children[i].children[7].innerHTML,
            [y7]:table1.children[2].children[i].children[8].innerHTML,
            [y8]:table1.children[2].children[i].children[9].innerHTML,
            [y9]:table1.children[2].children[i].children[10].innerHTML,
            [y10]:table1.children[2].children[i].children[11].innerHTML,
            [y11]:table1.children[2].children[i].children[12].innerHTML
        });
    }
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
*/