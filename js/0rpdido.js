/*
new WOW().init();
$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
    const myIp = e.ip;
    $.ajax({
        type: "post",
        url: "verificarLgn.php",
        data: myIp,
        dataType: 'const',
        beforeSend: function(){
            $('.fas.fa-sync').css('display','inline');
        }
    }).done(function(){

    }).fail(function{

    }).always(function(){
        $('.fas.fa-sync').hide();
    });
});
});*/
alert("1");
$.ajax({
    method: "GET",
    url: "getpremier.php",
}).done(function(data){
    var result =$.parseJSON(data);
    alert(result);
    /*var stringtable = '<table class="table">'
    $.each( result, function(key, value){
        stringtable += '<tr> <img class="img-thumbnail" src="'+value["Link_Img"]+'" alt="'+value["Item"]+'"><td>'+value["Item"]+'</td><td>'+value["Descripcion"]+'</td><td><a class="btn btn btn-primary" href="'+value["Link_Fb"]+'">FaceBook</a></td></tr>';
        stringtable += '</table';
    });
    $('#pdtspmr').html(stringtable);*/
});
    /*success: function (response) {
        var js = JSON.parse(response);
        console.log(reponse);*/
        /*var tabla;
        for (var i =0; i < js.length; i++)
        {
            tabla += '<tr> <img class="img-thumbnail" src="'+js[i].Link_Img+'" alt="'+js[i].Item+'"><td>'+js[i].Descripcion+'</td><td><a class="btn btn btn-primary" href="'+js[i].Link_Fb+'">FaceBook</a></td></tr>'
        }
        $('#pdtspmr').html(tabla);*/
   // }
