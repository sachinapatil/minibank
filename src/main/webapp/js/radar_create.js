		var chart = AmCharts.makeChart("chartdiv1",{
			"type": "radar",
			"categoryField": "category",
			"graphs": [
				{
					"valueField": "value"
				}
			],
			"valueAxes": [
				{
					"axisTitleOffset": -10,
					"axisTitle":false,
					"labelsEnabled": false,
					"minimum": 0,
					"maximum": 100,
					"axisAlpha": 1,
					"axisColor":"#ffffff",
					"axisThickness":3,
					/*"dashLength": 10,*/
					"gridType": "circles",
					"gridThickness": 0
				}
			],
			"dataProvider": [
                {
                    "category": "",
                    "value": 0,
					"url":"www.google.com"
                },
                {
                    "category": "",
                    "value": 0,
					"url":"www.google.com"
                },
                {
                    "category": "",
                    "value": 0,
					"url":"www.google.com"
                }
			],
			"guides": [
				{
					"angle": 150,
					"tickLength": 0,
					"toAngle": 270,
					"value": 66,
					"toValue": 100,
					"lineThickness": 0,
					"fillColor": "#8bd629",
					"fillAlpha": 1,
					//"label":"42%",
					// "labelRotation": 120,
				},
				{
					"angle": 150,
					"tickLength": 0,
					"toAngle": 270,
					"value": 0,
					"toValue": 20,
					"lineThickness": 0,
					"fillColor": "#FF0000",
					"fillAlpha": 1,
					//"label":"30%"
				},
				{
					"angle": 150,
					"tickLength": 0,
					"toAngle": 270,
					"value": 20,
					"toValue": 66,
					"lineThickness": 0,
					"fillColor": "#ffba13",
					"fillAlpha": 1,
					//"label":"28%"
				},
				{
					"angle": 270,
					"tickLength": 0,
					"toAngle": 390,
					"value": 66,
					"toValue": 100,
					"lineThickness": 0,
					"fillColor": "#8bd629",
					"fillAlpha": 1,
				},
				{
					"angle": 270,
					"tickLength": 0,
					"toAngle": 390,
					"value": 0,
					"toValue": 23,
					"lineThickness": 0,
					"fillColor": "#ff0000",
					"fillAlpha": 1
				},
				{
					"angle": 270,
					"tickLength": 0,
					"toAngle": 390,
					"value": 23,
					"toValue": 66,
					"lineThickness": 0,
					"fillColor": "#ffba13",
					"fillAlpha": 1
				},
				{
					"angle": 30,
					"tickLength": 0,
					"toAngle": 150,
					"value": 50,
					"toValue": 100,
					"lineThickness": 0,
					"fillColor": "#8bd629",
					"fillAlpha": 1
				},
				{
					"angle": 30,
					"tickLength": 0,
					"toAngle": 150,
					"value": 0,
					"toValue": 43,
					"lineThickness": 0,
					"fillColor": "#ff0000",
					"fillAlpha": 1
				},
				{
					"angle": 30,
					"tickLength": 0,
					"toAngle": 150,
					"value": 43,
					"toValue": 50,
					"lineThickness": 0,
					"fillColor": "#ffba13",
					"fillAlpha": 1
				}
			]
		});
/*            var chart;

            var chartData = [
                {
                    "direction": "",
                    "value": 8,
					"noshowvalue":0,
					"url":"www.google.com"
                },
                {
                    "direction": "",
                    "value": 9,
					"noshowvalue":0,
					"url":"www.google.com"
                },
                {
                    "direction": "",
                    "value": 4.5,
					"noshowvalue":0,
					"url":"www.google.com"
                }
            ];


            AmCharts.ready(function () {
                // RADAR CHART
                chart = new AmCharts.AmRadarChart();
                chart.dataProvider = chartData;
                chart.categoryField = "direction";
                chart.startDuration = 0;
                chart.urlField="url";

                // TITLE
                chart.addTitle("Prevailing winds", 15);

                // VALUE AXIS
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.gridType = "circles";
                valueAxis.fillAlpha = 0.05;
                valueAxis.fillColor = "#000000";
                valueAxis.axisAlpha = 0.2;
                valueAxis.gridAlpha = 0;
                valueAxis.fontWeight = "bold";
                valueAxis.minimum = 0;
                chart.addValueAxis(valueAxis);

                // GRAPH
                var graph = new AmCharts.AmGraph();
                graph.lineColor = "#FFCC00";
                graph.fillAlphas = 0.4;
                graph.bullet = "round";
                graph.valueField = "value";
                graph.balloonText = "[[category]]: [[value]] m/s";
                chart.addGraph(graph);

                // GUIDES
                // blue fill
                var guide = new AmCharts.Guide();
                guide.angle = 150;
                guide.tickLength = 0;
                guide.toAngle = 270;
                guide.value = 0;
                guide.toValue = 10;
                guide.fillColor = "#00ff00";
                guide.fillAlpha = 1;
                valueAxis.addGuide(guide);

                guide = new AmCharts.Guide();
                guide.angle = 150;
                guide.tickLength = 0;
                guide.toAngle = 270;
                guide.value = 0;
                guide.toValue = 8;
                guide.fillColor = "#ffff00";
                guide.fillAlpha = 1;
                valueAxis.addGuide(guide);

                guide = new AmCharts.Guide();
                guide.angle = 150;
                guide.tickLength = 0;
                guide.toAngle = 270;
                guide.value = 0;
                guide.toValue = 6;
                guide.fillColor = "#ff0000";
                guide.fillAlpha = 1;
                valueAxis.addGuide(guide);

                // WRITE                
                chart.write("chartdiv");
            });*/