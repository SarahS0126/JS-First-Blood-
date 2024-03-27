function verifyAd(name, age) {
    let welcome;
    if (age >= 18) {
        welcome = `WELCOME!!, ${name}!!`;
    } else if (age < 18) {
        welcome = `You are not old enough!!, ${name}.`;
    }
    return welcome;
}

let myname = `Sarah`;
let myage = 23;

console.log(verifyAd(myname, myage));