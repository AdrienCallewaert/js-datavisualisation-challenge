const table1 = document.getElementById("table1"); // table 1
const tailleTable1 = 11;
let data_table1 = []; // data de la table1
let table1_pays = [];
let lineChartData_datasets = []

const table2 = document.getElementById("table2"); // table 2
const tailleTable2 = 30;
let data_table2 = []; // data de la table2

getTable1InJson()
getTable2InJson();

//createDatasetsObjectInArray() // only for table1 (create perfect object per label)
for (let i = 0; i < table1_pays.length; i++) {
    lineChartData_datasets.push({
        label: table1_pays[i],
        fill:false,
        backgroundColor: randomColorRgb(),
        borderColor: randomColorRgb(),
        data: data_table1.splice(0, tailleTable1)
    })
}
let lineChartData = {
    labels: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012],
    datasets: lineChartData_datasets,  
};
let barChartData = {
    labels:data_table2.splice(0, tailleTable2),
    datasets: [{
        label: '2007-09',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: data_table2.splice(0, tailleTable2)
    }, {
        label: '2010-12',
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
        data: data_table2.splice(0, tailleTable2)
    }]

};

window.onload = function () {
    let ctx1 = document.getElementById('canvas1').getContext('2d');
    let canvas1 = new Chart(ctx1, {
        type: 'line',
        data: lineChartData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'test'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'pays'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    });

    let ctx2 = document.getElementById('canvas2').getContext('2d');
    let canvas2 = new Chart(ctx2, {
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
    })

    let graphAjax = () => {
        let ctx = document.getElementById("canvasAjax").getContext("2d");
        let dataPoints = [];
        let label = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let i = 9;
        let chart0 = new Chart(ctx, {
            type: "line",
            data: {
                labels: label,
                datasets: [
                {
                    label: ["number of arrests"],
                    borderColor: "#3e95cd",
                    data: dataPoints,
                },
                ],
            },
        });
    }
//majAjax
    function majAjax() {
      i++;
      label.push(i);
      fetch("https://canvasjs.com/services/data/datapoints.php")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          dataPoints.length + 1;
          data.forEach((element) => dataPoints.push(parseInt(element[1])));
          chart0.update();
        });
    }
    graphAjax();
    setInterval(majAjax, 2000);
    
};

 


function getTable1InJson(){
    let tdTable1 = document.querySelectorAll("#table1 td")
    pays = [...tdTable1].filter((td,index) => index%12 == 0 ? td.innerText : false).map(td => td.innerHTML);
    data_table1 = [...tdTable1].filter((td,index) => index%12 !== 0 ? td.innerText : false).map(td => parseInt(td.innerHTML));
}

function getTable2InJson(){
    // les enfants de tr 4
    for (let i = 1; i < table2.children[2].children[1].children.length; i++) {
       // les enfants de td 26+
        for (let j = 0; j < table2.children[2].children.length; j++) {
            data_table2.push(table2.children[2].children[j].children[i].innerHTML.trim())
        }
    }
}

// here only for table1
function createDatasetsObjectInArray() {

}

//random color rgb
function randomColorRgb() {  
    return `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`
}
function randomRgb() {  
    return Math.floor(Math.random() * (256))
}
