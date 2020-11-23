// Soal 1
const biodata = {
    name: "Muhammad Tommy Prasetyo",
    age: 24,
    hobbies: ['PLay Guitar','Reading','Playing Games','Karoke'],
    isMarried: false,
    schoolList:[
        {name: 'Binus University' , 
        yearIn: '2014', 
        YearOut: '2020',  
        major: 'Informatin System and Industrial Engineering'},
        {name:'Telkom School', 
        yearIn:'2011', 
        yearOut: '2014', 
        major: 'Jaringan Akses'},
        {name:'SMP Negeri 279', 
        yearIn:'2008', 
        yearOut: '2011', 
        major: null},
        {name:'SDN 02 Pg', 
        yearIn:'2002', 
        yearOut: '2008', 
        major: null},
    ],
    skills: [
        {
            skillsName: "javascript",
            level: "advance"
        },
        {
            skillsName: "html",
            level: "advance"
        },
        {
            skillsName: "css",
            level: "advance"
        },
        
    ],
    interestInCoding: true
}

// console.log(biodata)



// Soal 2
const mtk = "enam"
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

let grade

if(Number.isInteger(mtk)== true &&
Number.isInteger(bahasaIndonesia)== true &&
Number.isInteger(bahasaInggris)== true &&
Number.isInteger(ipa)== true){
    let rataRata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4
    if (rataRata>=90 && rataRata<=100) {
        grade = 'A'
    }else if(rataRata>=80 && rataRata<=89 ){
        grade = 'B'
    }else if(rataRata>=70 && rataRata<=79 ){
        grade = 'C'
    }else if(rataRata>=60 && rataRata<=69 ){
        grade = 'D'
    }else if(rataRata>=0 && rataRata<=59 ){
        grade = 'E'
    }

    console.log(rataRata)
    console.log(grade)
}else{
    console.log("Data harus number");
}








// Soal 3


const printSegitiga = 6

if(Number.isInteger(printSegitiga)== true){
    for ( i = printSegitiga; i >= 1; i--){
        for (j = 1; j<= i; j++){
        document.write(j);
    }
        document.write("<br/>");
    }    


}else if(Number.isInteger(printSegitiga) !== true){
    console.log("Data harus number");
}








// Soal 4
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}


// Jawaban a

let dataSaya = {
    name: 'Muhammad Tommy Prasetyo',
    username: "Tommy",
    email: 'mtommypras14@gmail.com',
    hobby: 'PLay Guitar'
}

let newData = {...data, ...dataSaya}
console.log(newData)


// Jawaban b
const {street, city} = data.address

console.log(street)
console.log(city)
    