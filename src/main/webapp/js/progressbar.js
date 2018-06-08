$(document).ready(function() {
	jQuery.fn.extend({
		myProgress: function (val) {
			if(val <= 49)
				color = '#ff0000';
			else if(val > 49 && val <= 79)
				color = '#fbb812';
			else if(val > 79)
				color = '#8bd629';
	
			$(this).progressbar({
				value: val
			});
			progressbarValue = $(this).find( ".ui-progressbar-value" );
			progressbarValue.css({
				"background": color
			});
		}
	});
	/**student-statusprogressbar*****/
	$('#progressbarIctmarks').myProgress(80);
	$('#progressbarIctatt').myProgress(48);
	$('#progressbarspanishmarks').myProgress(75);
	$('#progressbarspanishatt').myProgress(33);
	$('#progressbarmathmarks').myProgress(40);
	$('#progressbarmathatt').myProgress(40);
	$('#progressbararabicmarks').myProgress(65);
	$('#progressbararabicatt').myProgress(90);
	$('#progressbarenglishmarks').myProgress(48);
	$('#progressbarenglishatt').myProgress(76);
	$('#progressbarfrenchmarks').myProgress(48);
	$('#progressbarfrenchatt').myProgress(76);
	/**student-statusprogressbar*****/
	/**student-statusprogressbar*****/
	$('#progressbarmarks1').myProgress(80);
	$('#progressbaratt1').myProgress(48);
	$('#progressbarsv1').myProgress(75);
	$('#progressbarmarks2').myProgress(80);
	$('#progressbaratt2').myProgress(48);
	$('#progressbarsv2').myProgress(75);
	$('#progressbarmarks3').myProgress(80);
	$('#progressbaratt3').myProgress(48);
	$('#progressbarsv3').myProgress(75);
	$('#progressbarmarks4').myProgress(80);
	$('#progressbaratt4').myProgress(48);
	$('#progressbarsv4').myProgress(75);
	$('#progressbarmarks5').myProgress(80);
	$('#progressbaratt5').myProgress(48);
	$('#progressbarsv5').myProgress(75);
	$('#progressbarmarks6').myProgress(80);
	$('#progressbaratt6').myProgress(48);
	$('#progressbarsv6').myProgress(75);
	$('#progressbarmarks7').myProgress(80);
	$('#progressbaratt7').myProgress(48);
	$('#progressbarsv7').myProgress(75);
	$('#progressbarmarks8').myProgress(80);
	$('#progressbaratt8').myProgress(48);
	$('#progressbarsv8').myProgress(75);
	$('#progressbarmarks9').myProgress(80);
	$('#progressbaratt9').myProgress(48);
	$('#progressbarsv9').myProgress(75);
	$('#progressbarmarks10').myProgress(80);
	$('#progressbaratt10').myProgress(48);
	$('#progressbarsv10').myProgress(75);
	$('#progressbarmarks11').myProgress(80);
	$('#progressbaratt11').myProgress(48);
	$('#progressbarsv11').myProgress(75);
	$('#progressbarmarks12').myProgress(80);
	$('#progressbaratt12').myProgress(48);
	$('#progressbarsv12').myProgress(75);
	
	
	/**student-statusprogressbar*****/
	/***compare progressbar***/
	$('#progressbarstu1sub1').myProgress(80);
	$('#progressbarstu1sub2').myProgress(48);
	$('#progressbarstu1sub3').myProgress(75);
	$('#progressbarstu1sub4').myProgress(80);
	$('#progressbarstu1sub5').myProgress(48);
	$('#progressbarstu1sub6').myProgress(75);
	$('#progressbarstu1sub7').myProgress(80);
	$('#progressbarstu1sub8').myProgress(48);
	$('#progressbarstu1sub9').myProgress(75);
	$('#progressbarstu1sub10').myProgress(80);
	
	$('#progressbarstu2sub1').myProgress(80);
	$('#progressbarstu2sub2').myProgress(48);
	$('#progressbarstu2sub3').myProgress(75);
	$('#progressbarstu2sub4').myProgress(80);
	$('#progressbarstu2sub5').myProgress(48);
	$('#progressbarstu2sub6').myProgress(75);
	$('#progressbarstu2sub7').myProgress(80);
	$('#progressbarstu2sub8').myProgress(48);
	$('#progressbarstu2sub9').myProgress(75);
	$('#progressbarstu2sub10').myProgress(80);
	
	$('#progressbarstu3sub1').myProgress(80);
	$('#progressbarstu3sub2').myProgress(48);
	$('#progressbarstu3sub3').myProgress(75);
	$('#progressbarstu3sub4').myProgress(80);
	$('#progressbarstu3sub5').myProgress(48);
	$('#progressbarstu3sub6').myProgress(75);
	$('#progressbarstu3sub7').myProgress(80);
	$('#progressbarstu3sub8').myProgress(48);
	$('#progressbarstu3sub9').myProgress(75);
	$('#progressbarstu3sub10').myProgress(80);
	
	$('#progressbarstu4sub1').myProgress(80);
	$('#progressbarstu4sub2').myProgress(48);
	$('#progressbarstu4sub3').myProgress(75);
	$('#progressbarstu4sub4').myProgress(80);
	$('#progressbarstu4sub5').myProgress(48);
	$('#progressbarstu4sub6').myProgress(75);
	$('#progressbarstu4sub7').myProgress(80);
	$('#progressbarstu4sub8').myProgress(48);
	$('#progressbarstu4sub9').myProgress(75);
	$('#progressbarstu4sub10').myProgress(80);
    } 
); 