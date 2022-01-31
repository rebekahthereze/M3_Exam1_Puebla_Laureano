// let done = document.getElementById('done');
// let not = document.getElementById('not');

fetch('https://www.boredapi.com/api/activity/')
.then(
    function (response) {
        console.log(response);

        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }

        response.json().then(function(data) {
            const act = data.activity;
            document.getElementById('act-text').innerHTML = act;
            }
        );

    }
)
.catch(function(err){
    console.log(err+'404');
}
);