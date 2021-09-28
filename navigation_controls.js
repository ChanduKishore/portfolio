const body= document.querySelector('body');
	const readMoreBtns =document.querySelectorAll('.read-more button');
	const projectDesc =document.querySelectorAll('.description');
	const  pages =document.querySelectorAll('.page') ;
	const getInTouch =document.querySelector('.get-in-touch');
	const arrow =document.querySelectorAll('.messageBar .arrow');
	const nav=document.querySelector('nav');
	const navRight =document.querySelector('.nav-right');
	const navleft =document.querySelector('.nav-left');
	const navMessages =document.querySelectorAll('.nav-message');
	
	arrow[0].textContent='';

	const messageBar = document.querySelector('.messageBar');

	let currentPage = pages[0] ;

	let previousPage=0;
	let nextPage=pages[1];

	let touchstartX = 0;
	let touchendX = 0;
	let gesture;

	
changeNav();

if (!("ontouchstart" in document.documentElement)){ 

		messageBar.parentNode.removeChild(messageBar);
		
	}else{
		nav.parentNode.removeChild(nav);
		navMessages.forEach(message=>{message.parentNode.removeChild(message)});
	}
		

getInTouch.addEventListener('click',()=>{
	nextPage=pages[2];
	next();
	previousPage=pages[0];
	arrow[0].textContent='‹';
	arrow[1].textContent='';
	changeNav();
})

function intilisePage(page){
	let pageIndex =[...pages].indexOf(page);
	currentPage=pages[pageIndex];
	previousPage =pages[pageIndex - 1];
	nextPage =pages[pageIndex + 1];
currentPage.style.top='0';
previousPage.style.top='-1000vh';
nextPage.style.top='-1000vh';
}

window.addEventListener('keydown',(e)=>{
      switch(e.key){
      	case 'ArrowRight':
      	console.log('right');
      	gesture ='swiped left!';
      	changePage();
      	changeNav();
      	break;
      	case 'ArrowLeft':
      	console.log('left');
      	gesture ='swiped right!';
      	changePage();
      	changeNav();
      	break;
      	
      }
   })

function handleGesture() {
  if (touchstartX - touchendX > 100 ) {
  	gesture ='swiped left!';
  	
  }
  if (touchendX - touchstartX > 100) {
  	gesture ='swiped right!';
  	
  }

}
	window.addEventListener('touchstart',(e)=> {
		 touchstartX = e.changedTouches[0].screenX;
		 
		})
	

window.addEventListener('touchend',(e)=> {
	 touchendX = e.changedTouches[0].screenX;
	handleGesture()
	changePage();
	gesture='';
	
})


function changePage(){

	switch(gesture){
		case 'swiped left!':
		if([...pages].indexOf(currentPage)!== pages.length-1){

			 next();
			if( messageBar.parentNode!==null){
				messageBar.parentNode.removeChild(messageBar);
			}

		}
		break;
		case 'swiped right!':
		if([...pages].indexOf(currentPage)) {
			previous();
		if( messageBar.parentNode!==null){
				messageBar.parentNode.removeChild(messageBar);
			}
}
		break;
	}

	
}

function next(){

	currentPage.style.animationName='slide-leave-rl';
	nextPage.style.animationName='slide-enter-rl';

	previousPage = currentPage;
	currentPage =nextPage;
	let currentPageIndex =[...pages].indexOf(currentPage);
	let nextPageIndex = currentPageIndex +1
	nextPage= pages[nextPageIndex];

		
	}


function previous(){
	
		currentPage.style.animationName='slide-leave-lr';
		previousPage.style.animationName='slide-enter-lr';

		
		currentPage =previousPage;
		let currentPageIndex =[...pages].indexOf(currentPage);
		nextPage =pages[currentPageIndex+1];
		previousPage= pages[currentPageIndex-1]
	
	}

	navRight.addEventListener('click',()=>{
		gesture='swiped left!';
	changePage();
	changeNav();
})

	navleft.addEventListener('click',()=>{
		gesture='swiped right!';
		changePage();
		changeNav();
	})



function changeNav(){

	if(currentPage===pages[0] ){
		navleft.style.visibility='hidden';
		navRight.style.visibility='visible';
	}else if(currentPage === pages[pages.length -1]){
		navRight.style.visibility='hidden';
		navleft.style.visibility='visible';
	}
	else{
		navleft.style.visibility='visible';
		navRight.style.visibility='visible';
	}
}

readMoreBtns.forEach((readMore,index)=>{

	readMore.addEventListener('click',()=>{

	if(readMore.textContent==='read more'){
	projectDesc[index].style.animationName='read-more';
readMore.textContent='read less';}
	else if(readMore.textContent==='read less'){
		projectDesc[index].style.animationName='read-less';
		readMore.textContent='read more';

	}
	console.log('read-more');

})
})


