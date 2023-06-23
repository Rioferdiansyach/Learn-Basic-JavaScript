let penumpang = ['rio',undefined,'rika'];
let tambahPenumpang = function(namaPenumpang,penumpang){
  // jika angkot kosong
    if( penumpang.length == 0 ){
      //tambah penumpang di awal array
      penumpang.push(namaPenumpang);
      // kembalikan isi array & keluar dari function
      return penumpang;
    }else{
      //telusuri seluruh kursi dari awal
      for( i = 0; i < penumpang.length; i++ ){
        //jika ada kursi kosong
        if( penumpang[i] == undefined ){
          //tambah penumpang di kursi tersebut
          penumpang[i] = namaPenumpang;
          //kembalikan isi array & keluar dari function
          return penumpang;
          //jika sudah ada nama yg sama
        }else if ( penumpang[i] == namaPenumpang ){
          //tampilkan pesan kesalahannya
          console.log(`Penumpang ${namaPenumpang} sudah ada di dalam angkot`);
          //kembalikan isi array & keluar dari function
          return penumpang;
          // jika seluruh kursi terisi
        } else if( i == penumpang.length - 1 ){
          // tambah penumpang di akhir array
            penumpang.push(namaPenumpang);
            // kembalikan isi array & keluar dari function
          return penumpang;
  
    }
  }  
 }
}

let hapusPenumpang = function(namaPenumpang,penumpang){
    //Jika angkot kosong
  if ( penumpang.length == 0 ){
    // tampilkan pesan bahwa angkot kosong,dan tidak mungkin ada penumpang turun
    console.log(`Angkot masih kosong bro santuy :v`);
    //kembalikan isi array & keluar dari function
    return penumpang;
  }else {
    // telusuri seluruh kursi dari awal
    for ( i = 0 ; i < penumpang.length; i++ ){
      // jika nama penumpang sesuai
        if( penumpang[i] == namaPenumpang ){
          //hapus penumpang dengan mengubah namanya,menjadi undefined
          penumpang[i] = undefined;
          // kembalikan isi array & keluar dari function
          return penumpang;
          // jika tidak ada nama yg sesuai
        } else if( i == penumpang.length -1 ){
          // tampilkan pesan kesalahannya
          console.log(`tidak ada ${namaPenumpang} didalam angkot`);
          // kembalikan isi array & keluar dari function
            return penumpang;
      }
    }
  }
 }

// membuat Object angkot

// //buat data sopir,trayek,penumpang,kas. dengan object function constructor
// function Angkot(sopir,trayek,penumpang,kas){
//   this.sopir = sopir;
//   this.trayek = trayek;
//   this.penumpang = penumpang;
//   this.kas = kas;
//   // buat methods atau function didalam object dengan nama penumpangNaik untuk menambah penumpang
//   this.penumpangNaik = function(namaPenumpang){
//       this.penumpang.push(namaPenumpang);
//       return this.penumpang;
//   }
//   // buat methods ataufunction didalam object dengan nama penumpangTurun untuk mengurangi penumpang dan masukkan parameter nya 2 yaitu nama penumpang dan bayar
//   this.penumpangTurun = function(namaPenumpang,bayar){
//     //jika penumpangnya kosong
//     if( penumpang.length === 0){
//       //tampilkan angkot masih kosong dengan alert
//       this.alert('Angkot Masih Kosong');
//       //kembalikan isi array dengan false agar keluar dari pengkondisian
//       return false;
//     }
//     // telusuri kursi dari awal
//     for( let i = 0; i < penumpang.length; i++ ){
//       //jika penumpang yg ada diangkot turun
//       if( penumpang[i] == namaPenumpang ){
//         //maka ganti dengan undefined  
//         penumpang[i] = undefined;
//         //tambahkan dengan += argumen bayar
//         this.kas+= bayar;
//         //kembalikan isi array
//         return this.penumpang;
//       }
    
//     }

//   }
// }

// //buat angkot nya

// let angkot1 = new Angkot('Sandhika galih',['serang','cilegon'],[],0);
// let angkot2 = new Angkot('Tom Cruise',['serang','baros'],[],0);
// let angkot3 = new Angkot('Sudirman',['serang','pandeglang'], [],0);