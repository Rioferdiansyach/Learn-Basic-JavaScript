//DECLARATION
// DECLARE masukkan nilai zakat

// IMPLEMENTATION 
// jika nilai zakat memenuhi syarat maka tampilkan anda wajib zakat
// jika tidak memenuhi syarat maka tampilkan anda terbebas dari kewajiban zakat mal

// DISPLAY (variabel nilai yang dimasukkan)

// alert('Selamat datang Di website kami');
// var ulangi = true;

// while(ulangi === true){
//   var nama = prompt('Masukkan Nama anda: ');
//       alert(`Marhaba ahlan wa sahlan ${nama}`);
//   var tanya = prompt(` Apakah sdr ${nama} ingin menanyakan nominal harta yang wajib di zakatkan ?/n cth:(Y/N) ? \n 'Y' = YA 'N' = TIDAK `);

//   if (tanya === 'Y') {
//     alert(`Silahkan Bertanya kami akan jawab dengan sepenuh hati :)`);
//   }else if(tanya === 'N'){
//       alert(`Terimakasih dan mohon kembali jika tidak ingin bertanya :)`);
//   }else 
//   alert('Mohon Masukkan nilai yang sesuai (Y/N)!');
      
//   var zakat = prompt('Masukkan Jumlah harta anda : \n (PENTING!: yang sudah haul / menetap selama setahun)');
//   if (zakat >= '90.000.000' ) {
//     alert(`Nominal Harta : ${zakat} Memenuhi Persyaratan untuk Zakat mal `);
//   }else if(zakat < '90.000.000'){
//       alert(` Nominal harta ${zakat} Tidak memenuhi Persyaratan untuk Zakat mal`);
//   }else
//   alert('masukkan nilai yang benar');
  
//   ulangi = confirm(`Apakah Sdr. ${nama} Ingin bertanya lagi ?`);
// }
// alert('Terima kasih sudah bertanya, Semoga Berkah.. :) ');

//tugas 1 membuat hitungan saldo akhir yang diinput user
// var saldoawal = Number(prompt('Masukkan saldo awal anda :'));
//     alert(`Saldo awal anda :${saldoawal}`);
// var saldotambah = Number(prompt('Masukkan saldo tambah anda :'));
//     alert(`Saldo tambahan anda : ${saldotambah}`);
// var saldoakhir = saldoawal + saldotambah;

// alert(`saldo awal anda Rp${saldoawal} lalu ditambah dengan saldo tambahan sebesar Rp ${saldotambah} maka Total saldo akhirnya adalah : Rp ${saldoakhir}`);

// //tugas 2 menentukan hari
// var hari = new Date().getDay();
// var tanggal = new Date().getDate();
// var bulan = new Date().getMonth();
// var tahun = new Date().getFullYear();

// switch (hari) {
//   case 1:
//     hari = 'senin'
//     break;
//   case 2 :
//     hari = 'selasa'
//     case 3:
//       hari = 'rabu'
//       break;
//     case 4 :
//       hari = 'kamis'
//       case 5:
//         hari = `jum'at`
//         break;
//       case 6 :
//         hari = 'sabtu'
//       case 7 :
//         hari = 'ahad'
//   default:
//     hari = null;
//     break;
// }


// alert(`Hari : ${hari} . Tanggal : ${tanggal} . Bulan : ${bulan + 1} . Tahun : ${tahun}.`);

// alert(`Hari ini adalah hari ${hari}`);

// create object 
// with object literal
let mhs = {};
mhs.nama ='rio';
mhs.asal = 'serang';
mhs.usia = '19tahun';

console.log(mhs);

//create object with function declaration

// function createPerson(nama,asal,usia) {
  
//   let person = {};
//   person.nama = nama;
//   person.asal = asal;
//   person.usia = usia;
//   return person;
// }

// let person = createPerson('rio','banten','19tahun');
// console.log(person);


//create object with Constructor

function Person(nama,usia){
    this.nama=nama;
    this.usia=usia;
}
let coba = new Person('rio',20);
console.log(coba);
