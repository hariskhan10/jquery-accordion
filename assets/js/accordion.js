/**
 * Created by harishasankhan on 4/20/17.
 */

//accordion tab controller
(function ($) {

    var allPanels = $('.accordion-section > .accordion-section-content, .toc-tab-box .acc-content, .toc-content.privacy-policy .acc-content').hide();
    $('.accordion-section  .accordion-section-title, .toc-tab-box .acc-title, .toc-content.privacy-policy h2.acc-title, .acc-content .quest .accordionItemHeading h4').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            allPanels.slideUp();
            $(this).addClass('open');
            $(this).next().slideDown();
        } else {
            allPanels.slideUp();
            $(this).removeClass('open');
        }
    });
    var insdeDivs = $('.acc-content .quest .answer').hide();
    $('.acc-content .quest .accordionItemHeading h4').off().on('click', function (event) {
        if (!$(this).hasClass('open')) {
            insdeDivs.slideUp();
            $(this).addClass('open');
            $(this).parent().parent().parent().parent().parent().parent().find('.answer').slideDown();
        } else {
            insdeDivs.slideUp();
            $(this).removeClass('open');
        }
    });
})(jQuery);