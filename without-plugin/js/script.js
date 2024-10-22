$(document).ready(function() {
	$("#tabs ul li").click(function() {
		$(this).siblings().removeClass("bg-success");
		$(this).addClass("bg-success");
		const itemID = $(this).children().attr("href").slice(1);
		$(this).parent().nextAll("div").each(function() {
			if($(this).attr("id") == itemID) {
				$(this).removeClass("d-none");
			}
			else {
				$(this).addClass("d-none");
			}
		})
	});
});