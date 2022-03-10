function letsGo(){

    fetch('/data/data.json')
    .then( res => res.json() )
    .then( data => callback(data));

};
window.onload = letsGo;