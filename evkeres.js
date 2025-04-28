function kereses(){
    let BeEv=document.getElementById("BeEv").value
    fetch("https://api.nobelprize.org/v1/prize.json")
.then(x=>x.json())
.then(y=>{

    let sz=""
    
    y.prizes.forEach(elem => {
        //console.log(elem)
        if (elem.year==BeEv)
        {
            sz+=`
            <p style="font-size:20px; text-decoration:underline;color:red;">
            ${elem.year} ${elem.category}
            </p>
            `
            for (const elemEmber of elem.laureates) {
                sz+=`
                <p style="font-size:15px;font-style:italic">
                ${elemEmber.firstname} ${elemEmber.surname}
                </p>
                <p style="font-size:10px">
                ${elemEmber.motivation}
                </p>
                `
            }
            sz+="<hr>"
        }
    });
    if(sz=="")
        sz+="Nincs találat."
    document.getElementById("kiadat").innerHTML=sz
})
}