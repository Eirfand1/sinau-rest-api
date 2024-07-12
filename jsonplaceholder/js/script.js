$(document).ready(function(){
   const $postsList = $('#posts-list');
   const $searchInput = $('#searchInput');
   
   function toggleElementVisibility($element, show) {
      // Jika true berarti hiddenya false, itemnya bakal show
      $element.toggleClass('hidden', !show);
   }
   
   function loadPosts(){
      $.ajax({
         url: 'https://jsonplaceholder.typicode.com/posts',
         type: 'get',
         dataType: 'json',
         success: function(result){
            // Pake map karena menggunakan innerHtml(biar tidak perlu show hide di singlePost)
            const postsHtml = result.map(data => `
            <div class="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data.title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.body}</p>
            <a href="#" class="singlePost inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-id="${data.id}">
            Read more
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a>
            </div>
            `).join('');
            
            
            //tambah data diatas pada class post list
            $postsList.html(postsHtml);
            toggleElementVisibility($searchInput, true);
         },
         error: function(error){
            console.log('Error loading posts:', error);
         }
      });
   }
   
   loadPosts();
   
   $postsList.on('click', '.singlePost', function(e){
      e.preventDefault();
      const postId = $(this).data('id');
      toggleElementVisibility($searchInput, false);
      
      $.ajax({
         url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
         type: 'get',
         dataType: 'json',
         success: function(result){
            $postsList.html(`
            <div class='post lg:w-3/5 mx-auto'>
            <h2 class='dark:text-white text-3xl font-bold mb-4'>${result.title}</h2>
            <p class='dark:text-white text-xl'>${result.body}</p>
            <button class='font-bold bg-blue-500 active:bg-blue-700 rounded p-2 text-white' id='back-button'>Kembali</button>
            </div>
            `);
         },
         error: function(error){
            console.log('Error loading single post:', error);
         }
      });
   });
   
   $postsList.on('click', '#back-button', function(e){
      e.preventDefault();
      toggleElementVisibility($searchInput, true);
      loadPosts();
   });
});

// Theme toggle
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

function toggleTheme() {
   themeToggleDarkIcon.classList.toggle('hidden');
   themeToggleLightIcon.classList.toggle('hidden');
   document.documentElement.classList.toggle('dark');
   localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

$('#theme-toggle').on('click', toggleTheme);

if (localStorage.getItem('theme') === 'dark') {
   document.documentElement.classList.add('dark');
   themeToggleLightIcon.classList.remove('hidden');
} else {
   themeToggleDarkIcon.classList.remove('hidden');
}