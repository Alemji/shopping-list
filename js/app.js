$(document).ready(function(){

	$('.add').click(function(){
		$('.unchecked').append("<li><input type=checkbox>" +
		$("input[type='text']").val() + "</li>");
		//appends text input to the list

		})

$('ul').on('click', 'li', function(event){ 
		$(this).css('color', '#5d5d77');
		$(this).css('text-decoration', 'line-through');
		//changes color and adds line through checked items

		 })


$('.edit').click(function(){
	if(confirm("delete checked items?")){
		$("input:checkbox:checked").remove();

		//else{return false;}
	}

		})



//why do I have to re-open the page to get it to work?




//edit button

//clear list button


});
