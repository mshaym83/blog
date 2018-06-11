var Employ = {
	 name : 'Sam',
	 display:function(){
		 setTimeout(function(){
			 console.log(this.name);
		 },1000);
	 }
 };
 
 Employ.display();
 //output : undefined