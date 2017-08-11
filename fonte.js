function fonte(e) {

	var elemento = $(".acessibilidade");
	var fonte = parseInt(elemento.css('font-size'));
	
	e == 'a' ? fonte++ : fonte--;

	elemento.css("fontSize", fonte);
	
}