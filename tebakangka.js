

  //Komputer membangkitkan angka random
  var random = Math.floor(Math.random()*10)+1;

  // Player melakukan input (menebak)
  var guess = prompt(`Pilihlah angka antara 1 - 10! \n (Anda memiliki tiga kali kesempatan)`);

  // Alur Permainan

  var hasil ='';
  for ( var chance = 3;chance >=1 ;chance-- ){
    if (guess == random) {
      hasil = 'BENAR';
      alert(`Angka tebakan anda ${hasil}`);
      break; // break ini digunakan untuk memberhentikan looping atau perulangan jika sudah true
    }else if(guess != random && chance >1){
      hasil = (guess < random) ? 'terlalu RENDAH' : 'terlalu TINGGI'
      guess = prompt(`Angka tebakan anda ${hasil} \nCoba Tebak lagi`);
    }else if(guess != random && chance ==1){
      hasil =('SALAH')
      alert(`Angka tebakan anda ${hasil} \n Kesempatan anda sudah habis /n
      hasil jawaban benarnya adalah : ${random} `);
    }
  
  }






alert("Terimakasih sudah bermain!");