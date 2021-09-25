
const personName = document.querySelector('.name');
	personName.textContent='';
const jobRole = document.querySelector('.job-title');
	jobRoleText=jobRole.textContent;
	jobRole.textContent='';


	let i=-1;
	let name;
	let typeSpeed=45;
	let stages=[];
	function display(){
		
		let string ='Ch&u Kish|e';
		name=[];

		setTimeout(typingEffect,2000,jobRole,jobRoleText);
		const titleAnimation =setInterval(stage,12*typeSpeed);
			function stage(){
				switch(stages.length){
				case 0:
				insert(string,string.length);
				break;
				case 1:
				insert('...',3);
				break;
				case 2:
				move('left','e');
				break;
				case 3:
				move('right','.');
				break;
				case 4:
				remove('...',3);
				break;
				case 5:
				insert('.?',2);
				break;
				case 6:
				remove('.?',1);
				break;
				case 7:
				move('left','|');
				break;
				case 8:
				remove('|',1);
				break;
				case 9:
				insert('or',2);
				break;
				case 10:
				move('left','K');
				break;
				case 11:
				move('left','&');
				break;
				case 12:
				remove('&',1);
				break;
				case 13:
				insert('and',3);
				break;
				case 14:
				move('right','e');
				break;
				case 15:
				end();
				break;
				
			}
			console.log('k')
		}

		
		function move(direction,char){
			count = name.lastIndexOf(char)+1;
			manuplate(direction);
			count--;
			const moving = setTimeout(move,typeSpeed,direction,char);
					
				if(count === i){
					clearTimeout(moving);
					stages.push('moveto '+char+' complete');
					}
				
				}

		function remove(word,len,ref){
				if(word.length === len){
					ref= word;
				}
			manuplate('delete');
					word=word.slice(1);
			const removing = setTimeout(remove,typeSpeed,word,len,ref);

			if(!word){
				clearTimeout(removing);
				stages.push(ref + ' removed');
					

			}
		}
			

		function insert(word,len,ref){
				if(word.length === len){
					ref = word;
				}

			manuplate('type',word[0]);
			word=word.slice(1);

			const typing =setTimeout(insert,typeSpeed,word,len,ref);
			if(!word){
				clearTimeout(typing);
				stages.push( ref+' inserted');
				

			}

		}	

		function manuplate(operation,char){
			
		switch(operation){
			case 'right' :
				i+=1;
				break;
			case 'left':
				i-=1;
				break;
			case 'delete' :
				name.splice(i,1);
				i--;
				break;
			case 'type':
				name.splice(i+1,0,char);
				i++;
				break;	}
		
		displayChange(name);	

	}
		

				function displayChange(name){
					personName.textContent='';
					

							name.forEach((letter,index)=>{
								const span =document.createElement('span');
								span.textContent=letter;

								personName.appendChild(span);
								if(i === index){
									span.classList.add('cursor');
									}
									
							})
						}
	
		
			function end(){
				const cursor= document.querySelectorAll('.name span');

				cursor.forEach(span =>{
					span.classList.remove('cursor');
				})

				
				clearInterval(titleAnimation);
			}


			function typingEffect(element,text,i){
				if(!element.textContent){
					i=0;
				}
				element.textContent +=text[i];
				i++;
				const typing = setTimeout(typingEffect,typeSpeed,element,text,i);
				if(i === text.length){
					clearTimeout(typing);
					
				}
			}
			
		}
	
		
		

	
	
	setTimeout(display,1000);

