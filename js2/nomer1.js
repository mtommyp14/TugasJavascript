// Method Objek Array: Array.reverse() 
const arr1 = [1,2,3,4,5,"a","b","c","d","e"];
console.log(arr1.toString());       
  
arr1.reverse();
console.log(arr1.toString());


// Method Objek Array: Array.slice() 
const slice1 = [1,2,3,4,5,6,7]
const slice2 = slice1.slice(2,5)
console.log(slice2.toString()); 


// Method Objek Array: Array.push()
const nilaiPush = [1,2,3,4] 
nilaiPush.push(5)
console.log(nilaiPush)

// Method Objek Array: Array.pop()
const nilaiPop = [1,2,3,4] 
nilaiPop.pop(4)
console.log(nilaiPop)


// Method Objek Array: Array.unshift()
const nilaiUnshift = [1,2,3,4] 
nilaiUnshift.unshift(7)
console.log(nilaiUnshift)

// Method Objek Array: Array.shift()
const nilaiShift = [1,2,3,4] 
nilaiShift.shift()
console.log(nilaiShift)

// Method Objek Array: Array.sort()
const nilaiSort = ['lenovo','asus','dell','fujitsi','sony','hp']
nilaiSort.sort()
console.log(nilaiSort)

// Method Objek Array: Array.concat()
const arrKendaraan1 = ['mobil','motor']
const arrKendaraan2 = ['sepeda','bus']
arrKendaraan3 = arrKendaraan1.concat(arrKendaraan2)
console.log(arrKendaraan3) 

// Method indexOf()
const kendaraan = ['mobil', 'motor', 'sepeda', 'bus']
let index = kendaraan.indexOf('bus')
console.log(index)

// Method length
const sapa = 'Halo semua nya'
cariPanjang = sapa.length
console.log(cariPanjang)