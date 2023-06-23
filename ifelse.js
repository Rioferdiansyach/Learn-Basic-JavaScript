// Latihan pengkondisian dengan if else

var angka = prompt('Masukkan angka anda');

if (angka %2 == 0) {
  alert(`${angka} adalah angka GENAP`);
} else if(angka %2 ==1 ){
  alert(`${angka} adalah angka GANJIL`);
}else{
  alert('Anda tidak memasukkan angka');
}

// LATIHAN Pengulangan (FOR) + pengkondisian (IF ELSE)

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for( var noAngkot ;noAngkot <= jmlAngkot ;noAngkot++ ){

if (noAngkot <= 6) {
  console.log(`Angkot No .${noAngkot} Beroperasi dengan baik`);
}else{
  console.log(`Angkot No, ${noAngkot} Sedang tidak beroperasi dengan baik`);
}


}