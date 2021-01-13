window.addEventListener('load', (event) => {

    console.log(event);
    let test = new LocalStorageTest();
    show(test, 'Keys');

    test.set('key-1', new Date());
    show(test, 'set() 1');

    test.clear();
    show(test, 'clear()');

    test.set('key-2', new Date());
    show(test, 'set() 2');

    test.remove('key-2');
    show(test, 'remove() 2');

    test.set('key-3', new Date());
    show(test, 'set() 3');

    function show(c, msg) {
        console.log(`----- ${msg}`);
        for (let key of c.Keys) {
            console.log(`${key}=${c.get(key)}`);
        }
    }
});
