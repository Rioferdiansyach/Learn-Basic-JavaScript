//Membuat pengulangan bercabang

// var s = ''; //membuat variable s dengan nilai string kosong
// var value = 1;
// for(var i = 0; i < 5; i++){ //melakukan looping/pengulangan untuk mengulang baris
//   for(var j = 0; j <= i; j++){ // melakukan looping untuk kolom pengulangan untuk mengulang berapa bintang yg ingin kita cetak dari baris tertentu
//    s+= value++ + ' ';
//   }
//   s+='\n'; //setiap loop selesai mengeksekusi perintah maka akan pindah baris berikutnya.
// }
// console.log(s);


let s = '';
let value = 1
for( let i = 0; i < 5; i++ ){
    for( let j = 0; j <= i; j++  ){
        s+='*';
    }
        s+='\n';
}
for( let y = 5; y > 0; y-- ){
    for( let x = 0; x < y; x++ ){
      s+='*';
    }
    s+= '\n';
}
console.log(s);
