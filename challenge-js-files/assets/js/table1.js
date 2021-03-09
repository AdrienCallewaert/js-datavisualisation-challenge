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


var config = {
    type: 'line',
    data: {
        labels: dataPays,
        datasets: [{
            label: '2002',
            backgroundColor:'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data2002,
            fill: false,
        }, {
            label: '2003',
            fill: false,
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
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
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
                    labelString: 'Month'
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
};

export { config };


/*

		var config = {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'My First dataset',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
					fill: false,
				}, {
					label: 'My Second dataset',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Chart.js Line Chart'
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
							labelString: 'Month'
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
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};


	
*/