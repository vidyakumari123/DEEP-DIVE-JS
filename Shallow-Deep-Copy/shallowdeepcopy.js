let originalObject = {
    name: "Vidya",
    address: {
        city: "Bangalore"
        
    }
};

// let shallowCopy = Object.assign({}, originalObject);
   
// console.log("Original Object:", originalObject);


let shallowCopy = {...originalObject}
let deepCopy = JSON.parse(JSON.stringify(originalObject));


originalObject.address.city = "Mysore";
console.log(shallowCopy.address.city);
console.log(deepCopy.address.city);