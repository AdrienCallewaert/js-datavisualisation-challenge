const table1 = document.getElementById("table1"); // table 1
const tailleTable1 = 35;
let data_table1 = []; // data de la table2


getTable1InJson()
function getTable1InJson(){
    // les enfants de tr 4
    for (let i = 1; i < table1.children[2].children[1].children.length; i++) {
        // les enfants de td 26+
            for (let j = 1; j < table1.children[2].children.length; j++) {
                data_table1.push(table1.children[2].children[j].children[i].innerHTML.trim())
            }
        }
}
// assignation des donnees par date
let dataPays = data_table1.splice(0, tailleTable1);
let data2002 = data_table1.splice(0, tailleTable1);
let data2003 = data_table1.splice(0, tailleTable1);
let data2004 = data_table1.splice(0, tailleTable1);
let data2005 = data_table1.splice(0, tailleTable1);
let data2006 = data_table1.splice(0, tailleTable1);
let data2007 = data_table1.splice(0, tailleTable1);
let data2008 = data_table1.splice(0, tailleTable1);
let data2009 = data_table1.splice(0, tailleTable1);
let data2010 = data_table1.splice(0, tailleTable1);
let data2011 = data_table1.splice(0, tailleTable1);
let data2012 = data_table1.splice(0, tailleTable1);





const table2 = document.getElementById("table2"); // table 2
const tailleTable2 = 30;
let data_table2 = []; // data de la table2

getTable2InJson()

let data0=data_table2.splice(0, tailleTable2); // stock les pays
let data1=data_table2.splice(0, tailleTable2); // stocks la premiere anne

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

let barChartData1 = {
    labels:dataPays,
    datasets: [{
        label: '2002',
        backgroundColor:'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: data2002,

    }, {
        label: '2003',
  
        backgroundColor: 'rgb(255, 159, 64)',
        borderColor:'rgb(255, 159, 64)',
        data: data2003,
    }
    , {
        label: '2004',
        fill: false,
        backgroundColor:'rgb(255, 205, 86)',
        borderColor:'rgb(255, 205, 86)',
        data: data2004,
    }
    , {
        label: '2005',
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor:'rgb(75, 192, 192)',
        data: data2005,
    }, {
        label: '2006',
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        data: data2006,
    }, {
        label: '2007',
        fill: false,
        backgroundColor:'rgb(153, 102, 255)',
        borderColor:'rgb(153, 102, 255)',
        data: data2007,
    }, {
        label: '2008',
        fill: false,
        backgroundColor: 'rgb(201, 203, 207)',
        borderColor:'rgb(201, 203, 207)', // cahnger apres
        data: data2008,
    }, {
        label: '2009',
        fill: false,
        backgroundColor: 'rgb(201, 203, 207)',
        borderColor:'rgb(201, 203, 207)',
        data: data2009,
    }, {
        label: '2010',
        fill: false,
        backgroundColor:'rgb(201, 203, 207)',
        borderColor: 'rgb(201, 203, 207)',
        data: data2010,
    }, {
        label: '2011',
        fill: false,
        backgroundColor:'rgb(201, 203, 207)',
        borderColor: 'rgb(201, 203, 207)',
        data: data2011,
    }, {
        label: '2012',
        fill: false,
        backgroundColor: 'rgb(201, 203, 207)',
        borderColor: 'rgb(201, 203, 207)',
        data: data2012,
    }]   
}

// console.log(barChartData1);






function getTable2InJson(){
    // les enfants de tr 4
    for (let i = 1; i < table2.children[2].children[1].children.length; i++) {
       // les enfants de td 26+
        for (let j = 0; j < table2.children[2].children.length; j++) {
            data_table2.push(table2.children[2].children[j].children[i].innerHTML.trim())
        }
    }

}

window.onload = function () {



// Graph canvasAjax
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
    setInterval(majAjax, 2000);
  };
  graphAjax();



  //Graph 1
  let ctx1 = document.getElementById("canvas1").getContext("2d");
  window.myLine = new Chart(ctx1, {
    type: "line",
    data: {
      labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
      datasets: [
        {
          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false,
        },
        {
          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false,
        },
        {
          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false,
        },
        {
          data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false,
        },
        {
          data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
          label: "North America",
          borderColor: "#c45850",
          fill: false,
        },
      ],
    },
    options: {
      title: {
        display: true,
      },
    },
  });


  //Graph 2
  let ctx2 = document.getElementById("canvas2").getContext("2d");
  window.myBar = new Chart(ctx2, {
    type: "horizontalBar",
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Prison population",
      },
    },
  });
};












