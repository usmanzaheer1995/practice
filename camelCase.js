const camelCase = (str) => {
    str = str.split(/[-_]+/);
    str = str.map((element, index) => {
        if(index !== 0) {
            element = element.charAt(0).toUpperCase() + element.substr(1);
            
        }
        return element;
    });
    return str.join("");
}

const str = "The-stealth-warrior";