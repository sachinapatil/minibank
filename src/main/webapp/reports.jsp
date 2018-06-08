<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<title>Dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
<link rel="shortcut icon" href="images/mobile/favicon1.ico">
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/bootstrap-datetimepicker.css" rel="stylesheet">
<link href="fonts/font-awesome.css" rel="stylesheet">
<link href="css/theme.css" rel="stylesheet">
<link href="css/animate.css" rel="stylesheet">
<link href="css/jquery-ui.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/navCollapse.js"></script>
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="scripts/respond.min.js"></script>
    <![endif]-->

<script src="js/jquery.js"></script>
<script src="js/easyResponsiveTabs.js"></script>

<!--Custome Dropdown JS-->
<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="js/jquery.customSelect.js"></script>

<script type="text/javascript" src="js/jquery-ui.js"></script>
<script type="text/javascript" src="js/custom.js"></script>
<script type="text/javascript" src="js/jquery.tablesorter.min.js"></script>
<script type="text/javascript" src="js/jquery.tinyscrollbar.min.js"></script>


<script type="text/javascript" src="js/progressbar.js"></script>



<!--/Custome Dropdown JS-->
<script>
	$(document).ready(function() {
		$('.scrollbar2').tinyscrollbar();
	}

	);
	function resize(id) {
		var heights = window.innerHeight;
		var width = window.innerWidth;
		document.getElementById(id).style.height = heights - 100 + "px";
		document.getElementById(id).style.width = width - 150 + "px";
	}
	resize();
	window.onresize = function() {
		resize();
	}; 

</script>
<!--  <style>
iframe {
	position: relative;
	display: block;
	border: none;
	height: 100%;
	width: 100%;
}
</style>-->
<style>
@media screen and (max-width: 768px) {
    .row-offcanvas {
        position: relative;
        -webkit-transition: all 0.25s ease-out;
        -moz-transition: all 0.25s ease-out;
        transition: all 0.25s ease-out;
    }
    .row-offcanvas-left
  .sidebar-offcanvas {
        left: -33%;
    }
    .row-offcanvas-left.active {
        left: 33%;
    }
    .sidebar-offcanvas {
        position: absolute;
        top: 0;
        width: 33%;
        margin-left: 10px;
    }
}

.nav-sidebar {
    background-color: white;
    margin-right: 35px;
    margin-bottom: 20px;
    margin-left: -15px;
    margin-top: 20px;
}

.nav-sidebar>li>a {
    padding-right: 20px;
    padding-left: 20px;
}

.nav-sidebar>.active>a {
    color: #fff;
    background-color: #428bca;
}


</style>
 
</head>
<body >

<!--header-->
	<div class="header hdCol">
		<div class="container">
			<div class="row bodBot marlftlogo">
				<div class="LogoGroup">
					<a href="reports.jsp"> <span class="parentLogo marTop5 "><img
							class="cntrTxt" src="img/oracle-logo.PNG" alt="verizon" /></span></a>
							
							
				</div>
				<div class="logoUseroptbox">
					<div class="userOption">
				
						<ul>
							<!-- <li class="userImg"><img src="img/man_img.png" alt="verizon" />
							</li> -->
							 <li class="name "> 
										<a href="home.html" class="btn btn-danger btnStyred">Logout</a>
						</ul>
						
					</div>
				
				</div>
			</div>
		</div>
	</div>		

<!--content-->
	<div class="container">
		<div class="row">
			<div>
			<!-- new--> 
			<div id="carousel-example-generic1" class="carousel slide" data-ride="carousel" data-interval="false">
			<div class="carousel-inner" role="listbox">
			
			<div class="item active" style="width:1165px;">
				<ul class="nav nav-tabs dshnavTop " role="tablist">
				
					<li class="active" role="presentation" id="lidash"><a data-toggle="tab"
						role="tab " aria-controls="dash" href="#dash"
						aria-expanded="false" class="dshnavTxt active">Home</a></li>
						
					  <li class="" role="presentation" id="lialm"><a data-toggle="tab"
						role="tab" aria-controls="alm" href="#alm" aria-expanded="false"
						class="dshnavTxt" onclick="resize('alm');">Banking</a></li> 
			

					<li class="" role="presentation" id="libuild_test"><a data-toggle="tab"
						role="tab" aria-controls="build_test" href="#build_test" aria-expanded="false"
						class="dshnavTxt" onclick="resize('build_test');">Credit Cards</a></li>
				
				
							<li class="" role="presentation" id="licq"><a data-toggle="tab"
						role="tab" aria-controls="cq" href="#cq" aria-expanded="false"
						class="dshnavTxt" onclick="resize('cq');">Loans
							</a></li>		
					
					<li class="" role="presentation" id="lict"><a data-toggle="tab"
						role="tab" aria-controls="st" href="#st" aria-expanded="false"
						class="dshnavTxt" onclick="resize('st');">Home Loans
							</a></li>
						
							</ul>
							</div>
							
		</div>              
              </div>	
			
<!-- build_test -->	<div id="carousel-example-generic1" class="carousel slide" data-ride="carousel" data-interval="false">
			<div class="carousel-inner" role="listbox">
					<div role="tabpanel" class="tab-pane marTop" id="build_test">
						
							<object data="http://localhost:8081/" width="100%" height="100%" type="Text/html">
							<param name="allowFullScreen" value="true"></param>
							<embed src="http://localhost:8081/" width="100%" height="100%" allowFullScreen="true">
							
							</embed>
						</object>
				</div>	
					<!-- ALM -->
					<div role="tabpanel" class="tab-pane marTop" id="alm">
						
							<object data="http://jira.oraclecorp.com/" width="100%" height="100%" type="Text/html">
							<param name="allowFullScreen" value="true"></param>
							<embed src="http://jira.oraclecorp.com/" width="100%" height="100%" allowFullScreen="true">
							
							</embed>
						</object>
				</div>	
					
					<!-- Code quality -->
					
				<div role="tabpanel" class="tab-pane marTop" id="cq">
						
							<object data="http://localhost:9000/" width="100%" height="100%" type="Text/html">
							<param name="allowFullScreen" value="true"></param>
							<embed src="http://localhost:9000/" width="100%" height="100%" allowFullScreen="true">
							
							</embed>
						</object>
				</div>	
					
					<!-- Security Testing -->
					
					<div role="tabpanel" class="tab-pane marTop" id="st">
						 
						  <object data="http://localhost:9000" width="100%" height="100%" type="Text/html">
							
							<param name="allowFullScreen" value="true"></param>
							  <embed src="http://localhost:9000" width="100%" height="100%" allowFullScreen="true"> 
														
							</embed>
						</object>
					</div>
					</div>
					</div>
                    
					<!--  Instrumentation Test-->
					
					<!-- Load Test -->
                    
                        <div role="tabpanel" class="tab-pane marTop" id="bpromotion">
                        <div class="container">
                            <div class="row row-offcanvas row-offcanvas-left">
                              
                                
                                <div class="col-xs-12 col-sm-10 col-md-10" id="bpr"
                                    style="height: 500px; margin-top: 20px; margin-left: 40px;">
                         
     
                                                
                                     <div class="table-responsive" id="tabledeployment">
                                     
                                     </div>      
                                     
                                     <div class="table-responsive" id="tabledependency">
                                     
                                     </div>       
                          

                                    <hr />
         
                                </div>
                                
                                <div class="col-xs-12 col-sm-10 col-md-5" id="pradmin" style="height: 500px; margin-top: 20px; margin-left: 40px;">
                                    As a project admin you can promote builds, configure projects, assign permissions to users
                                </div>
                                <div id="wait" style="display:none;width:69px;height:89px;border:1px solid black;position:absolute;top:15%;left:50%;padding:2px;"><img src='img/loader.gif' width="64" height="64" /><br>Loading..</div>
                                
                            </div>
                        </div>
                    </div>
		
			</div>

		</div>

</body>
</html>