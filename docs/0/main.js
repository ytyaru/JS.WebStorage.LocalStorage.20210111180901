window.addEventListener('load', (event) => {
    const KEY = 'some-key';
    const VALUE = 'some-value';
    let v = localStorage.getItem(KEY);
    if (v != VALUE) { localStorage.setItem(KEY, VALUE); }
//    localStorage.removeItem(KEY);
    console.log(`${KEY}=${v}`);
    alert(`${KEY}=${v}`);
});
