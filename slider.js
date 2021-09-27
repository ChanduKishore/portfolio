let navBarStatus = (window.innerWidth > 899)? true : false;

setNavBar();

window.addEventListener('resize',()=>{
	setNavBar();
		})




function setNavBar(){
	if(navBarStatus){
		 displayProjectNavBar();
			navBarStatus=false;
				}
			else{
				removeNavBar();
			}
}

function displayProjectNavBar(){
	const projectsNavBar =document.querySelector('.projects-nav');
			const projects= document.querySelector('.projects-container');
			const nProjects = Math.floor(projects.scrollWidth/900);
		
			for(i=0;i < nProjects;i++){
				const ProjectsNavBtn =document.createElement('button');
				ProjectsNavBtn.classList.add('btn-inactive');
				projectsNavBar.appendChild(ProjectsNavBtn);
		
			}

			let sliderX =0;
			projects.scrollTo(sliderX,0);
			const projectNavBtns = document.querySelectorAll('.projects-nav button');

			changeBtnState();

			projectNavBtns.forEach((button, index)=>{
		
							button.addEventListener('click',(e)=>{
								let direction =(sliderX < 900*index)? 'forward': 'backward';
								scroll(sliderX,direction);
								sliderX =900*index;
								changeBtnState();
								
								
							})
						})
		

		}


		function removeNavBar(){

		while(projectsNavBar.firstChild){
			projectsNavBar.removeChild(projectsNavBar.firstChild);
		}
		}


	
			