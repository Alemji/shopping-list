$(document).ready(function(){

	$('.add').click(function(){

		if ($('.listitem').val()) {
			$('.unchecked').append("<li><input type=checkbox>" +
			$("input[type='text']").val() + "</li>");
			$('.listitem').val('');
		}
		//appends text input to the list
		//clears the input box
		else {
			alert('add list item to box')
		}
	})



	$('ul').on('click', 'input', function(event){ 
		if ($(this).prop('checked')) {
			$(this).parent().css('color', '#5d5d77');
			$(this).parent().css('text-decoration', 'line-through');	
		}
		 else {
		 	$(this).parent().css('color', '');
		 	$(this).parent().css('text-decoration', 'none');
		 	//changes color and adds line through checked items
		 }
		
		

	 })


	$('.edit').click(function(){
		if(confirm("Delete checked items?")){
			$('input:checked').parent().remove();
		}

	})

	$('.clear').click(function(){
		if(confirm("Clear entire list?")){
			$('ul').empty();
			//clears list
		}

	})





});
