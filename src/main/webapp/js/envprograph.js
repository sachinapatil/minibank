google.load("visualization", "1.1", {    packages : [ "bar" ]});


google.setOnLoadCallback(drawChart);
function drawChart() {
  
     
	
	   
	   var data1 = new google.visualization.DataTable();
	    data1.addColumn('string', 'Date');
	      data1.addColumn('number', 'Environments Provisioned');
	      data1.addColumn({type: 'string', role: 'tooltip'});
	       $.get('chefReportsController', {code:'1'}, function(response) {
	           
	           for(var i in response) {
	           	
	               var arr1 = [];
	               console.log(response[i].date);
	               arr1.push(response[i].date);
	               arr1.push(Number(response[i].envcount));
	               arr1.push('QA');
	               data1.addRows([arr1]);
	           }
	           
	       });
	
	   

	
    
    var options1 = {
        chart : {
            title : 'Daily Provision Summary',
            subtitle : '',
        },
        width: 600,
        height: 400,
        colors: ['green'],
        isStacked: true,
        axes: {
            y: {
              0: { side: 'top', label: 'Count'} // Top x-axis.
            }
    }
      
    };

 

    var chart1 = new google.charts.Bar(document
            .getElementById('envdaywise'));

    chart1.draw(data1, options1);
}
