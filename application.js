var li = " "


$("#add").on('click', function(){
  let li = document.createElement('li')
  var text = $('#newInput').val()
  li.innerText = text;
  $("li:last").after("<li>" + text + "</li>")
  $('li').on('click', function(){$(this).remove();})
  $('form #newInput').val('');
})


var listItems = $("li");

for (var i = 0; i < listItems.length; i++){
  $(listItems[i]).on('click', function(){
        $(this).remove();
    })
};
