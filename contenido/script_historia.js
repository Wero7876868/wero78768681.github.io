$(document).ready(function() {

  var dates = ["1802", "1824", "1869", "1870", "1900", "1940", "1952", "1967", "1970", "1980"];
  var images = [
    "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTyzdamlWUMPwzOlWueNNtRNGphs7pBoXoMRwTfzBKzWFy54il-vitu4Nyodgv9Qn46",
    "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/3468385/image/5af9fca2bbfb03d8ac5973698949ddc7",
    "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/3468401/image/8473fb17221e9fdec454a8f36786fd51",
    "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/3468428/image/82f4873d05bbcef950cf352317913215",
    "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/3468443/image/6b1d7aa10a36b50bdd4e108f1289cbfb",
    "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/3468453/image/2380130e249db70d3497c41547b1f7db",
    "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/3468471/image/bed9e60b241c17d9309c3929b62f5a1d",
    "https://www.jornada.com.mx/2009/12/12/Images/maiz2.jpg",
    "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/3468509/image/e955dfc5be8ae8d47faac7e0976c1270",
    "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/3468527/image/82855219f7f8e1113c39c4565d6fdd12"
  ];
  var captions = [
    "Juan Bautista de Lamarck",
    "Juan Bautista Dumas",
    "ernesto haeckel",
    "Carlos Valentín Riley",
    "INICIA LA CULTURA DE LA ECOLOGIA EN MÉXICO",
    "Ecología en México",
    "Enrique Beltrán",
    "EFRAÍN HERNADEZ",
    "Gonzalo Halftter",
    "José Sarukhan"
  ];
  var life_events = [
    "Elabora la teoria de la evolucion basada en la modificacion heredable de los caracteres con base al uso continuo y la perdida por desuso",

    "Juan Bautista Dumas junto con Jeab Prévost describió el proceso de la división celular",

    "Establecimiento el termino ECOLOGIA", 

    "Hizo aportaciones importantes a la ecología con descubrimientos de la forma en que las mariposas Monarca en México se comportaban y del porque de sus migrasiones masivas.",

    "Ecología en México Comienza la Ecología en México",

    "En este año se dio el sentimiento de diversos tipos de investigadores y esto hizo la consolidación de la ecología en México",

    "Fundó el Instituto Mexicano de Recursos Naturales Renovables",

    "Inicio una corriente hacia la ecología vegetal en la Universidad Autónoma de Chiapingo",

    "Es director del Instituto de Ecología AC y se funda el centro de investigaciones ecologícas del Sureste, agr`pó biologos, agronomos,economistas. En la UNAM se establecen laboratorios de Ecología",

    "Ha sido uno de los impulsores de la Ecologia desde la decada de 1980 hasta nuestros dias"
  ];

  var image_place = $("#place_image");
  var text_place = $("#place_text");
  var caption_place = $("#place_caption");

  $(".slider")
    .slider({
      min: 0,
      max: dates.length - 1,
      value: dates.length - 1
    })
    .slider("pips", {
      rest: "label",
      labels: dates,
      prefix: "<strong>",
      suffix: "</strong>"
    })
    .on("slidechange", function(e, ui) {
      image_place.attr("src", images[ui.value]);
      caption_place.text(captions[ui.value]);
      text_place.text(life_events[ui.value]);

    });
  $(".slider").slider({
    value: 0
  });
});