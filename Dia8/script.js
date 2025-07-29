function doRequest(route){
    const xhr = new XMLHttpRequest();
    const url = `https://swapi.py4e.com/api/${route}`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            try{
                const data = JSON.parse(xhr.responseText);
                return data
            }
            catch(err){
                console.log(err.message);
            }
        }
    }
    xhr.send();
}

let json1 = doRequest("");
console.log(json1);