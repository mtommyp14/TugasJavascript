function  seleksiNilai (nilaiAwal, nilaiAkhir, dataArray=[]){
    if(nilaiAwal > nilaiAkhir){
        console.log('Nilai awal tidak boleh lebih kecil dari nilai akhir')
    }else if(nilaiAwal == 0 && nilaiAkhir == 0){
        console.log('Nilai Awal dan akhir tidak boleh kosong')
    }else if(dataArray.length<5){
        console.log('Data array harus lebih dari 5')
    }else{
        cek = dataArray.filter(function(x){
            return x > nilaiAwal && x < nilaiAkhir})
        cek.sort(function(a,b){
            return a-b
        })
        console.log(cek)
    }
}



seleksiNilai(60,20, [111,3,8,14,51,44,20,21,12]);
seleksiNilai(0,0, [111,3,8,14,51,44,20,21,12]);
seleksiNilai(6,20, [111,3,8]);
seleksiNilai(6,20, [111,3,8,14,51,44,20,21,12]);