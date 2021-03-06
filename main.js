const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0);
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}


$(document).ready(function(){
	$(".fa-angle-up").click(function(){
	$(".fa-angle-up").css("transform","rotate(180deg)").css("transition","0.2s");
	$(".card").css("height","4rem").css("transition","height 0.2s");
	$(".card-text").hide();
	$(".fa-star").hide();
	$(".btn-danger").hide();
});

	$(".fa-angle-up").dblclick(function(){
	$(".fa-angle-up").css("transform","rotate(360deg)").css("transition","0.2s");
	$(".card").css("height","8rem").css("transition","height 0.2s");
	$(".card-text").show();
	$(".fa-star").show();
	$(".btn-danger").show();

}); 





	$("#add").click(function(){
		var title = $("#titleID").val();
		var desc = $("#descID").val();
		if(title != '' && desc != ''){
		var texting = '<div class="list-item" draggable="true"><div class="card"><div class="card-body"><span id="expand"><i class="fas fa-angle-up"></i></span><h6 class="card-title" contenteditable="true">'+title+'</h6><p class="card-text" contenteditable="true" style="font-size: small;">'+desc+'</p><i class="fas fa-star"></i><button type="button" class="btn btn-sm btn-danger" style="background-color: #ff1818;"><i class="fas fa-trash-alt"></i></button></div></div></div>';
		$(".here").append(texting);
		}
		else{
			alert("Empty");
		}
	});



	$(".btn-secondary").click(function(){
		$(".card").hide();
	});

	$(".btn-danger").click(function(){
		$(this).parent().hide();

	});


});





