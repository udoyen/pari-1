function r(f) {
    /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}


r(function(){    
    
   var timer;
   $('.service-content').on({
       mouseenter: function(){
           var self = this;
          clearTimeout(timer);
              timer = setTimeout(function(){
                   $(self).children('div.my-content').removeClass('content-invisible');
               }, 100);                
       },
       mouseleave: function(){
           var self = this;
            setTimeout(function(){                
                    $(self).children('div.my-content').addClass('content-invisible');                
            }, 100);
       }
   });
    
        // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
    
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

     // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
    
  
    
 });