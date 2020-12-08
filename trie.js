class Trie {
  constructor(key) {
    this.key = key;
  }

  insert(name) {
    let node = this;
    const length = name.length;

    for (let i = 0; i < length; i++) {
      const currentLetter = name[i];
      // if (node[currentLetter]) {
      //   node = node[currentLetter];
      // } else {
      //   node[currentLetter] = new Trie(currentLetter);
      //   node = node[currentLetter];
      // }
      node = node[currentLetter] || (node[currentLetter] = new Trie(currentLetter));
    }

    node.name = name;
  }

  get(name) {
    let node = this;
    const length = name.length;
    let i;

    for (i = 0; i < length; i++) {
      const currentLetter = name[i];
      node = node[currentLetter];
      if (!node) {
        break;
      }
    }

    return (i === length) ? node.name : 'not found';
  }

  getPartials(name) {
    let node = this;
    const length = name.length;
    let i;

    for (i = 0; i < length; i++) {
      const currentLetter = name[i];
      node = node[currentLetter];
      if (!node) {
        break;
      }
    }

    return this.recursive(node);
  }

  recursive(node, arr = []) {
    if (node["name"]) {
      return node["name"];
    }
    Object.keys(node).forEach(key => {
      if (typeof node[key] === 'object' && node[key] !== null) {
        const val = this.recursive(node[key], arr);
        if(typeof val === 'string') {
          arr.push(val);
        };
      }
    });
    return arr;
  }
}

const dict = new Trie();

dict.insert("deer");
dict.insert("deal");
dict.insert("dawn");
dict.insert("ape");

// console.log(dict)

// console.log("deep", dict.get("deep"));
console.log(dict.getPartials("de"));

// console.log(JSON.stringify(dict));