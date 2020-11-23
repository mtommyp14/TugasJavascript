
const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]



const searchName=(initial, qty, callFunc)=>{
        

    for(i = 0 ; i < qty; i++){
        const filterFunc = name.filter((name)=>{
            return name.toLowerCase().includes(initial)
        })
        callFunc(filterFunc[i])
        
    }
}

function callFunc(print){
    console.log(print)
}

searchName('an',2,callFunc);

