$(document).ready(function() {
	
	
	$("#contact").validate({
		rules: {
			firstname:{
				required: true
			},
			lastname:{
				required: true
			}
			
			
		},
		
		messages: {
			first_name: {
				required: "Email didn't match with previous entry"
			}
				
		}
	}); // end validate
}); // end ready