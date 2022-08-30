let data;
async function getData(){
    const res = await fetch("./data.json"); //getting data
    const dataJson = await res.json();   //converting to json format
    return dataJson;   
}
async function main(){
    data = await getData();   //saving data in data variable;
    // getData() is  asynchronous, thats why we are adding await 
    //await can only be applied inside async function
}

main();

let info = document.querySelectorAll('.info');
window.addEventListener("DOMContentLoaded",()=>{
    //on loading, page will display weekly data.
    displayContent(data);
})

let hrs = document.querySelectorAll('.hrs');
let btns = document.querySelectorAll('.btn');


btns.forEach(function(item){
    item.addEventListener('click', function(e){
        let id = e.currentTarget.dataset.id;

        let timestamp;
        //initialising timestamp based on button clicked
        if(id == "daily") timestamp = "Yesterday";
        else if(id == "weekly") timestamp = "Last Week";
        else timestamp = "Last Month";

        // changing current and previous time values for every container
        for(let i = 0; i<hrs.length; i++){
            hrs[i].innerHTML = `
                                <p class="current">${data[i].timeframes[id].current}hrs</p>
                                <p class="previous">${timestamp} - ${data[i].timeframes[id].previous}hrs</p>
                                    `
        }
        
    })
    
})


function displayContent(data){
    for(let i = 0; i<info.length; i++){
        // changing weekly data for every container
        info[i].innerHTML = `<div class="top">
                                <p class="title">${data[i].title}</p>
                                <div class="svg-ellipsis">
                                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                                </div> 
                            </div>
                            <div class="hrs">
                                <p class="current">${data[i].timeframes.weekly.current}hrs</p>
                                <p class="previous">Last Week - ${data[i].timeframes.weekly.previous}hrs</p>
                            </div>`
    }
}










