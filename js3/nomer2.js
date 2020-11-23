const getmonth = (callback)=>{
    setTimeout(()=>{
        let error = false
        let month = ['January','Febuary','March','April','May','Juni','July','August','September','October','November','Desember']
        if(!error){
            callback(null, month)
        }else{
            callback(new Error ('Sorry Data NOt Found', []))
        }
    },3000)
}

function showMonth(str, month){
    if(str!=null){
        console.log(str.message)
    }else{
        const caribulan = month.map((name)=> {return name})
        for(const bulan of caribulan){
            console.log(bulan);
        }
    }
}

getmonth(showMonth)



