import LocalStrageTest from './LocalStrageTest.js';
window.addEventListener('load', (event) => {
    let test = new LocalStrageTest();
    test.load();
    test.save();
    test.destory();
});
