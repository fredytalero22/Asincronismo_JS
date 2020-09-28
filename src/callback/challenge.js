let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData (ulr_api, callback) {
    let xhttp = XMLHttpRequest();
    xhttp.open('GET', ulr_api, true);
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error '+ ulr_api);
                return callback(error, null);
            }
        }
    }
}