$(document).ready(function() {


$('#put').on('submit', function(e) {
   e.preventDefault();
  val = $('#input').val();
  if (!val) {
        showError('Please search for something first!');
        return;
      }else{
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php",
            jsonp: "callback",
            dataType: 'jsonp',
            data: {
                action: "opensearch",
                list: "search",
                srsearch: "javascript",
                format: "json",
                search: val,
            },
            xhrFields: { withCredentials: true },
            success: function(wiki) {
              var topic = wiki[1]
              var snip = wiki[2]
              var url = wiki[3]
console.log(wiki);
              var resultTitle = '<h3 class="title">' + snip[1] + '</h3>';
              $(".results").append(resultTitle);
            }
        });
      }
});
setInterval(function() {

document.getElementById("input").onclick = function() {toggleIcon()};


  if ($(input).is(":focus")) {
 $( "#icon" ).hide();
 }
 else {
$( "#icon" ).show();
}
}, 1);




});
