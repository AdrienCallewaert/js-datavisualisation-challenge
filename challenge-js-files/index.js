let table2 = document.getElementById("table2");

console.log(table2)

let data =[
    {
        "Country": "Latvia",
        "2007–09": 312,
        "2010–12": 312
    },
    {
        "Country": "Lithuania",
        "2007–09": 247,
        "2010–12": 307
    },
    {
        "Country": "Estonia",
        "2007–09": 266,
        "2010–12": 253
    },
    {
        "Country": "Czech Republic",
        "2007–09": 198,
        "2010–12": 217
    },
    {
        "Country": "Poland",
        "2007–09": 228,
        "2010–12": 214
    }
]


var svg = dimple.newSvg("#chartContainer", 590, 400);
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 510, 330)
  myChart.addCategoryAxis("x", ["2007–09", "2010–12"]);
  myChart.addMeasureAxis("y", "2010–12");
  myChart.addSeries("Country", dimple.plot.bar);
  myChart.addLegend(65, 10, 510, 20, "right");
  myChart.draw();
/*
<html>
<div id="chartContainer">
  <script src="/lib/d3.v4.3.0.js"></script>
  <script src="http://dimplejs.org/dist/dimple.v2.3.0.min.js"></script>
  <script type="text/javascript">
    var svg = dimple.newSvg("#chartContainer", 590, 400);
    d3.tsv("/data/example_data.tsv", function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 510, 330)
      myChart.addCategoryAxis("x", ["Price Tier", "Channel"]);
      myChart.addMeasureAxis("y", "Unit Sales");
      myChart.addSeries("Channel", dimple.plot.bar);
      myChart.addLegend(65, 10, 510, 20, "right");
      myChart.draw();
    });
  </script>
</div>
</html>

*/