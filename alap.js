fetch("https://api.nobelprize.org/v1/prize.json")
.then(x=>x.json())
.then(y=>megjelenit(y))

function megjelenit(y){
    console.log(y)

    let sz=""
    for (const elem of y.prizes) {
        sz+=`
        <div class="col-sm-3">
            <div>
                <p>${elem.year}</p>
                <p>${elem.category}</p>
            </div>
        </div>
        `
    }
    document.getElementById("keret").innerHTML=sz
}



