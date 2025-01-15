$(document).ready(function () {
        
    
        $.ajax({
        type: "GET",
        url: "personajes.json",
        dataType: "json",
        success: function (elenco) {
            $("img").click(function () {
                if ($(this).hasClass("dead")) {
                    let video;                    
                    let id = $(this).attr("id");
                    $.each(elenco.personajes,function(){
                    
                        if (this.nombre==id){
                            video = this.video;
                        }
                    });
                    $video=$('<iframe title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
                    
                    $video.attr("src",video+"?autoplay=1&controls=0" );
                    $video.addClass("video")
                    $video.appendTo("body");
                    $video.addClass("video")
                    $video.css({"position":"fixed","top":"0","width":"100vw","height":"100vh","z-index":"20"})
                    $(".personajes").attr("display","hidden")
                    $aviso=$("<h1>Pulsa ESC para salir del video</h1>")
                    $aviso.css({"position":"fixed","bottom":"0","color":"white","z-index":"30","left":"15vw"})
                    $aviso.appendTo("body");
                    $(document).keydown(function(event){
                        if(event.which == 27){
                            $video.remove();
                            $aviso.remove();
                        }
                    });
                    
                }
              })
            $("a").click(function () {
                $("a").removeClass("activo");
                $("img").removeClass("dead"); 
                $(this).addClass("activo");
                let temporada=$(this).text();
                $.each(elenco.personajes,function(){
                    let muerto=String(this.dead)
                    if (this.dead!="no"){
                        if (this.dead==temporada){
                            $("#"+this.nombre).addClass("dead")
                        }
                        
                    }
                })            
            });
            
        }
    });
    
});