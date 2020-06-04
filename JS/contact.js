$.validator.setDefaults({
		submitHandler: function() {
			alert("submitted!");
		}
	});

	$().ready(function() {
		

		// validate signup form on keyup and submit
		$("#lab4").validate({
			rules: {
				firstname : {
				required: true
			   },
			   
			   lastname: {
			    required : true},
				
				email :{
				   required : true,
				   email :true
				   }
				  },
				  
			messages: {
				firstname: {
				  required :"Please enter your firstname."
				
			},
			
			lastname:{
                  required:"Please enter your lastname."
				
			},
			
			
			email: {
				    required: "Please enter your email address.",
					email:  " Please enter the valid email address."
					}
			
					

					
			
			} //end messages
			
		}); // end validation
	});