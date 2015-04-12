/*$.ajax({
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
});*/

/* This code works - gets the text sentiment */
/*
var sendInfo =  {
           apikey: 'e8febcac46f16c20a4c7c286ef8f131caeddda6b',
           outputMode: 'json',
           text: 'This movie is so great!',
       };

$.ajax({
 url: "http://access.alchemyapi.com/calls/text/TextGetTextSentiment",
 crossDomain: true,
 type: 'POST',
 dataType: 'jsonp',
 data: sendInfo,
 success: function (data) {
  alert(JSON.stringify(data));
},
  error: function(){
   alert("Cannot get data");
 }
});
*/
