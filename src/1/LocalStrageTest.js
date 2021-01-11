export default class LocalStrageTest {
    constructor() {
        this.KEY = 'some-key';
        this.VALUE = new Date();
    }
    get Key() { return this.KEY; }
    get Value() { return localStorage.getItem(this.KEY); }
    get Keys() {
        let keys = [];
        for (let i=0; i<localStorage.length; i++) { keys.push(localStorage.key(i)); }
        return keys;
//        for (let i=0; i<localStorage.length; i++) { yield keys.push(localStorage.key(i); }
    }
    show() {
        console.log('Show all keys.');
        for (let key of this.Keys) {
            console.log(`  ${key}=${localStorage.getItem(key)}`);
        }
    }
    load() {
        console.log(`Loaded !! ${this.KEY}=${this.Value}`);
    }
    save() { // 1. キーが存在しないなら保存する。 2. 値が異なるなら保存する
        if (this.Value == this.VALUE) { console.log('Not save. Existed equal value.'); }
        else {
            localStorage.setItem(this.KEY, this.VALUE);
            console.log(`Saved !! ${this.KEY}=${this.Value}`);
        }
    }
    remove() {
        localStorage.removeItem(this.KEY);
        console.log(`Removed !! ${this.KEY}=${this.Value}`);
    }
    clear() {
        localStorage.clear();
        console.log(`Cleared !! ${this.KEY}=${this.Value}`);
    }
}

