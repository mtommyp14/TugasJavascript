const cekHariKerja = (day)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
    
}

// then catch
cekHariKerja('minggu')
    .then(response =>  console.log('Benar hari ini adalah hari '+response))
    .catch(response =>  console.log( '' + response ))
    // then di jalankan ketika kondisi didalam promise benar
    // then di jalankan ketika kondisi didalam promise benar


//try catch
async function cobaCek(){
    try {
        const panggil = await cekHariKerja('minggu')
        console.log(panggil)
    } catch (error) {
        console.log(error)
    }
}
    // try akan menjalakan promise ketika kondisi promise benar
    // catch akan jalan ketika ada error

cobaCek()
