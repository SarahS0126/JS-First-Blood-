function verifyAdulthood(name, age) {
    let welcome;
    if (age >= 18) {
        welcome = `Welcome, ${name}!!`;
    } else if (age < 18) {
        welcome= `You are not old enough!!, ${name}.`;
    }
    return welcome;
}

let myname = "Sarah";
let myage = 18; // Liar!!

console.log(verifyAdulthood(myname, myage));