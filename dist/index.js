$(function(){$('[data-toggle="popover"]').popover(),$(".triggers a").click(function(o){o.stopPropagation(),$($(this).data("href")).trigger("click")}),$(document).bind("click",function(o){$('[aria-describedby^="popover"]').not(o.target).popover("hide")})});
//# sourceMappingURL=index.js.map
