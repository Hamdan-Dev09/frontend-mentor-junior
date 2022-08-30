let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

  
let info = document.querySelectorAll('.info');
displayContent(data);


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
