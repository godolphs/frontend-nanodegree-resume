var bio = {
	"name": "Michael A. Muller",
	"role": "Web Developer",
	"welcomeMessage": "Hello! Thank you for viewing my resume.",
	"picture": "images/me.jpg",
	"skills": ["Web Programming", "GIT Hub", "Great Team Player", "Finance Background"],
	"contacts": { 
		"emailAddress": "mikemuller@optonline.net",
		"mobileNum": "973-713-7813",
		"twitter": "mikemuller003",
		"github": "godolphs",
		"physicalLocation": "Branchburg, NJ"
	}
};

var education = {
	"schools": [
		{
		"name": "Rider University",
		"location": "Lawrenceville, NJ",
		"degree": "Bachelor of Science",
		"dates": "1989",
		"majors": "Accounting, Computer Programming and Decision Sciences"
		}
	],

	"onlineCourses": [
		{
		"title": "Front-End Web Developer",
		"school": "Udacity",
		"dates":  "November 2014 - January 2015",
		"url": "https://www.udacity.com/course/nd001"
		},

		{
		"title": "Intro to jQuery",
		"school": "Udacity",
		"dates":  "January 2015",
		"url": "https://www.udacity.com/course/ud245"
		},

		{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates":  "December 2014",
		"url": "https://www.udacity.com/course/ud804"
		},

		{
		"title": "How to Use Git and GitHub",
		"school": "Udacity",
		"dates":  "December 2014",
		"url": "https://www.udacity.com/course/ud775"
		},
		
		{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates":  "November 2014",
		"url": "https://www.udacity.com/course/ud304"
		}

	],

	"homeCourses": [
		{
		"title": "Sams Teach Yourself SQL in 10 Minutes",
		"school": "SAMS",
		"dates":  "2014"
		},

		{
		"title": "Head First JavaScript",
		"school": "O'Reilly/Morrison",
		"dates":  "2013"
		},
		
		{
		"title": "Head First HTML with CSS & XHTML",
		"school": "O'Reilly/Elisabeth Freeman & Eric Freeman",
		"dates":  "2010"
		}
	]
};

var projects = {
	"projects": [
		{
		"title": "Website Mockup",
		"dates": "November 2014",
		"description": "Developed webpage from sample design.",
		"images": ["images/mug.png"]
		},
			
		{
		"title": "NJ Mystery Company Website",
		"dates": "June 2014",
		"description": "Created new website for new business.",
		"images": ["images/njmc.jpg"]
		},

		{
		"title": "Somerset Vally Players",
		"dates": "March 2008",
		"description" : "Programmed and implemented online theater ticketing system.  Also mainted pre-designed organization website.",
		"images": ["images/svp.jpg"]
		}
	]
};

var work = {
	"jobs": [
		{
		"employer": "AT&T", 
		"title": "Lead Financial Analyst",
		"dates": "2005 - present",
		"location": "Bedminster, NJ",
		"description": "Responsible for developement of short-term and long-term financial planning for two supply chain organizations.  Also repsonsbile for html coding of there financial team websites."
		},

		{
		"employer": "AT&T", 
		"title": "Contract Employee - Budget Manager",
		"dates": "2003 - 2005",
		"location": "Bedminster, NJ",
		"description": "Responsible for developement of budgets and monthly financial reporting."
		},
		
		{
		"employer": "Alliente", 
		"title": "Assistant Controller",
		"dates": "2000 - 2003",
		"location": "Morris Plains, NJ",
		"description": "Responsible for monthly bookclose activities and annual budgeting process."
		},

		{
		"employer": "Lucent Technologies", 
		"title": "SAP Implementation Manager",
		"location": "Greensboro, NC",
		"dates": "1996 - 2000",
		"description": "Interfaced between project management, finance orgnizations, SAP programmers, and conlsutants to ensure all financial requirements were identified and programmed appropriately in the Lucent Technoligies implementation of the SAP software."
		},

		{
		"employer": "AT&T", 
		"title": "Corporate Reporting and Planning Manager",
		"dates": "1988 - 1996",
		"location": "Morristown, NJ",
		"description": "Responsible for all monthly reporting and annual financial planning."
		}
	] 
};


// Displyay Bio Section //

var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic=HTMLbioPic.replace("%data%", bio.picture);
var formattedMessage=HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedEmail=HTMLemail.replace("%data%", bio.contacts.emailAddress);
var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobileNum);
var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.physicalLocation);
var formattedTwitter=HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGitHub=HTMLgithub.replace("%data%",bio.contacts.github);
var formattedSkills=HTMLskills.replace("%data%",bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGitHub);
$("#header").append(formattedBioPic);
$("#header").append(formattedMessage);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

// End Display Bio Section //


// Display Work Section //

function displayWork() {

	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedWorkDates);
	
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedWorkLocation);

	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedWorkDescription);	

	}
}

displayWork();

// End Display Work Section //

// Display Projects Section //

function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images);
				var formattedImage=HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
		}
	}
}

displayProjects();

// End Display Projects Section //

// Display Education Section //

function displayEducation() {

	for (school in education.schools) {
	
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;

		$(".education-entry:last").append(formattedSchoolTitle);
	

		var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolCity);
	
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
	
		var formattedMajor=HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);

	}

	if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineClasses);


	for (online in education.onlineCourses) {
		
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		var formattedOnlineClass = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineClass);
	
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		$(".education-entry:last").append(formattedOnlineDates);
	
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
		$(".education-entry:last").append(formattedOnlineURL);
	
	}
}

	if (education.homeCourses.length > 0) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLhomeClasses);


	for (home in education.homeCourses) {
		
		var formattedHomeTitle = HTMLhomeTitle.replace("%data%", education.homeCourses[home].title);
		var formattedHomeSchool = HTMLhomeSchool.replace("%data%", education.homeCourses[home].school);
		var formattedHomeClass = formattedHomeTitle + formattedHomeSchool;
		$(".education-entry:last").append(formattedHomeClass);
	
		var formattedHomeDates = HTMLhomeDates.replace("%data%", education.homeCourses[home].dates);
		$(".education-entry:last").append(formattedHomeDates);
		}
	}
}

displayEducation();

// End Display Education Section //

// Add Map //

$("#mapDiv").append(googleMap);


// Add Contact Information to Footer //

$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedLocation);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGitHub);

/* function = inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" " +name[1];
}

$("#main").append(internationalizeButton);
*/