$(function() {

  // `toDos` array is our model (holds our data)
  // contains test (or "seed") data
  var toDos = [
  {task: "laundry", description: "clean clothes"},
  {task: "grocery shopping", description: "buy food"},
  {task: "nap time", description: "remember to sleep!"}
  ];
  console.log(toDos);

   // form to create new todo
   var $newToDo = $('#new-todo');

  // element to hold our list of todos
  var $toDoList = $('#todo-list');

// underscore template
var todoTemplate = _.template($('#todo-template').html());
console.log(todoTemplate)

//seed data append
_.each(toDos, function (toDos, index) {
	var $todo = $(todoTemplate(toDos));
	//$todo.attr('data-index', index);
	$toDoList.append($todo);
});


  // submit form to create new todo
  $newToDo.on('submit', function(event) {
  	event.preventDefault();

    // create new todo object from form data
    var toDoName = $('#todo-name').val();
    var toDoDesc = $('#todo-desc').val();
    var toDoData = {task: toDoName, description: toDoDesc};

    // store our new todo
    toDos.push(toDoData);
    var index = toDos.indexOf(toDoData);
    console.log(toDos)

    // append our new todo to the page
   var $todo = $(todoTemplate(toDoData));
	$todo.attr('data-index', index);
	 console.log ($todo)
	$toDoList.append($todo);
   
    // reset the form
    $newToDo[0].reset();
    $('#todo-name').focus();
  });

  // add class to todo on click to mark it as done
  $toDoList.on('click', '.todo', function() {
  	$(this).addClass('done');
  });

});
























