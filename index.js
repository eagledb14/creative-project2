function info() {
// window.addEventListener('load', event => {
    let infoUrl = "https://api.countapi.xyz/info/db14.net/test";

    fetch(infoUrl)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            document.getElementById('the-button').innerHTML = json.value;
        })

    let activityUrl = "http://www.boredapi.com/api/activity/";

    for (let i = 0; i < 10; i++) {
        fetch(activityUrl)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            let newList = document.createElement('li');
            newList.innerHTML = json.activity;
            document.getElementById("activities").appendChild(newList);
        })
    }
}

window.addEventListener('resize', (event) => {
    let dimension = window.innerWidth * 0.25;

    document.getElementById('the-button').style.width = dimension.toString() + "px";
    document.getElementById('the-button').style.height = dimension.toString() + "px";
})

document.getElementById('the-button').addEventListener("click", event => {
    event.preventDefault();
    document.getElementById('the-button').disabled = true;

    if (document.getElementById('the-button').innerHTML == "0") {
        return;
    }

    let subtractUrl = "https://api.countapi.xyz/update/db14.net/test?amount=-1";

    fetch(subtractUrl)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            document.getElementById('the-button').innerHTML = json.value;

            setTimeout(() => {
                document.getElementById('the-button').disabled = false;
            }, 5000);
        });
});


// document.getElementById("increase").addEventListener("click", event => {
//     event.preventDefault();

//     let addUrl = "https://api.countapi.xyz/update/db14.net/test?amount=1";

//     fetch(addUrl)
//     .then(response => {
//         return response.json();
//     })
//     .then(json => {
//         console.log(json);
//         document.getElementById('the-button').innerHTML = json.value;
//         // document.getElementById('the-button').disabled = false;
//     })
// })
