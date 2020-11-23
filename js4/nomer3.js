// 1.Mulai
// 2.Input Data
// 3.Validasi Data
// 4.Pisahkan berdasarkan '0'
// 5.Urutkan berdasarkan baris nomer yang sudah terpisah
// 6.Satukan kembali kata-kata yang sudah di Urutkan
// 7.Cetak
// 8.Selesai


const sortAngka =(angka)=>{
    if(typeof(angka)=='string' || angka =='' || angka==null){
        console.log('Maaf data harus string dan tak boleh kosong')
    }else{
        let angkasplit = angka.toString().split("0")
        let angkaCetak =''
        // console.log(angkasplit);
        for(let i=0; i<angkasplit.length;i++){
            let angkaSort = angkasplit[i].split('').sort((a,b)=>a-b).join('')
            angkaCetak = angkaCetak+angkaSort
        }
        console.log(angkaCetak);
    }

}

sortAngka("42310978606475");
sortAngka();
sortAngka(42310978606475);