console.log('label')

label:for (let i = 0; i < 10; i++) {
    if (i < 5) {
        console.log('i < 5');
        // continue label;
    }
    console.log('i < 10');
}