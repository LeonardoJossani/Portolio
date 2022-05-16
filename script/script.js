//navigation menu
const list = document.querySelectorAll('.list');

function activeLink(){
	list.forEach((item) => 
	item.classList.remove('active'));
	this.classList.add('active');
}

list.forEach((item) => 
item.addEventListener('click', activeLink));

//Functions para trocar as sections

function showHome(){
	document.getElementById("home_page").style.display = 'grid';
	document.getElementById("profile").style.display = 'none';
	document.getElementById("projects").style.display = 'none';
}

function showProfile(){
	document.getElementById("home_page").style.display = 'none';
	document.getElementById("profile").style.display = 'grid';
	document.getElementById("projects").style.display = 'none';
}

function showProjects(){
	document.getElementById("home_page").style.display = 'none';
	document.getElementById("profile").style.display = 'none';
	document.getElementById("projects").style.display = 'grid';
}

