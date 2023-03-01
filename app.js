console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;

arr.forEach((number) => {
    sum += number;
});


    return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let favBook = {};

favBook.title = "The Stand";
favBook.author = "Stephen King";
favBook.pageCount = 1152;
favBook.readCount = 1;

console.log(favBook);

favBook.info = function() {
    return `${this.title} by ${this.author} is ${this.pageCount} page(s) long and has been read ${this.readCount} time(s).`;
}

console.log(favBook.info());


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
    let result = [];
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split("");
        letters.reverse();
        let reverseWord = letters.join("");
        result.push(reverseWord);
    }
    return result.join(" ");
}

console.log(reverseWords(sentence))

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function converter(fileData) {
    let rows = fileData.split("\n");
    let headers = rows[0].split(",");

    let result = [];
    for (let i = 1; i < rows.length; i++) {
        let obj = {};
        let data = rows[i].split(",");
        data.forEach((value, index) => {
            let headerName = headers[index];
            obj[headerName] = value;
        });
        result.push(obj);
    }
    return result;

}

console.log(converter(csvData));

