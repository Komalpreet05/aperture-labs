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
				   },
				   
				  username :{
					  required: true
				  },
				  date:{
					  required: true
				  },
				  
				  password: {
					  required: true,
					  minlength: 6
				  },
				  confirm_password: {
				required : true,
					 equalTo: "#password"
				},
				
				
				   
				   
				 
				   
				  },
			messages: {
				firstname: {
				  required :"Please enter your firstname."
				
			},
			
			lastname:{
                  required:"Please enter your lastname."
				
			},
			date:{
					  required: "Please enter the date."
				  },
			
			
			email: {
				    required: "Please enter your email address.",
					email:  " Please enter the valid email address."
					},
					
			username :{
					  required: "Please enter your username."
				  },
				  
			password: {
				required: "Please enter the password.",
				   minlength:"Password must be atleast 6 characters long."
			}
			
			
			
					

					
			
			} //end messages
			
		}); // end validation
	});