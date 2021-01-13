class LocalStorageTest {
    #key = 'some-key';
    #value = new Date();
    constructor(key=null, value=null) {
        console.log(localStorage);
        this.#key = key || this.#key;
        this.#value = value || this.Value || this.#value;
    }
    get Keys() { return this.#GetKeys(); }
    get Key() { return this.#key; }
    get Value() { return localStorage.getItem(this.#key); }
    set Value(value) { if(value) { localStorage.setItem(this.#key, value); } }
    * #GetKeys() {
        for (let i=0; i<localStorage.length; i++) {
            yield localStorage.key(i);
        }
    }
    get(key) { return localStorage.getItem(key); }
    set(key, value) { if (key && value) { localStorage.setItem(key, value); } }
    remove(key) { localStorage.removeItem(key); }
    clear() { localStorage.clear(); }
}

