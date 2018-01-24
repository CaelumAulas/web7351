function expande(evento) {
    var btn = $(evento.target)
    var vitrine = btn.parent()
    vitrine.toggleClass("expandido")

    if(btn.text().trim() == "Mais"){
        btn.text("Menos")    
    } else {
        btn.text("Mais") 
    }
}

$(".btn").on("click", expande)