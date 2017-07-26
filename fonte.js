function fonte(e){
	var elemento = $(".acessibilidade");
	var fonte = elemento.css('font-size');

	if (e == 'a') {
		var aumenta = parseInt(fonte) + 1;
		elemento.css("fontSize", aumenta);
	} else if('d'){
		var diminui = parseInt(fonte) - 1;
		elemento.css("fontSize", diminui);
	}
}