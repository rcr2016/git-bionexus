//DATABASE
var firebaseConfig = {
    apiKey: "AIzaSyBRZ_Qvwt05pZsKg3W5mlQWsKf-IJAvodQ",
    authDomain: "databnx.firebaseapp.com",
    databaseURL: "https://databnx.firebaseio.com",
    projectId: "databnx",
    storageBucket: "databnx.appspot.com",
    messagingSenderId: "915793266720",
    appId: "1:915793266720:web:43b60e66aaddf52a0fd445",
    measurementId: "G-506HV3R9KW"
};

//animaciones
new WOW().init();
//hamburger Menu
$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
    if($(window).width()>992){
        var scroll= new SmoothScroll('a[href*="#"]',{
            offset: 70,
            speed: 2000,
            speedAsDuration: true
        });
    } else if($(window).width()<992 && $(window).width()>768){
        var scroll= new SmoothScroll('a[href*="#"]',{
            offset: 78,
            speed: 2000,
            speedAsDuration: true
        });
    } else if($(window).width()<768){
        var scroll= new SmoothScroll('a[href*="#"]',{
            offset: 0,
            speed: 2000,
            speedAsDuration: true
        });
    }
    $('.mymenu').on('click','li', function () {
        $('.mymenu li.active').removeClass('active');
        $(this).addClass('active');
    });
    
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var db = firebase.firestore();

    function renderDestacados(destacados) {
        destacados.forEach((destacados)=> {
            var listDestacados = $(`<div class="col-12 col-md-6 col-lg-3 mt-3 text-center" >
            <div class="card hoverable">
                <div class="view overlay ">
                    <img class="card-img-top mx-auto" src="${destacados.Img}" alt="Card image cap" style="width:70%;">
                    <div class="mask rgba-blue-slight"></div>
                </div>
                <div class="card-body">
                    <h6 class="card-title">${destacados.Descripcion}</h6>
                    <p class="card-text">Bs. ${destacados.Precio}</p>
                    <button type="button" class="btndest btn btn-info" data-toggle="modal" data-target="#${destacados.Id_destacado}">Ver más</button>
                </div>
            </div>
            </div>`);
            $("#ListaDestacados").append(listDestacados);

            var modalDestacados = $(`<div id="${destacados.Id_destacado}" class="modal fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title w-100" id="myModalLabel">${destacados.Descripcion}</h6>
                        <button id="closebutton" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-12 col-lg-6">
                                <div class=" imgModal view hm-zoom embed-responsive embed-responsive-16by9">
                                    <img class="card-img-top mx-auto  img-fluid" src="${destacados.Img}" alt="${destacados.Descripcion}" style="width:100%">
                                </div>
                            </div>
                            <div class="col-sm-12 col-lg-6">
                                <table class="table table-striped table-dark">
                                    <thead>
                                    <tr>
                                        <th scope="col" colspan="2">
                                        <span style="display: block-inline;">
                                            <h4>BIONEXUS - 3M - AVARAGD
                                        </span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row"><p>C&oacute;d. Empresa :</p></th>
                                        <td>abcCodEmp</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><p>Marca :</p></th>
                                        <td>3M</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><p>Modelo :</p></th>
                                        <td>9200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><p>Procedencia :</p></th>
                                        <td>E.E.U.U.</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><p>Garant&iacute;a :</p></th>
                                        <td>1 a&ntilde;o</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                    <a href="https://api.whatsapp.com/send?phone=59171004845&text=ME%20INTERESA%20EL%20SGTE.%20PRODUCTO:%20${destacados.Descripcion}" type="button" class="btn btn-floating light-green btn-sm" style="color:#ffffff;"><span style="font-size: 1.2em;" ><i class="fab fa-whatsapp"></i></span> WhatsApp</a>
                    <a href="https://m.me/146214385462217" type="button" class="btn btn-floating light-blue btn-sm" style="color:#ffffff;"><span style="font-size: 1.2em;" style="color:#ffffff;"><i class="fab fa-facebook-f"></i></span> Messenger</a>
                    </div>
                </div>
            </div>
            </div>`);
            $("#ListaDestacados").append(modalDestacados);
        })
    }
    db.collection('databnx').get().then((snap) => {
    var destacados = []
    snap.forEach((doc) => {
        destacados.push(doc.data())
    })
    renderDestacados(destacados);
    })
});
$(document).ready(function () {
   
});