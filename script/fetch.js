//fetching 


fetch("https://api.myjson.com/bins/pbflc").then(function(resp){
    return resp.json()
}).then(function(json){
    console.log(json);
})