$(document).ready(function(){
    var svg = dimple.newSvg("#chartContainer", 590, 400);
    d3.tsv("/data/example_data.tsv", function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(20, 20, 460, 360)
      myChart.addMeasureAxis("p", "Unit Sales");
      myChart.addSeries("Owner", dimple.plot.pie);
      myChart.addLegend(500, 20, 90, 300, "left");
      myChart.draw();
  });
});