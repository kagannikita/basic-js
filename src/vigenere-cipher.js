class VigenereCipheringMachine {
  constructor(type) {
    this.type = type !== false;
  }
  encrypt(msg, key) {
    if (typeof msg !== 'string' || typeof key !== 'string') {
      throw new Error()
    }

    let msg_arr = msg.toUpperCase().split('');
    let keyword = key.toUpperCase();
    let abc = '';
    for (let i = 65; i <= 90; i++) {
      abc += String.fromCodePoint(i);
    }
    let ABC = abc.split('');

    while (keyword.length < msg.length) {
      keyword += keyword;
    }
    keyword = keyword.slice(0, msg.length).split('');

    let res = [];
    for (let i = 0, j = 0; i < msg_arr.length; i++) {
      if (/[A-Z]/.test(msg_arr[i])) {
        let MIndex = ABC.indexOf(msg_arr[i]);
        let KIndex = ABC.indexOf(keyword[j]);

        let a = MIndex + KIndex;
        let CIndex = a % 26;
        res.push(ABC[CIndex]);
        j++;
      }
      else {
        res.push(msg_arr[i]);
      }
    }

    if (!this.type) {
      return res.reverse().join("");
    }
    else return res.join("");
  }

  decrypt(encrypt_msg, key) {
    if (typeof encrypt_msg !== 'string' || typeof key !== 'string') {
      throw new Error();
    }
    let encrypt_msg_arr = encrypt_msg.toUpperCase().split('');
    let keyword = key.toUpperCase();
    let abc = '';
    for (let i = 65; i <= 90; i++) {
      abc += String.fromCodePoint(i);
    }
    let ABC = abc.split('');

    while (keyword.length < encrypt_msg.length) {
      keyword += keyword;
    }
    keyword = keyword.slice(0, encrypt_msg.length).split('');

    let res = [];
    for (let i = 0, j = 0; i < encrypt_msg_arr.length; i++) {
      if (/[A-Z]/.test(encrypt_msg_arr[i])) {
        let CIndex = ABC.indexOf(encrypt_msg_arr[i]);
        let KIndex = ABC.indexOf(keyword[j]);

        if (CIndex < KIndex) {
          let MIndex = 26 + (CIndex - KIndex);
          res.push(ABC[MIndex]);
        }
        else {
          let MIndex = (CIndex - KIndex) % 26;
          res.push(ABC[MIndex]);
        }
        j++;

      }
      else res.push(encrypt_msg_arr[i]);
    }
    if (!this.type) {
      return res.reverse().join("");
    }
    else return res.join("");
  }

}

module.exports = VigenereCipheringMachine;