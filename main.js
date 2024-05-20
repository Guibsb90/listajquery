$(document).ready(function(){

  $('header button').click(function(){
    $('form').slideDown();
  })
  $('form').on('submit', function(e){
    e.preventDefault();
    const novaTarefa = $('#nova-tarefa').val();
    const novoItem = $('<li></li>');
    $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
    $(`<div ">
    </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('')
  });
  $('ul').on('click', 'p', function() {
    $(this).toggleClass('riscado');
  });
  })