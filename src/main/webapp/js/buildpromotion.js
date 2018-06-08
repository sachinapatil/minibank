

$("#pusername").hide();
$("#ppwd").hide();


var user = $("#pusername").text();
var pwd = $("#ppwd").text();
$.get('TabsList', {username:user, password:pwd},function(data) {
    
   /*  $('#waiting').append('<div id="load"><img src="img/loader.gif" alt="Loading" /></div>'); */
    for(var i in data) {
        $("#"+data[i]).hide();
        //alert(data[i]);
    }
     
    $("body").delay(1000).fadeIn();
});

$(document).ajaxStart(function(){
    $("#wait").css("display", "block");
  });
  $(document).ajaxComplete(function(){
      $("#wait").css("display", "none");
  });

$("#libuild_promote").on('click', function() {
    
    $("#pradmin").hide();
    $.get('BuildPromotionController', buildnumber);
    //buildnumber();
});


var buildnumber = function(response) {
   var output = "";
   
   if(response === ''){
       $("#error").show();
   } else {
	   var count = 0;
       for ( var i in response) {
    	   if(count < 10) {
          
    		   output += '<option>' + response[i] + '</option>';
    	   }
    	   count++;
       }

       document.getElementById("bnumber").innerHTML = output;
       $("#bpr").show();
   }
}

var buildnam = "";
$("#bnumber").on('click', function() {
    buildnam = $(this).val();
    $.get('DeploymentTraceabilityController', table);
  
});

var table = function(tableresp) {
    
    var output = "";
   if(tableresp === ''){
        $("#error").show();
    } 
   for(var i in tableresp) {
	   if(tableresp[i].buildnumber === buildnam ) {
		   output += '<label for="tabledep">Deployment Details:</label>';
	        output += ' <table class="table table-bordered">';
	        output += '<thead>';
	        output += '<tr>';
	        output += '  <th>Build Name</th>';
	        output += '  <th>Deployed Environment</th>';
	        output += '  <th>Deployment Status</th>';
	        output += '  <th>Deployment Date</th>';
	        output += '  <th>Duration</th>';
	        output += '</tr>';
	        output +=  '</thead>';
	        output += '<tbody>'
	        output += '  <tr>';
	        output += '<td>' + tableresp[i].buildnumber + '</td>';
	        output += '<td>' + tableresp[i].environment + '</td>';
	        output += '<td>' + tableresp[i].status + '</td>';
	        output += '<td>' + tableresp[i].date + '</td>';
	        output += '<td>' + tableresp[i].duration + '</td>';
	        output += '</tr>';
	        output += '</tbody>';
	        output += ' </table>';
	       
	        
	        document.getElementById("buildpromotiontable").innerHTML = output;
	        
	   }
   }
    
}

$("#sub").on('click', function() {
	   if (confirm("Are you sure you want to promote this build!") == true) {
	       $.post('JenkinsController', {
	              buildname : buildnam
	          }, function(response) {
	              alert(response);
	          });
	      } 
	   });