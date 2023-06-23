//PSEUDOCODE membuat game suwit
//membuat pilihan player

//Membuat looping
var ulangi = true;

while (ulangi) {


  
  alert('Selamat Datang di game suwit \n created by : RIO');
var p = prompt('PILIH : kertas,gunting,batu');

//membangkitkan bilangan random
var comp = Math.random();
//membuat pilihan computer

if (comp < 0.34) {
  comp = 'kertas';
}else if(comp > 0.34 && comp <= 0.75){
    comp = 'gunting';
}else{
    comp = 'batu';
}

//membuat aturan rules

var hasil = '';
var error = 'ERROR! MASUKKAN NILAI YANG SESUAI';
if (p == comp) {
    hasil = 'SERI';

  }else if(p == 'kertas'){
    
  hasil = (comp == 'batu') ? 'MENANG':'KALAH';

}else if(p == 'gunting'){
  hasil = (comp == 'kertas') ? 'MENANG':'KALAH';

}else if(p == 'batu'){
  hasil = (comp == 'gunting') ? 'MENANG':'KALAH';
}else {
  error;
}


//hasil tampilan


if (hasil) {
  alert(`Anda Memilih ${p} sedangkan komputer memilih ${comp} maka hasilnya anda : ${hasil}`);
} else {
  alert(error);
}

ulangi = confirm('Mau Lagi ? ');

} 

alert('Terima Kasih');








