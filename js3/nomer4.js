
fetch('https://jsonplaceholder.typicode.com/users').then(res=>{
        return res.json()
})
.then(name=>{
    const namaOrang = name.map(person=>person.name)
    for (const nama of namaOrang) {
        console.log(nama)
    }
})
.catch(console.log('Error'))