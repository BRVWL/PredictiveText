// Solution 2
class PrefixTreeNode {
  children: PrefixTreeNode | Record<string, any>;
  endWord: boolean;
  value: string;
  constructor(value: string) {
    this.children = {};
    this.endWord = false;
    this.value = value;
  }
}

export class PrefixTree extends PrefixTreeNode {
  constructor() {
    super("");
  }

  addWord(string: string) {
    const addWordHelper = (node: any, str: string) => {
      if (!node.children[str[0]]) {
        node.children[str[0]] = new PrefixTreeNode(str[0]);
        if (str.length === 1) {
          node.children[str[0]].endWord = true;
        }
      }
      if (str.length > 1) {
        addWordHelper(node.children[str[0]], str.slice(1));
      }
    };
    addWordHelper(this, string);
  }

  predictWord(string: string) {
    var getRemainingTree = function (string: string, tree: any) {
      var node = tree;
      while (string) {
        node = node.children[string[0]];
        string = string.substring(1);
      }
      return node;
    };

    var allWords: any[] = [];

    var allWordsHelper = function (stringSoFar: string, tree: any) {
      for (let k in tree.children) {
        const child = tree.children[k];
        var newString = stringSoFar + child.value;
        if (child.endWord) {
          allWords.push(newString);
        }
        allWordsHelper(newString, child);
      }
    };

    var remainingTree = getRemainingTree(string, this);
    if (remainingTree) {
      allWordsHelper(string, remainingTree);
    }

    return allWords;
  }
}
