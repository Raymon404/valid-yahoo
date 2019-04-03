/* coded by Ray */
/* valid email yahoo cek */

var requ = require('request') ;  // npm install --save request
var colo = require('colors')  ;  // npm install --save colors
var shel = require('shelljs') ;  // npm install --save readline
var read = require('readline');
var baca = require('fs');

tampilkan = shel.echo; jalankan = shel.exec;

const tanya = read.createInterface({
  input : process.stdin,
  output: process.stdout
});

colo.setTheme({
  a: 'blue',b:'red',c:'green',d:'yellow',e:['white','bgRed']
})

const banner = () => {
  tampilkan(' ');
  tampilkan('      ['.c + ' Valid Email Yahoo Check ' + '] '.c);
  tampilkan('             R'.b + 'ay404' + ' h'.b + 'acking');
  tampilkan('        407 Authentic Exploit');
}; banner();

tampilkan(' ');
tampilkan('        [ '.d + '01' + ' ]'.d + ' From List ');
tampilkan('        [ '.d + '02' + ' ]'.d + ' Write Manual ');
tampilkan('        [ '.d + '00' + ' ]'.d + ' Keluar ');
tampilkan(' ');

tanya.question(' [ Pilih ] > ', (pilih) => {
  tampilkan(' ');
  if (`${pilih}` == 01 || `${pilih}` == 1) {

  tanya.question(' [ Masukan List ] > ', (list) => {
    const baris = read.createInterface({
      input : baca.createReadStream(`${list}`),
      crlfDelay : Infinity
    }); baris.on('line', (line) => {
      requ(`http://widhitools.000webhostapp.com/api/yahoo.php?email=${line}`, function(error, response, body) {
        hasil = JSON.parse(body);
          if (hasil['status'] == 'die') {
            tampilkan(''); tampilkan(' ['.b + hasil['status'] + '] '.b + ` ${line}`);
          } else if (hasil['status'] == 'live') {
            tampilkan(''); tampilkan(' ['.a + hasil['status'] + '] '.a + ` ${line}`);
          }
        }); tanya.close();
    })
  })
  } else if (`${pilih}` == 02 || `${pilih}` == 2) {
    tanya.question(' [ Masukan Email ] > ', (email) => {
      requ(`http://widhitools.000webhostapp.com/api/yahoo.php?email=${email}`, function(error, response, body) {
        hasil = JSON.parse(body);
          if (hasil['status'] == 'die') {
            tampilkan(''); tampilkan(' ['.b + hasil['status'] + '] '.b + ` ${email}`);
          } else if (hasil['status'] == 'live') {
            tampilkan(''); tampilkan(' ['.a + hasil['status'] + '] '.a + ` ${email}`);
          }
        }); tanya.close();
    })
  } else if (`${pilih}` == 00 || `${pilih}` == 0) {
    jalankan('clear && ls'); tampilkan(' |----------| keluar |----------| '); tanya.close();
  } else {
    tampilkan(' Penulisan Salah ! '); tanya.close();
  }
})
