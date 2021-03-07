
let count = 0
$("#add").on('click', function () {
  console.log("good");
  count++
  var textInput = $("input").val()
  var newTask = "<div class='task'>Задание #<span id='count'>" + count + "</span>:<span>" + textInput + "</span></div>"
  $(".hide").after(newTask)
  $("input").val("")
  $(".hide").show(100)
  setTimeout(function () {
    $(".hide").hide(100)
  }, 1500)



})

$("#show").on('click', function () {
  $(".task").show(800)
})
