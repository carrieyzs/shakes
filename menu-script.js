function main(){

	var full = [];
	
	$("#buttons").hide();
	var imageHeight = $(".image-space").height();
	
	$(".image-space").mouseenter(function(){
			$("#buttons").show();
		
		$(this).animate({
			height: "+=30"
			
		});
		
	}).mouseleave(function(){
		$("#buttons").hide();
		$(this).animate({
			height: imageHeight
		});
	});
}

function shake(name, type){
	this.name = name;
	this.type = type;
}

$(document).ready(main);