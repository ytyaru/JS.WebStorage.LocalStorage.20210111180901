class LocalStorageTest {
    #key = 'some-key';
    #value = new Date();
    constructor(key=null, value=null) {
        console.log(localStorage);
        this.#key = key || this.#key;
        this.#value = value || this.Value || this.#value;
        this.#addListener();
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
    #addListener() {
        console.log(`called #addListener`);
        window.addEventListener('click', function(e) { alert('clicked!!'); });
        window.addEventListener('storage', function(e) {
            console.log(`storage event !!\n  key=${e.key}\n  oldValue=${e.oldValue}\n  newValue=${e.newValue}\n  url=${e.url}\n  storageArea=${JSON.stringify(e.storageArea)}`);
        });
    }
}

