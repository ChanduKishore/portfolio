
const projectsNavBar =document.querySelector('.projects-nav');
const projects= document.querySelector('.projects-container');
const nProjects = Math.floor(projects.scrollWidth/900);
let sliderX =0;
let refslider=0;
let counter=0;
let scrolling=false;

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
								counter=index;
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
	
				window.addEventListener('keydown',(e)=>{
					switch(e.key){
						case 'ArrowUp':
      					console.log('up',scrolling);

      					if(counter < nProjects-1 && scrolling===false){
      						direction='forward';
      						counter++;
      						sliderX =900*counter;
      						console.log('counter',counter);
      							scrolling=true;}
      						else{direction='none'}
				      	break;
				      	case 'ArrowDown':
				      	console.log('down',scrolling);
				      	if(counter>0 && scrolling===false){
				      		direction='backward';
					      	counter--;
					      	sliderX =900*counter;
					      scrolling=true;}
					      	else{direction='none'}
				      	break;
				      case 'ArrowLeft':
				      	direction='none';
				      	break;
				      	case 'ArrowRight':
				      	direction='none';
				      	break;
				      	
				      	
					}
					if(direction !='none'){
					scroll(refslider,direction);}
					refslider =sliderX;		
					changeBtnState(projectNavBtns);
					disableBtns(projectNavBtns);
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
					const Scrolling  = setTimeout(scroll,10,offset,direction);
					console.log(sliderX,direction,offset,refslider);
					if(projects.scrollLeft === sliderX){
							clearTimeout(Scrolling);
							enableBtns(projectNavBtns);
							scrolling=false;
							console.log(scrolling)
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