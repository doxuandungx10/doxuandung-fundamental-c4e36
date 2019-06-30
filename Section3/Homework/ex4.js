// EX4
myflock = [5, 7, 300, 90, 24, 50, 75];
console.log(`Hello, my name is Dung and these are my ship sizes [${myflock}]`);

for (j = 1; j < 5; j++) {
    console.log(`MONTH ${j}`);
    for (i = 0; i < 7; i++) {
        myflock[i] = myflock[i] + 50;
    }
    console.log(`One month has passed, now here is my flock [${myflock}]`);

    let max = myflock[1];
    for (i = 1; i < 7; i++) {
        if (myflock[i] > max) {
            max = myflock[i];
        }
    }
    console.log(`Now my biggest sheep has size ${max} let's shear it`);
    let x = myflock.indexOf(max);
    myflock[x] = 8;
    console.log(`After shearing, here is my flock [${myflock}]`);
    
}
