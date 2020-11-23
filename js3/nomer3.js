// // program 1
const cekHariKerja = (angka)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{


            const dataAngka = ['1', '2', '3', '4', '5']
            let cek = dataAngka.find((item)=>{
                return item === angka
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Angka tidak tersedia'))
            }
        },3000)
    })
    
}

cekHariKerja('1')
    .then(response =>  console.log(''+response))
    .catch(response =>  console.log( '' + response ))



// Program 2
const cekKendaraan = (kendaraan)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataKendaraan = ['sepeda', 'motor', 'mobil', 'pesawat']
            let cek = dataKendaraan.find((item)=>{
                return item === kendaraan
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('anda belum mampu beli'))
            }
        },3000)
    })
    
}

cekKendaraan('sepeda')
    .then(response =>  console.log(response + ' anda telah disiapkan'))
    .catch(response =>  console.log( 'Maaf ' + response ))

async function cobaCekKendaraan(){
    try {
        const panggil = await cekKendaraan('sepeda')
        console.log(panggil)
    } catch (error) {
        console.log(error)
    }
}

cobaCekKendaraan()




// program 1
// const login = (user, pass)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{


//             const dataUser = ['budi', 'ayah', 'ibu']
//             const dataPass = ['budiaja', 'ayahajah', 'ibudong']

//             let cekuser = dataUser.indexOf(dataUser)
//             let cekpass = dataPass.indexOf(dataPass)
            
//             if(cekuser==cekpass){
//                 resolve(cekuser, cekpass)
//             }else{
//                 reject(new Error('Anda Gagal Masuk'))
//             }
//         },3000)
//     })
    
// }

// login('budi','bukanbudi')
//     .then(response =>  console.log('Masuk :'+response))
//     .catch(response =>  console.log( 'Gagal :' + response ))