import { config } from './table1';
import { barChartData } from './table2';

window.onload = function () {

    let ctx1 = document.getElementById('canvas1').getContext('2d');
    window.myLine = new Chart(ctx1, config);

    let ctx2 = document.getElementById('canvas2').getContext('2d');
    window.myBar = new Chart(ctx2, {
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