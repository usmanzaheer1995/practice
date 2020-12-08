/*
Implement an autocomplete system. That is, given a query string s and a set of all possible query strings,
return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

class Trie {
  constructor(key) {
    this.key = key;
  }

  insert(name) {
    let node = this;
    const length = name.length;

    for (let i = 0; i < length; i++) {
      const currentLetter = name[i];
      if (node[currentLetter]) {
        node = node[currentLetter];
      } else {
        node[currentLetter] = new Trie(currentLetter);
        node = node[currentLetter];
      }
    }

    node.name = name;
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

console.log(dict.getPartials("a"));
