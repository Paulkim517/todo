$(function(){

var $newToDoForm = $("#new_to_do");
var $currentToDoForm = $(".task")
var buttons = '<button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Delete</button>'
var taskList = [{title:"brush teeth",description:"until clean", date:"2016-02-09"} ,{title:"eat food",description:"until not hungry", date:"2015-07-20"}];

//changes finished tasks
function strikeThru(){
		$currentToDoForm = $(".task")
 		$(".btn-sm").on("click",function(event) {
 		$(this).parent().fadeOut(950);
		});
}

//loads hardcoded array 	
	function displayTasks(){
		$(taskList).each(function(i){
		var $addTD = $("#to_do")
		$addTD.append("<li class='task'>" + this.title + ": " + this.description + " "+ this.date  +buttons + "</li>");
		}); 
		strikeThru();
};

	

console.log($newToDoForm)

	$newToDoForm.on("submit",function(event){
	event.preventDefault();
	
	//displays new information from form
	var $newTD = $('<li class ="task">'+ $('#item_name').val()+ ": "+ $('#item_descript').val()+" "+$('#item_dueDate').val()+ buttons +'</li>');
  $('#to_do').append($newTD);
  taskList.push({title: $('#item_name').val(), description: $('#item_descript').val(), date: $('#item_dueDate').val()});
  	var $newToDoForm = $("#new_to_do");
   	//alert
   	if (($newToDoForm  !== $('#item_name').val()) || ($newToDoForm  !== $('#item_descript').val()) || ($newToDoForm  !== $('#item_dueDate').val())) {
        $('.alert').toggleClass('show');
        return false;
    };
  strikeThru();
  


});

displayTasks();


});

