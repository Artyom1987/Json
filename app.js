const data = fetch('https://artyom1987.github.io/Json/package.json');
let devices;
data.then(response => response.json())
    .then(response => {
        const devices = response.devices;
        let obj = new Object()
        devices.map( el  => Array.isArray(obj[el.placeRu])?obj[el.placeRu].push(el): obj[el.placeRu]=[el] );
        console.log(obj)
    });




