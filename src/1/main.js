import LocalStrageTest from './LocalStrageTest.js';
window.addEventListener('load', (event) => {
    let test = new LocalStrageTest();
    test.show();
    test.load();
    test.save();
    test.remove();
    test.clear();
});
