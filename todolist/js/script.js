$(document).ready(function(){
   
   function loadTodos(){
      $.ajax({
         url: 'https://jsonplaceholder.typicode.com/todos/?_limit=5',
         type: 'get',
         dataType: 'json',
         success: function(result){
            $.each(result,function(i, data){
               $('#todos').append(`<div class="flex mb-4 items-center">
               <p class="w-full text-grey-darkest">${data.title}</p>
               <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
               <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
               </div>`)
            })
         }
      })
   }
   loadTodos();
   
   $('#btnTodo').on('click',function(e){
      e.preventDefault();
      
      const $input = $('#inpTodo').value; 
      
      $.ajax({
         url: 'https://jsonplaceholder.typicode.com/todos',
         type: 'post',
         data : {
            title: $input,
            userId: 1,
            complete: false
         },
         dataType: 'json',
         success: function(d){
            loadTodos();
            console.log(d);
         }
      })
   })
})