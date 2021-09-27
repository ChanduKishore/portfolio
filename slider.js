
const projectsNavBar =document.querySelector('.projects-nav');
let sliderX =0;
let refslider=0;

setNavBar();

window.addEventListener('resize',()=>{
	setNavBar();
		})

function setNavBar(){
	if(window.innerWidth >899){
		displayProjectNavBar()
	}else{removeNavBar()}
}
function displayProjectNavBar(){
			removeNavBar();
			const projects= document.querySelector('.projects-container');
			const nProjects = Math.floor(projects.scrollWidth/900);
		
			for(i=0;i < nProjects;i++){
				const ProjectsNavBtn =document.createElement('button');
				ProjectsNavBtn.classList.add('btn-inactive');
				projectsNavBar.appendChild(ProjectsNavBtn);
		
			}

			
			projects.scrollTo(sliderX,0);
			const projectNavBtns = document.querySelectorAll('.projects-nav button');

			changeBtnState(projectNavBtns);

			projectNavBtns.forEach((button, index)=>{
		
							button.addEventListener('click',(e)=>{
								sliderX =900*index;
								let direction;
								switch(true){
									case (sliderX > refslider):
									direction ='forward';
									break;
									case (sliderX < refslider):
									direction ='backward';
									break;
									case (sliderX === refslider):
									direction ='none';
									break;

								}
								 
								 if(direction!=='none'){
								 scroll(refslider,direction);}
								 refslider =sliderX;
								
								changeBtnState(projectNavBtns);
								disableBtns(projectNavBtns);
								
								
							})
						})
	

			function scroll(offset,direction){
				switch(direction){
					case 'forward':
					offset+=25;
					break;
					case 'backward':
					offset-=25;
					break;
				}
							
					changeScroll(offset);
					const scrolling  = setTimeout(scroll,10,offset,direction);
					console.log(sliderX,direction,offset,refslider);
					if(projects.scrollLeft === sliderX){
							clearTimeout(scrolling);
							enableBtns(projectNavBtns);
							}
			
			}
		 function changeScroll(offset){
				projects.scrollTo(offset,0);
			}



		}


		function removeNavBar(){

		while(projectsNavBar.firstChild){
			projectsNavBar.removeChild(projectsNavBar.firstChild);
		}
		}

	
	
		function changeBtnState(buttonList){
			buttonList.forEach((button, index)=>{

				if(index*900 === sliderX){
							button.setAttribute('class','btn-active');}
							else{button.setAttribute('class','btn-inactive');}
			})
		}

		function disableBtns(btns){

			btns.forEach(btn=>{
				btn.disabled = true;
			})

		}

		function enableBtns(btns){

			btns.forEach(btn=>{
				btn.disabled = false;
			})

		}