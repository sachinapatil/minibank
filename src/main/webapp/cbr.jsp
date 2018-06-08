


<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<style type="text/css">

body{
margin:0;
padding:0;
line-height: 1.5em;
}

b{font-size: 110%;}
em{color: red;}

#maincontainer{
width: 840px; /*Width of main container*/
margin: 0 auto; /*Center container on page*/
}

#topsection{
background: #CCCCFF;
height: 90px; /*Height of top section*/
}

#topsection h1{
margin: 0;
padding-top: 15px;
}

#contentwrapper{
float: left;
width: 100%;
background: #3399FF;
height:500px;
}

#contentcolumn{
margin-left: 200px; /*Set left margin to LeftColumnWidth*/
}

#leftcolumn{
float: left;
width: 200px; /*Width of left column*/
height:500px;
margin-left: -840px; /*Set left margin to -(MainContainerWidth)*/
background: #C8FC98;

}

#footer{
clear: left;
width: 100%;
background: black;
color: #FFF;
text-align: center;
padding: 4px 0;
}

#footer a{
color: #FFFF80;
}

.innertube{
margin: 10px; /*Margins for inner DIV inside each column (to provide padding)*/
margin-top: 0;

}
li {display:inline;}
</style>

<script type="text/javascript">
/*** Temporary text filler function. Remove when deploying template. ***/
var gibberish=["This is just some filler text", "Welcome to Dynamic Drive CSS Library", "Demo content nothing to read here"]
function filltext(words){
for (var i=0; i<words; i++)
document.write(gibberish[Math.floor(Math.random()*3)]+" ")
}
</script>
<SCRIPT type="text/javascript"> 
   window.history.forward();
       function noBack() 
       { window.history.forward(); }
       </SCRIPT>
</head>
<body>
<div id="maincontainer">

<div id="topsection"><div class="innertube"><h1><ul>
<li><a href="index.jsp" rel="gotsubmenu[selected]"><img src="img/home.jpg" alt="Home" width="70" height="55" border="0" ></a></li>
<li><a href="index.jsp" rel="gotsubmenu"><img src="img/contact.jpg" alt="Contact Us" width="70" height="55" border="0" /></a></li>
<li><a href="index.jsp"><img src="img/registration.jpg" alt="REGITRATION" width="70" height="55" border="0" /></a></li>
</ul></h1></div></div>

<div id="contentwrapper">
<div id="contentcolumn">
<div class="innertube"><form method="post" action="Controller">
<img src="img/login.jpg" width="225" height="150" />  
 <span style="background-color: #FFCCCC">  <em><h3><font face="Times New Roman" size="+2" color="#000033">Products and Services</font></h3></em></span>
 <span style="background-color: #FF9933">  <h4><font face="Times New Roman" size="+1" color="#000000">Cheque Book Request</font></h4></span>
  You can request for a cheque book online. Cheque book can be requested for any of your Savings, Current, Cash Credit, and Over Draft accounts. You can opt for cheque books with 25, 50 or 100 cheque leaves. You can either collect it from branch or request your branch to send it by post or courier. You can opt to get the cheque book delivered at your registered address or you can provide an alternate address. Cheque books will be dispatched within 3 working days from the date of request.

Just log on to retail section of the Internet Banking site with your credentials and select the Cheque Book link under Requests tab. You can view all your transaction accounts. Select the account for which you require a cheque book, enter the number of cheque leaves required and the mode of delivery. Then, submit the same. </p>

<a href="services.jsp">BACK</a>

</div>
</div>
</div>
<div id="leftcolumn">
<div class="innertube"><em><h4><font face="Times New Roman" size="+2" color="grey">Service Offerings</font></h4></em>
	 <font face="Times New Roman" size="+1" color="black">
	 <ol type="disc">
	<li>Netbanking</li><br>
	<li>Bill Payment</li><br>
	<li>Online Shopping</li><br>
	<li>Mobile Banking Services</li><br>
	<li><a href="services.jsp"><h2>More About Products And Services</h2></a></li><br>
	</ol></div>
</div>


<div id="footer">INTERNET BANKING OF SR </div>

<!-- <a href="hello.html">SR</a></div>  -->
</div>
</body>
</html>