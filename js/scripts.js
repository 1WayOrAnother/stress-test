
$(document).ready(function() {
$("form#trackform").submit(function(event) {
  event.preventDefault();
    var emotional = [];
    var physical = [];
    var remedies = [];
    $("input:checkbox[name=emotional]:checked").each(function(){
      var item = $(this).val();
      emotional.push(item);
    });
    $("input:checkbox[name=physical]:checked").each(function(){
        var item = $(this).val();
        physical.push(item);
    });
    $("input:checkbox[name=remedies]:checked").each(function(){
      var item = $(this).val();
      remedies.push(item);
    });
    if ((emotional.length <=2) && (physical.length <=2)) {//>=3) {
      $('#trackform').hide();
      $('.results-ok').toggle();
    } else if ((emotional.length >=3) && (physical.length >=3)) {
      $('#trackform').hide();
      $('.results-help').toggle();
      // $('#test').text(emotional[0]);
    } else if ((emotional.length <=2) && (physical.length >=3)) {
      $('#trackform').hide();
      $('.results-help').toggle();

    } else if ((emotional.length >=3) && (physical.length <=2)) {
    $('#trackform').hide();
    $('.results-help').toggle();
    }

    // } else if ((emotional.length >=3) && (physical.length >=3)) {
    //   $('#trackform').hide();
    //   $('.results-help').toggle();
    // }




    // else {
    //   alert("i dont know");
    // }

  });
});










































// $(document).ready(function(){
//   $("form#transportation_survey").submit(function(event){
//     event.preventDefault();
//     $("#work-responses").show();
//
//     $("input:checkbox[name=work-transportation]:checked").each(function(){
//
//       var workTransportationMode = $(this).val().toUpperCase();
//
//
//       $("#work-responses").append(workTransportationMode + "<br>");
//     });
//     $("#fun-responses").show();
//     $("input:checkbox[name=fun-transportation]:checked").each(function(){
//       var funTransportationMode = $(this).val();
//       $('#fun-responses').append(funTransportationMode + "<br>");
//     });
//     $('#transportation_survey').hide();
//   });
//
//   var userResponses = [];
//   $("input:checkbox[name=work-transportation]:checked").each(function(){
//       var workTransportationMode = $(this).val();
//       // userResponses.push(workTransportationMode);
//       userResponses.push(workTransportationMode);
//
//   });
// });
