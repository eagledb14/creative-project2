function info() {
    let infoUrl = "https://api.countapi.xyz/info/db14.net/test";

    fetch(infoUrl)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            document.getElementById('the-button').innerHTML = json.value;
        })
}

document.getElementById('the-button').addEventListener("click", event => {
    event.preventDefault();
    document.getElementById('the-button').disabled = true;


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
            }, 10000);
        });
});


document.getElementById("increase").addEventListener("click", event => {
    event.preventDefault();

    let addUrl = "https://api.countapi.xyz/update/db14.net/test?amount=1";

    fetch(addUrl)
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json);
        document.getElementById('the-button').innerHTML = json.value;
        // document.getElementById('the-button').disabled = false;
    })
})
