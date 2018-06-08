 google.load("visualization", "1.1", {
     packages : [ "bar" ]
 });

google.setOnLoadCallback(drawChartSla);
function drawChartSla() {
   	var data1 = new google.visualization.DataTable();
	data1.addColumn('string', 'Date');
      data1.addColumn('number', 'Out of SLA');
      data1.addColumn('number', 'Within SLA');
     
	   $.get('chefReportsController', {code:'2'}, function(response) {
	      
	       for(var i in response) {
	    	  
	    	   var arr = [];
	    	   console.log(response[i].date);
	    	   arr.push(response[i].date);
	    	   arr.push(Number(response[i].outofsla));
	    	   arr.push(Number(response[i].withinsla));
	    	  
	    	   data1.addRows([arr]);
	       }
	       
	   });
	
	   
	var options = {
		chart : {
			title : 'Out of SLA vs Within SLA ',
			subtitle : '',
		},
		width: 600,
		height: 400,
		colors: ['red', 'green'],
		axes: {
            y: {
              0: { side: 'top', label: 'Count'} // Top x-axis.
            }
    }
      
	};

	var chart = new google.charts.Bar(document
			.getElementById('sladaywise'));

	chart.draw(data1, options);
}

