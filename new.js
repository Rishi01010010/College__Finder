let url = "http://universities.hipolabs.com/search?name=";
let but = document.querySelector("button");

but.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getCollege(country)
    show(colArr);
})

async function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}


async function getCollege(country){
    try{
        let reslink = await axios.get(url+country)
        return reslink.data;
    }
    catch(err){
        console.log("error :", err);
        return[];
    }

}