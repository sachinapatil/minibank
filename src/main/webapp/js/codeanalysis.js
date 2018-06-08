
google.load("visualization", "1.1", {
	packages : [ "bar" ]
});
google.setOnLoadCallback(drawChart);
function drawChart() {
   	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Build');
      data.addColumn('number', 'Blocker');
      data.addColumn('number', 'Critical');
	  data.addColumn('number', 'Major');
	  data.addColumn('number', 'Minor');
	  
	   $.get('CodeAnalysisContoller', function(response) {
	       var count = 0;
	       for(var i in response) {
	    	   if(count < 5) {
	    	   var arr = [];
	    	   console.log(response[i].buildnumber);
	    	   arr.push(response[i].buildnumber);
	    	   arr.push(Number(response[i].blocker));
	    	   arr.push(Number(response[i].critical));
	    	   arr.push(Number(response[i].major));
	    	   arr.push(Number(response[i].minor));
	    	   data.addRows([arr]);
	    	   }
	    	   count ++;
	       }
	       
	   });
	

	var options = {
		chart : {
			title : 'Code Quality',
			subtitle : 'Blocker, Critical, Major, Minor issues',
		},
		width: 800,
		height: 400,
		colors: ['red', 'yellow', 'blue', 'orange'],
		axes: {
	            y: {
	              0: { side: 'top', label: 'Issues Count'} // Top x-axis.
	            }
	    }
	    
	};

	var chart = new google.charts.Bar(document
			.getElementById('codeanalysis'));

	chart.draw(data, options);
}
