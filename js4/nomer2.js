/*
1. Mulai
2. Input Data
3. Validasi Kata
4. Ditukat(split) antara huruf2
5. Pisahkan berdasarkan spacebar
6. Dilakukan split untuk tiap kata2 yang sudah di bisah
7. Disatukan kembali
8. Cetak
9. Selesai
*/


function reverseString(kata) {
    let currentString = kata;
    let newString = '';
    let cetakKata ='';
    
    

    if(typeof(kata)!=='string' ){
        console.log('Harus String')
    }else if(kata==''){
        console.log('Tidak boleh kosong')
    }else{
        for (let i = kata.length - 1; i >= 0; i--) {
            newString = newString + currentString[i];
        }
        // console.log(newString);
    
        const splitNewString = newString.split(' ')
        // console.log(splitNewString);
    
        let str = splitNewString.map( item => {
            cetakKata = item.split('').reverse().join('')
            return cetakKata
        });
        // console.log(str);
    
        
        console.log(str.join(' '));
    }
    
} 

reverseString(12312);
reverseString('');
reverseString('hello java script');