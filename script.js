$(function() {

  // `toDos` array is our model (holds our data)
  // contains test (or "seed") data
  var whatever = [{taske: "laundry", description: "clean clothes"},
  {taske: "grocery shopping", description: "buy food"},
  {taske: "nap time", description: "remember to sleep!"}];
  

  var toDoers = function(taske, description){

    this.taske = taske;
    this.description = description;


  }
  this.all = []

  toDoers.prototype.save = function(){

    this.all.push(this)

  }

  toDoers.prototype.render = function (){

    console.log(this.taske)

    // append our seed todo to the page
    var $todo = $(todoTemplate(this));
    console.log(this.taske)
    $todo.attr(this.taske , this.description);
    console.log ("hello world")
    $toDoList.append($todo);

  }

  
  //console.log(toDos);

   // form to create new todo
   var $newToDo = $('#new-todo');

  // element to hold our list of todos
  var $toDoList = $('#todo-list');

   // underscore template
    var todoTemplate = _.template($('#todo-template').html());
    console.log(todoTemplate)

//seed data append
_.each(whatever, function (toDoers, index) {
	var $todo = $(todoTemplate(toDoers));
	//$todo.attr('data-index', index);
	$toDoList.append($todo);
});


  // submit form to create new todo
  $newToDo.on('submit', function(event) {
  	event.preventDefault();

    // create new todo object from form data
    var toDoName = $('#todo-name').val();
    var toDoDesc = $('#todo-desc').val();
    var toDoData = new toDoers(toDoName,toDoDesc);

    // store our new todo
    // toDoers.push(toDoData);
    // toDoData.save();
    // var index = whatever.indexOf(toDoData);
    // console.log(toDoers)

    // append our new todo to the page
    // var $todo = $(todoTemplate(toDoData));
    // $todo.attr('data-index', index);
    // console.log ($todo)
    // $toDoList.append($todo);

    toDoData.render();

    // reset the form
    $newToDo[0].reset();
    $('#todo-name').focus();
  });

  // add class to todo on click to mark it as done
  $toDoList.on('click', '.todo', function() {
  	$(this).addClass('done');
  });

});
























