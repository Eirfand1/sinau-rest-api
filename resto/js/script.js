function showAll(){

   $.getJSON('data/pizza.json', function(result) {
      let menu = result.menu;
      $.each(menu, function(row, data) {
         $('#daftar-menu').append(`<div class="max-w-xs m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"><a href="#"><img class="rounded-t-lg w-full" src="img/pizza/${data.gambar}" alt="" /></a><div class="p-5"><a href="#"><h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${data.nama}</h5></a><p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">${data.deskripsi}</p> <p class="mb-3 font-bold text-gray-700 dark:text-gray-400 text-md">Rp. ${data.harga.toLocaleString('id-ID')}</p> <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Read more<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg></a></div></div>`);
      });
   });
}
showAll();

$('.nav-link').on('click', function(e) {
    e.preventDefault();
    
    // Hapus kelas aktif dari semua link
    $('.nav-link').removeClass('text-white bg-blue-700 md:text-blue-700 md:bg-transparent md:dark:text-blue-500');
                  
    
    // Tambahkan kelas aktif ke link yang diklik
    $(this).addClass('text-white bg-blue-700 md:text-blue-700 md:bg-transparent md:dark:text-blue-500');

    let kategori = $(this).html();
    $('h1').html(kategori);
    console.log(kategori.toLowerCase());

    if(kategori == 'All Menu'){
      showAll();
      return;
    }

    $.getJSON('data/pizza.json', function (data) {
      let menu = data.menu;
      let content = '';

      $.each(menu, function(i, data) {
         data.kategori == kategori.toLowerCase() ?  content += `<div class="max-w-xs m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"><a href="#"><img class="rounded-t-lg w-full" src="img/pizza/${data.gambar}" alt="" /></a><div class="p-5"><a href="#"><h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${data.nama}</h5></a><p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">${data.deskripsi}</p> <p class="mb-3 font-bold text-gray-700 dark:text-gray-400 text-md">Rp. ${data.harga.toLocaleString('id-ID')}</p> <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Read more<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg></a></div></div>` : '';
      });
      $('#daftar-menu').html(content);
    });
});