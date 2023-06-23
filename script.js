
//Tugas menghitung Angkot dengan pengkondisian
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot =1;

// for(noAngkot; noAngkot <= jmlAngkot;noAngkot++){
// if (noAngkot <=6 && noAngkot !==5) {
//   console.log(`Angkot No. ${noAngkot} sedang beroperasi dengan baik`);
// }else if(noAngkot === 8 || noAngkot === 10 || noAngkot ===5 ){
//   console.log(`Angkot No. ${noAngkot} sedang lembur`);
// }else{
//   console.log(`Angkot No. ${noAngkot} Sedang tidak beroperasi`);
// }

// }

//Menjumlahkan volume 2 kubus
// masing masing kubus memiliki sisi kubus a = 8 kbus b = 3

// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

//  volumeA = a*a*a;
//  volumeB = b*b*b;

// total = volumeA + volumeB;

// console.log(total);


// pembuatan function untuk menjumlahkan dua kubus

// Mengetahui sisi masing2 kubus (ada diparameter) 
// function jumlahDuaKubus(sisiKubus1,sisiKubus2) {
  
//   var volumeKubus1 = Math.pow(sisiKubus1, 3);// Math.pow berfungsi untuk memangkatkan (3) atau berapapun (...) contoh (sisiKubus1, 2) ini dipangkatkan dengan 2 
//   var volumeKubus2 = Math.pow(sisiKubus2, 3); // Math.pow berfungsi untuk memangkatkan 
  
//   console.log(volumeKubus1);// tampilkan diconsole
//   console.log(volumeKubus2); //tampilkan diconsole
  
//   var total = volumeKubus1 + volumeKubus2; //penjumlahan nya dan ini WAJIB!
  
//   return total; //mengembalikan nilai total
// }

// // Hasil dan pemanggilan function
// alert('Selamat datang di penjumlahan dua kubus');

// var ulang = true;
// while(ulang === true){

// var a = parseInt(prompt('Berapa besar sisi kubus 1 ?')); // membuat wadah untuk nilai yg dimasukkan oleh user dan  nantinya dihitung komputer 
// var b = parseInt(prompt('Berapa besar sisi kubus 2 ?')); //membuat wadah untuk nilai yg dimasukkan oleh user dan nantinya dihitung komputer

// alert('Hasil dari penjumlahan dua kubus adalah \n' + jumlahDuaKubus(a,b));

// ulang = confirm('Ingin Menghitung jumlah dua kubus lagi?');

// }

// alert('TerimaKasih :)');


// Latihan function rekursif
// function tampilAngka(n) {

//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   return tampilAngka(n-1);
// }

// tampilAngka(10);

// latihan function rekursif faktorial
// function faktorial(n) {
//   if(n===0) return 1;
//   return n * faktorial(n-1);

// }
// console.log(faktorial(5));

//ARRAY 
//Manipulasi array

//1.menambah isi array

// var arr = ['rio','ferdiansyah','banten']
//   console.log(arr);

// atau dengan begini
// var arr2 = [];
// arr2 [0] = 'rio';
// arr2 [1] = 'ferdiansyah';
// arr2 [2] = 'banten';

// console.log(arr2);

// menghapus isi array

//  var arr3 = ['rio','ferdiansyah','banten'];
//  arr3 [2] = undefined;
// console.log(arr3);

// Menampilkan isi array dengan looping
//  var arr4 = ['rio','ferdiansyah','banten']

//  for( var i = 0;i < arr4.length ;i++ ){
//     console.log(arr4[i]);
//  }  


// method pada array

  // var arr5 = ['tes2','rio','ferdiansyah','banten','tes1']
  // arr5.shift(); // untuk menghapus elemen urutan awal pada array
  // arr5.pop(); // untukk menghapus elemen urutan terakhir pada array

  // arr5.unshift('Nama'); // untuk menambahkan elemen urutan awal pada array
  // arr5.push('kota serang'); // untuk menghapus elemen urutan terakhir pada array
  // console.log(arr5.join()); // untuk menggabungkan seluruh elemen array dan mengubahnya menjadi string 

  // //slice untuk mengiris array dan menjadikan array baru
  // var arr6 = ['serang','banten','bandung','bogor'];
  // var arr7 = arr6.slice(1,3); 
  // console.log(arr7.join('-'));
  
  // //splice untuk menyisipkan elemen di tengah2 array 

  // var arr8 = ['cilegon','serang','cirebon'];
  // arr8.splice(2,0,'medan');
  // console.log(arr8.join());

  // forEach
// var angka = [1,2,3,4,5,6,7,8,9];
// angka.forEach(function(e){
//   console.log(e);
// });

//map = itubisa return value atau mengembalikan nilai, forEach tidak bisa
// var angka = [1,2,3,4,5,6,7,8,9,10];
// angka.map(function(e){
//    return e;
//   });
//   console.log(angka.join());
//   // bahkan bisa dimasukkan operator aritmatika dengan catatan menambahkan var bar untuk menampung penjumlahannya 
//   var angkaSum = angka.map(function(e){
//     return e *2 ; //bahkan bisa dimasukkan operator aritmatika 
//   });
//   console.log(angkaSum.join());

// sort = untuk mengurutkan elemen yang tadinya acak
var angka = [1,3,2,5,4,6,8,7,9,20,10,30,100,200,300,]
angka.sort(function(a,b){
  return a-b;
});
console.log(angka.join('-'));
