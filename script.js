$('.langBtn').click(function(){
  $('.langSelects').addClass('active');
});

$('.eng').click(function(){
  $('.load').fadeToggle(300);

  $('#container').load('./src/eng.html #main',function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success"){
      
    }else{
      alert("Error: "+xhr.status+": "+xhr.statusText);
    } 
  });

  $('.load').fadeToggle(300);
});

$('.jp').click(function(){
  $('.load').fadeToggle(300);

  $('#container').load('./src/jp.html #main',function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success"){
      
    }else{
      alert("Error: "+xhr.status+": "+xhr.statusText);
    } 
  });

  $('.load').fadeToggle(300);
});

$('.ch').click(function(){
  $('.load').fadeToggle(300);

  $('#container').load('./src/ch.html #main',function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success"){
      
    }else{
      alert("Error: "+xhr.status+": "+xhr.statusText);
    } 
  });

  $('.load').fadeToggle(300);
});