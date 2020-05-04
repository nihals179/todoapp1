$(document).ready(function(){

$('form').on('submit',function(){

var name = $('form input');
var todo ={name : name.val()};

$.ajax({
	type:'POST',
	url:'/',
	data:todo,
	success: function(data){
		console.log("yes");
		location.reload(true);
	},
});
return false;
});

$('li').on('click',function(){
	var name = $(this).text().trim().replace(/ /g, "-"); 
	$.ajax({
		type:'DELETE',
		url:'/'+name,
		success: function(data){
			console.log(data);
			 location.reload(true);	
		},
	});
});


});