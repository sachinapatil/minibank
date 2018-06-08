
google.load("visualization", "1.1", {
	packages : [ "bar" ]
});
google.setOnLoadCallback(drawChart);
function drawChart() {
   	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Date');
      data.addColumn('number', 'Success');
      data.addColumn('number', 'Failed');
	  
	   $.get('DeploymentReportsController', function(response) {
	       
	       for(var i in response) {
	    	   var arr = [];
	    	   console.log(response[i].date);
	    	   arr.push(response[i].date);
	    	   arr.push(Number(response[i].success));
	    	   arr.push(Number(response[i].failed));
	    	   data.addRows([arr]);
	       }
	       
	   });
	

	var options = {
		chart : {
			title : 'Deployment Success vs Failed',
			subtitle : '',
		},
		width: 600,
		height: 400,
		colors: ['green', 'red'],
		axes: {
            y: {
              0: { side: 'top', label: 'Count'} // Top x-axis.
            }
    }
	};

	var chart = new google.charts.Bar(document
			.getElementById('deploymenttraceability'));

	chart.draw(data, options);
}

