$(document).ready(function() {
	$("#tabs ul li a").click(function() {
		$(this).parent().siblings().removeClass("bg-success");
		$(this).parent().addClass("bg-success");
		const itemID = $(this).attr("href").slice(1);
		$(this).parent().parent().nextAll("div").each(function() {
			if($(this).attr("id") == itemID) {
				$(this).removeClass("d-none");
			}
			else {
				$(this).addClass("d-none");
			}
		})
	});
});