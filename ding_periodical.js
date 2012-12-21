(function ($) {
  $(document).ready(function(){
    $('.field-name-ding-periodical-issues li').children('.item-list').hide();
  });
  
  Drupal.behaviors.dingPeriodicalIssueToggle = {
    attach: function (context, settings) {
      $('.field-name-ding-periodical-issues .ding-periodical-fold', context).click(function(){
	      $(this).siblings('.item-list').toggle();
      });
    }
  }    
}(jQuery));
