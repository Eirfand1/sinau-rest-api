$(document).ready(function(){
   $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      type: 'get',
      dataType: 'json',
      success: function(result){
         $.each(result, function(i, data){
            $('#posts-list').append(`
            <div class="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data.title}</h5>
               </a>
               <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.body}</p>
               <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
               </a>
            </div>
            `);
         });
      },
      error: function(error){
         console.log('Error loading posts:', error);
      }
   });

   let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
   let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

   $('#theme-toggle').on('click', function() {
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');

      document.documentElement.classList.toggle('dark');

      if (document.documentElement.classList.contains('dark')) {
         localStorage.setItem('theme', 'dark');
      } else {
         localStorage.setItem('theme', 'light');
      }
   });

   if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      themeToggleLightIcon.classList.remove('hidden');
   } else {
      themeToggleDarkIcon.classList.remove('hidden');
   }
});


