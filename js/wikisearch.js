$(document).ready(function() {


$('#put').on('submit', function(e) {
$( ".list-group-item" ).remove()
//$("a").removeClass("ref")


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

            for (i = 0; i < topic.length; i++){
              var resultTitle = '<a class="ref" href='+url[i]+'>'+'<li class="list-group-item animated zoomInDown" id="list">' + '<b>' +topic[i] + '- '+ '</b>' + snip[i] +'</li>'+'</a>';
              $(".listgroup").append(resultTitle);
            };
            }
        });
      }
});
document.getElementById("icon").onclick = focus()

$( "#icon" ).click(function() {
  $( "#input" ).focus();
});


setInterval(function() {

document.getElementById("input").onclick = toggleIcon()


function toggleIcon(){
  var test = $('#input').val();
  if ($(input).is(":focus")) {
 $( "#icon" ).hide();
 }
 else if (!test) {
$( "#icon" ).show();
}
}
});




});
