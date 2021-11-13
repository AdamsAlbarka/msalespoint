var socket=io.connect ('http//:139.162.192.74:2021');
// console.log(socket)

$('#form-submit').click(function(e) {
   e.preventDefault();
   var pass = $('#pass1').val()
   var pass2 = $('#pass2').val()
   if(pass !==pass2){
     alert('Password Not equal, please re-enter password to continue...');
     return;
   }
   // var fname = $('#comp-name').val()
   var registrationObject = {
     fname: $('#comp-name').val(),
     uname: $('#comp-usrname').val(),
     email: $('#comp-email').val(),
     phone: $('#comp-tel').val(),
     subtype  : $('#sub_type').val(),
     passkey: $('#pass1').val()
   }
   console.log(socket)
   console.log(registrationObject)
   socket.emit('newfarmregistration', registrationObject);

 })