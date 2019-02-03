var images = [];

$('[data-toggle="refresh-list"]').on('click', function(){
  var target = $($(this).data('target'));
  var source = $(this).data('source')

  // Not sure what to do with those values, I think I can use: https://api.jquery.com/jQuery.ajax/ 
  $.ajax({
    url: source
  }).done(function( data ) {
    images = _.shuffle(JSON.parse(data));

    target.find('.card').each(function( index ){
      $(this).find('img').attr('src', images[index].url);
      $(this).find('.card-text').text(images[index].description);
    });
  });
});
