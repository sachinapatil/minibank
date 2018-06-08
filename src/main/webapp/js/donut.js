 var chart;

            var chartData = [
                {
                    "zone": "orange",
                    "Students": 100,
					"url":"thresolddetails_orange.html",
					color:"#ffba13"
                },
                {
                    "zone": "green",
                    "Students": 70,
					"url":"thresolddetails_green.html",
					color:"#8bd629"
                },
                {
                    "zone": "red",
                    "Students": 30,
					"url":"thresolddetails_red.html",
					color:"#FF0F00"
                },
                
            ];


            AmCharts.ready(function () {
                // PIE CHART
                chart = new AmCharts.AmPieChart();

                // title of the chart
               // chart.addTitle("Visitors countries", 16);
                chart.dataProvider = chartData;
                //chart.titleField = "zone";
				
                chart.valueField = "Students";
				chart.labelText = "[[value]]";
                chart.sequencedAnimation = true;
                chart.startEffect = "elastic";
                chart.innerRadius = "40%";
				chart.marginLeft = 0;
				chart.height="100%";
				chart.urlField = "url";
				chart.colorField ="color";
                chart.startDuration = 2;
                chart.labelRadius = -12;
                chart.balloonText = "[[title]]<br><span style='font-size:12px'><b>[[value]]</b> ([[percents]]%)</span>";
                // the following two lines makes the chart 3D
                //chart.depth3D = 10;
                //chart.angle = 10;

                // WRITE                                 
                chart.write("chartdiv");
            });