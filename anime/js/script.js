$('#search-button').on('click', function () {
   $.getJSON('https://api.waifu.im/search/?excluded_tag=');
   $.ajax({
      url: 'https://api.waifu.im/search/',
      type: 'get',
      dataType: 'json',
      data: {
         included_tags: $("#search-input").val(),
      },
      success: 
      
      function(result){
         for(let i = 1;i<20;i++){
            let pic = result.images;
            $.each(pic, function (i, data){
               $('#anime-list').append(`
               <a href='${data.url}'><img src='${data.url}' class="max-w-auto max-h-72"></a>
               `);
            });
            
         }
         console.log(pic);
      }
      
   })
});