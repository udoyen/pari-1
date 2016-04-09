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
    
 });