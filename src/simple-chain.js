const chainMaker = {
  name:'',
  getLength() {
    let arr = this.name.split('~~');
    return arr.length;
  },
  addLink(value) {
    if (value === null) {
      value = 'null';
    } if (typeof(value) === 'undefined') {
      value = 'undefined';
    } if (value === true) {
      value = 'true';
    } if (value === false) {
      value = 'false';
    }
    if (this.name !== '') {
      this.name = this.name +  `~~( ${value} )`;
    } else {
      this.name = `( ${value} )`;
    }
    return chainMaker;
  },
  removeLink(position) {
    let arr = this.name.split('~~');
    if (typeof (position) === 'number') {
      if (position > 0 && position <= arr.length) {
        arr.splice(position - 1, 1);
        this.name =  arr.join('~~');
        return chainMaker;
      } else {
        this.name = '';
        throw new Error();
      }
    } else {
      this.name = '';
      throw new Error();
    }
  },
  reverseChain() {
    let arr = this.name.split('~~');
    if (arr.length === 0 || arr.length === 1) {
      return chainMaker;
    } else {
      arr.reverse();
      this.name = arr.join('~~');
      return chainMaker;
    }
  },
  finishChain() {
    let result = this.name;
    this.name = '';
    return result;
  }
};


module.exports = chainMaker;