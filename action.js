$(document).ready(function(){
    function fillNav(id,list){
    	$.each(list, function(key,value) 
		{
	      $(id).append($('<li><a href=' + key + '>' + '<h3 class="nav-h3-style">' + value + '</h3></a></li>'));
	    });
    }
	function fill(arr,id){
		$.each(arr, function(i,key) 
		{
	      $(id).append($(key));
	    });
	}
	//filling the navigation of the resume page.
	var resumeNavList = {"https://nahlamoohamed.github.io/NahlaMohamed/index.html":"About","https://nahlamoohamed.github.io/NahlaMohamed/work.html":"Work","#Work":"Work Experience","#Education":"Education","#Skills":"Skills","#Projects":"Projects","#Certificates":"Certificates","#Activities":"Activities"};
	fillNav('#resume_nav',resumeNavList);
	//email navigation 
	var emailNavList = {"https://nahlamoohamed.github.io/NahlaMohamed/index.html":"About","https://nahlamoohamed.github.io/NahlaMohamed/Resume.html":"Resume","https://nahlamoohamed.github.io/NahlaMohamed/work.html":"Work"};
    fillNav("#email_nav",emailNavList);
    fillNav("#home_nav",emailNavList);
    //work navigation
    var workNavList = {"https://nahlamoohamed.github.io/NahlaMohamed/index.html":"About","https://nahlamoohamed.github.io/NahlaMohamed/Resume.html":"Resume","#logo-designs":"Logo Designs","#websites":"Websites","#event-banners":"Event banners"};
    fillNav("#work_nav",workNavList);


    //filling the work experience row
	var work_row = ["<h4><strong>Business analyst at Mokalmat LLC</strong> – (January 2019 – Present)</h4><h5>Responsibilities:</h5><ul><h5><li>Planning and monitoring software agile projects </li></h5><h5><li>Requirements management, communication and analysis</li></h5><h5><li>Part time angular developer.</li></h5></ul>","<h4><strong>Junior business intelligence developer at Goodnews4me Cairo, Egypt (September 2017 - November 2018)</strong></h4><h5>Responsibilties:</h5><ul><h5><li>Generate dashboards and reports using SAP business intelligence tools (SAP IDT-SAP WebI) on Oracle database.</li></h5><h5><li>Generate dashboards and reports using Oracle business intelligence publisher on Oracle database.</li></h5><h5><li>I do a lot of fun stuff using R programming language such as:<ul><li>Shiny applications<a href='https://nahlamoohamed.shinyapps.io/twitter_search/' >Click here for example</a></li></h5><li>Desktop widget applications.</li><li>Data cleaning.</li></ul></li></h5></ul>","<h4><strong>Internship at IBM Egypt</strong> – (July 2016– August 2016)</h4><h5>Technologies/tools/languages used:</h5><ul><h5><li>The project was about building a parser to parse the <abbr title='Web services definition language'>WSDL</abbr>files into more human readable kind of file.</li></h5><h5><li>My role was manually testing the project</li></h5><h5><li>IBM bluemix, Java.</li></h5></ul>"];
    fill(work_row,'#work_row');
    //Filling the skills rows
    var languages = ["<div class='row'><div class='col-sm-3'><h5><li>Arabic (Mother tongue)</li></h5></div><div class='col-sm-4'><h5><progress value='100' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>English (Fluent)</li></h5></div><div class='col-sm-4'><h5><progress value='90' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>French (Beginner)</li></h5></div><div class='col-sm-4'><h5><progress value='40' max='100'></progress></h5></div></div>"];
    fill(languages,'#langs');
    var proLangs = ["<div class='row'><div class='col-sm-3'><h5><li>Java (Proficient)</li></h5></div><div class='col-sm-4'><h5><progress value='80' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>R (Proficient)</li></h5></div><div class='col-sm-4'><h5><progress value='100' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>SQL (Proficient)</li></h5></div><div class='col-sm-4'><h5><progress value='90' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>Angular (Prior experience)</li></h5></div><div class='col-sm-4'><h5><progress value='50' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>C++ (Proficient)</li></h5></div><div class='col-sm-4'><h5><progress value='70' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>JavaScript (Prior experience)</li></h5></div><div class='col-sm-4'><h5><progress value='70' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>Neo4j (Prior experience)</li></h5></div><div class='col-sm-4'><h5><progress value='60' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>Python (Prior experience)</li></h5></div><div class='col-sm-4'><h5><progress value='60' max='100'></progress></h5></div></div>"];
    fill(proLangs,'#pro_lang');
    var tools = ["<div class='row'><div class='col-sm-3'><h5><li>Adobe photoshop (Proficient)</li></h5></div><div class='col-sm-4'><h5><progress value='90' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>SAP BI (Proficient)</li></h5></div><div class='col-sm-4'><h5><progress value='90' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>Oracle BIEE12c (Proficient)</li></h5></div><div class='col-sm-4'><h5><progress value='90' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>Microsoft SSIS(Prior experience)</li></h5></div><div class='col-sm-4'><h5><progress value='50' max='100'></progress></h5></div></div>"];
    fill(tools,'#tools');
    var markupLang = ["<div class='row'><div class='col-sm-3'><h5><li>HTML (Proficient)</li></h5></div><div class='col-sm-4'><h5><progress value='90' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>CSS (Proficient)</li></h5></div><div class='col-sm-4'><h5><progress value='90' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>Bootstrap (Proficient)</li></h5></div><div class='col-sm-4'><h5><progress value='80' max='100'></progress></h5></div></div>","<div class='row'><div class='col-sm-3'><h5><li>SASS (Prior experience)</li></h5></div><div class='col-sm-4'><h5><progress value='70' max='100'></progress></h5></div></div>"];
    fill(markupLang,'#mark_up');
    //filling the projects row
    var projects = ["<li><h4><strong>Graduation project</strong></h4></li><h5><dd>Smart meters data analytics web application.</dd></h5><h5><dd>Smart meters are electronic devices that track and record customers' home electricity use, the web application is intended for the company of the smart meters to</dd></h5><ul><li><h5>View all the data of any customer that own a smart meter</h5></li><li><h5>Visualize the data with charts</h5></li><li><h5>Check if there are issues at any place using a map with markers that show the places of the issues</h5></li><li><h5>Show a heat map with all the consumptions of the smart meters</h5></li><li><h5>Show a plot chart with outliers of the abnormal consumption</h5></li></ul><h5><strong>Tools/Languages used:</strong></h5><ul><h5><li>R is used for the manipulation of the data and generating the charts.</li></h5><h5><li>RCaller is used as a bridge between R and Java.</li></h5><h5><li>Google Maps API used for showing the maps.</li></h5><h5><li>The web application is mainly built with HTML, CSS and Java.</li></h5><h5><li>Databases are handled with MySQL.</li></h5><h5><li>All the designs are made with Adobe Photoshop.</li></h5></ul><h5><strong>You can check the user interface only</strong> <a href='https://nahlamoohamed.github.io/SmartMeters/' >here</a>.</h5>",
		    "<li><h4>Marketing Website using: </h4></li><ul><h5><li>HTML & CSS</li></h5><h5><li>JavaScript</li></h5><h5><li><a href='https://nahlamoohamed.github.io/NHandmadeCrafts/' >Click here to see it.</a></li></h5></ul>",
		    "<li><h4>Javascript training web pages using: </h4></li><ul><h5><li>HTML & CSS</li></h5><h5><li>JavaScript</li></h5>
		    <h5><li><a href='https://nahlamoohamed.github.io/nightanday/' >Click here to see the first one.</a></li></h5>
		    <h5><li><a href='https://nahlamoohamed.github.io/musicbox/' >Click here to see the second one.</a></li></h5>
		    <h5><li><a href='https://nahlamoohamed.github.io/cardesigner/' >Click here to see the third one.</a></li></h5>
		    <h5>Todo task application: <li><a href='https://nahlamoohamed.github.io/Todo/' >click here to see the fourth one.</a></li></h5>
		    <h5>Word length calculator: <li><a href='https://nahlamoohamed.github.io/Word-Count/' >click here to see the fifth one.</a></li></h5></ul>",
		    "<li><h4>An online resume for a friend using:</h4></li><ul><h5><li>HTML</li></h5><h5><li>CSS</li></h5><h5><li><a href='https://nahlamoohamed.github.io/Mai-Ahmed/' >Click here to see it.</a></li></h5></ul>",
		    "<li><h4>Shortest path web application to solve the travel salesman problem using:</h4></li><ul><h5><li>Google maps API</li></h5><h5><li>Google fusion tables</li></h5><h5><li>JavaScript</li></h5></ul>",
		    "<li><h4>Movie rental web application using:</h4></li><ul><h5><li>Java</li></h5><h5><li>JavaScript</li></h5><h5><li>HTML</li></h5><h5><li>CSS</li></h5></ul>",
		    "<li><h4>Backend of location based social networking android application using:</h4></li><ul><h5><li>Java</li></h5><h5><li>Web services</li></h5></ul>",
		    "<li><h4>Business intelligence social media listener web application that gets the data from the social media and chart the insights of this data using:</h4></li><ul><h5><li>Twitter API</li></h5><h5><li>Facebook API</li></h5><h5><li>Google+ API</li></h5><h5><li>YouTube API</li></h5><h5><li>R (Shiny - Plotly)</li></h5><h5><li>Oracle database</li></h5></ul>",
		    "<li><h4>Creative sales solution website for facilitating data entry, data visualizations and report generation using:</h4></li><ul><h5><li>R (Shiny - Plotly)</li></h5><h5><li>Oracle database</li></h5></ul>",
		    "<li><h4>Health information network analysis and design containing:</h4></li><ul><h5><li>Class diagram</li></h5><h5><li>Relational database</li></h5><h5><li>Use case diagrams</li></h5><h5><li>Sequence diagrams</li></h5><h5><li>Activity diagrams</li></h5><h5><li>User interfaces and mockups</li></h5><h5><li>Architectural design</li></h5><h5><li><abbr title='Business Process Model and Notation'>BPMN</abbr> diagram</li></h5></ul>",
		    "<li><h4>Implemented using Java data mining algorithms:</h4></li><ul><h5><li>K-means clustering algorithm</li></h5><h5><li>Bayesian classifier</li></h5><h5><li>K-nearest algorithm</li></h5></ul>"];
    fill(projects ,'#projects');
	var certificates =["<h5><li>Completed introduction to project management course on <a href='https://www.udemy.com/project-management/learn/v4/overview'>Udemy</a></li>.</h5>",
			"<h5><li>Completed data analyst path course using R programming language on <a href='https://www.dataquest.io/path/data-analyst'>DataQuest</a></li></h5>",
			   "<h5><li>Completed Bertelsmann Data Science Challenge Scholarship Course on Udacity.</li></h5>",
			   "<h5><li>Completed Introduction to jQuery course on <a href='https://www.codecademy.com/learn/learn-jquery' >Codeacademy</a></li></h5>",
			   "<h5><li>Completed JavaScript Basics course on <a href='https://in.udacity.com/course/javascript-basics--ud804'>Udacity</a></li></h5>",
			   "<h5><li>Completed SAP BusinessObjects Business Intelligence course on <a href='https://www.udemy.com/sap-businessobjects-business-intelligence-an-introduction/learn/v4/overview'>Udemy</a></li></h5>",
			   "<h5><li>Completed R programming language course on <a href='https://www.coursera.org/learn/r-programming' >Coursera</a></li></h5>",
			   "<h5><li>Completed web development course on <a href='https://www.codecademy.com/learn/make-a-website'>Codeacademy</a></li></h5>",
			   "<h5><li>Completed CSS course on <a href='https://www.codecademy.com/learn/learn-css' >Codeacademy</a></li></h5>",
			   "<h5><li>Completed HTML course on <a href='https://www.codecademy.com/learn/learn-html' >Codeacademy</a></li></h5>",
			   "<h5><li>Completed SASS course on <a href='https://www.codecademy.com/learn/learn-sass' >Codeacademy</a></li></h5>",
			   "<h5><li>Completed big data developer course from <a href='https://www-03.ibm.com/services/learning/ites.wss/zz-en?pageType=badges&id=431cf5b7-ff06-4a15-817d-c56c733aa645' >IBM</a>.</li></h5>",
			   "<h5><li>Completed a C++ course from <a href='http://www.pitechnologies.net/' >PiTechnologies</a> group.</li></h5>",
			   "<h5><li>Completed 7 levels English course in <abbr title='Ministry of defence language institute'><a href='http://www.modli.edu.eg/' >MODLI</a></abbr></li></h5>"];
	fill(certificates,"#certificates");

});
