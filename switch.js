alert('Selamat datang ');
confirm('Apakah anda muslim');
confirm('Apakah anda ingin bertanya tentang hewan apa saja yang boleh dikurbankan?');
alert('Mari Silahkan Tanya dengan kami..');

var ulangi = true;
while (ulangi === true) {
  var nama = prompt('Masukkan nama anda : ');
    alert(`Halo ${nama} `);

  var hewanQurban = prompt(`Masukkan Hewan ternak yang anda pilih untuk berqurban : (ingat! : HEWAN TERNAK YAAHH! )`);
  
  switch (hewanQurban) {
    case 'Kambing':
      alert('Kambing adalah hewan yang bisa di qurbankan');
      break;
    case 'Sapi' :
    alert('Sapi adalah hewan yang bisa di qurbankan dan itu lebih baik');
      break;
      case 'Kerbau':
        alert('Kerbau adalah hewan yang bisa di qurbankan dan itu lebih baik');
      break;
      case 'Unta':
        alert('Unta adalah hewan yang bisa di qurbankan dan itu lebih baik');
        break;
        case 'Domba':
          alert('Domba adalah hewan yang bisa di qurbankan');
          break;

        default: 
        alert('Hewan yang anda masukkan tidak termasuk hewan qurban');
      break;

  }
  ulangi = confirm('Apakah anda ingin Bertanya lagi? ');
}
