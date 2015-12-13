(function($)
{
    $.fn.ImgHoverLogo=function(options)
    {
        this.each(function() {

            // get parameters
            var defauts = {
                "logo": "ico_play_gris.png",
                "opacity": 0.5,
                "size_logo": "25", // in percent
            };
            var parameters=$.extend(defauts, options);

            // save the actual element
            var elemSave = $(this);

            // Put the logo tag and the div around all
            $(this).wrap("<div style=\"position:relative\">");
            $(this).after("<img src=\"" + parameters.logo + "\"" + " class=\"logo\">");
            var sizeLogo = ($(this).parent().height() * parameters.size_logo) / 100;
            marginTop = ($(this).parent().height() - sizeLogo) / 2;

            // make the css of the logo tag
            var logoStyle = {
                "position": "absolute",
                "height": "auto",
                "width": sizeLogo,
                "right": "0",
                "bottom": "0",
                "top": "0",
                "left": "0",
                "margin-left": "auto",
                "margin-right": "auto",
                "margin-top": marginTop,
                "display": "none"
            };
            $(this).next().css(logoStyle);

            // When the mouse is hover the div
            $(this).parent().hover(function(){
                elemSave.next().css("display", "block");
                elemSave.next().css("opacity", 1);
                elemSave.css("opacity", parameters.opacity);
            }, function(){
                elemSave.next().css("display", "none");
                elemSave.css("opacity", 1);
            });
        });
        return this;
    };
})(jQuery);
