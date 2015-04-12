$.ajax({
 url: "https://www.metamind.io/language/classify",
 beforeSend: function(xhr) { 
  xhr.setRequestHeader("Authorization", "Basic i7eGMY08NxB8fTYUW0cHjz3Wtmm55kYaGmjNLJ4VSGib0Pxo17"); 
 },
 type: 'POST',
 dataType: 'json',
 contentType: 'application/json',
 processData: false,
 data: '{"classifier_id":155,"value":"This movie is so great"}',
 success: function (data) {
  alert(JSON.stringify(data));
},
  error: function(){
   alert("Cannot get data");
 }
});
