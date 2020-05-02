$(document).ready(function(){

$('form input').on('submit',function(){

var item = $('form input');
var todo ={name:name val()};

$.ajax({
	type:'POST',
	url:'/',
	data:todo,
	success: function (){
		location.reload();
	}
});
return false;
});

$('li').on('click',function(){
	var name = $(this).text().trim().replace(/ /g, "-"); 
	$ajax({
		type:'DELETE',
		url:'/'+ name,
		success:function(data){
			location.reload();
		}
	});
});


});