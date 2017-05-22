$(function(){
	
	
		$(window).scroll(function(){
//		console.log($(window).scrollTop());  //o ile pixeli schodze sprawdzam sobie
		if($(window).scrollTop() >=120) {
			$("#main-nav").addClass("scroll");     //to samo co $("#main-nav").css({"background-color":"#fff"});
		} else {
			$("#main-nav").removeClass("scroll");		//$("#main-nav").css({"background-color":"transparent"});
		}
	});
	
		window.sr = ScrollReveal();    //tworze konstruktor klasy 
//		sr.reveal('.container');
//		sr.reveal('.row');
	//sr.reveal('.row'), {reset: true};
	
		sr.reveal('.row'), {delay: 1000};		//ten obiekt ma metode reveal, na których działa
	
	
	var smoothscroll = $("body");	//var root = $("html, body");				//bo chce dzialac czyli skrolowac na całym ciele tego dokumentu/elementu
	
	$('a[href^="#"]').click(function(){
		console.log("klikniecie");
		//chce sobie pobrać dynamicznie hasha, żeby scroloować dynamicznie
		//dla elementu ktory stworzulismy pobierz atrybut tego elementu
		var href = $(this).attr("href");
		
		smoothscroll.animate({ scrollTop: $(href).offset().top -52 },500);     //scrollTop podawana jest w pixelach, moge na sztywno podać scrollTop:500px
		//scroolTop zdefiniowana animacja w jquery, szukamy jego ID za pomoca href, sprawdzamy jego offser od góry(top) i dziala a -52 zeby moje menu nie zaslanialo sekcji "o mnie" - naglowkow sekcji
		
//		console.log($("#about").offset());
//		console.log($("#about").offset().top);
	});
	

});