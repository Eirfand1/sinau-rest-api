// let mhs = {
//    name : "Ego Irfandi",
//    age : 18,
//    nim : "230202007",
//    email : "name.fandi07@proton.me"
// }

// console.log(JSON.stringify(mhs));

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//    if(xhr.readyState == 4 && xhr.status == 200){
//       let mhs =  JSON.parse(this.responseText);
//       console.log(mhs);
//    }
// }

// xhr.open('GET', 'test.json', true);
// xhr.send();
$.getJSON('test.json', function(result) {
   let html = '';
   result.forEach(mhs => {
     html +=  `<div>${mhs.name}</div>`;
   });
   document.body.innerHTML = html; 
   console.log(result);
});