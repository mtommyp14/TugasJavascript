/*
1. Mulai
2. Input Data
3. Validasi Kata
4. Deklarasi vararibel panjang kata
5, Deklarasi variabel i = awal kata dan deklarasi variabel j = akhir kata
6. Cek jika i sama dengan j
7. jika salah cetak bukan palindrom 
8. jika iya di cek lagi i sama dengan j
9. jika sudah sama maka cetak palindrom
10. Selesai 

*/

const inputKata = 'Malam';

if(typeof(inputKata)!=='string' ){
    console.log('Harus String')
}else if(inputKata==''){
    console.log('Tidak boleh kosong')
}else{
    const i = inputKata.toLowerCase()
    // console.log(i)
    
    let j=''
    for (let i = inputKata.length - 1; i >= 0; i--) {
        j = j + inputKata[i].toLowerCase()
    }
    // console.log(j)

    if(i==j){
        console.log('Palindrom');
    }else(console.log('Bukan Palindrom'))
}

