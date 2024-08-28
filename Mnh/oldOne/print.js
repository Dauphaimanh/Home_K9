// chưa được link vào file html nào
// How to print the numbers from 1 to 100 without using loops in JavaScript

function printNumber(start, end) {
    console.log(`${start} <br>`)

    if (start < end) {
        printNumber((start + 1), end)
    }
}
printNumber(1, 100);

