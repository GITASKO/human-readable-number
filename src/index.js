
let one = [ "", "one ", "two ", "three ", "four ",
        "five ", "six ", "seven ", "eight ",
        "nine ", "ten ", "eleven ", "twelve ",
        "thirteen ", "fourteen ", "fifteen ",
        "sixteen ", "seventeen ", "eighteen ",
            "nineteen " ];


let ten = [ "", "", "twenty ", "thirty ", "forty ",
            "fifty ", "sixty ", "seventy ", "eighty ",
            "ninety " ];


function numToWords(n) {
    
    
    let str = "";
    
    if (n > 19) {
        str += ten[parseInt(n / 10)] + one[n % 10];
    } else {
        str += one[n];
    }

    if (n.length === 1) {
        return str.slice(0, -1);
    } else {
        return str;
    }
}


module.exports = function toReadable(n) {

    let out = "";

    if (n === 0) {
        return 'zero'
    }

    out += numToWords(parseInt((n / 100) % 10));

    if (n > 99) {
        out+= 'hundred ';
    }

    out += numToWords(parseInt(n % 100));

return out.slice(0, -1);
}
 


console.log (module.exports(0))
