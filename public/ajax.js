// $(document).ready(function(){
//     $(".ajaxSend").on("click", function(){
//         var email = $('input[name-email]').val();
//         $.ajax({
//             url: "/ajax",
//             type: "POST",
//             dataType: "JSON",
//             data: {"email" : email}
//         })
//         .done(function (json){
//             $(".result").text(json.email)
//         })
//         .fail(function (xhr, status, errorThrown){
//             alert("fail")
//         })
//     })
// })