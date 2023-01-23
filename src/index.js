const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    str_expr = String(expr);
        var letter_count = ((expr).length)/10; //кол-во зашифрованных букв
        var morse_arr = new Array(letter_count);
        var i =0;
        var morse_letter='';
        var res_str = '';

        for (i=0; i<letter_count; i++) {
            morse_letter = '';
            for (j=i*10; j<(i+1)*10; j=j+2) {
                if (str_expr[j] === '*') {
                    morse_letter = ' ';
                }
                if ((str_expr[j] === '1') && (str_expr[j+1] === '0')) {
                    morse_letter = morse_letter + '.';
                }
                if ((str_expr[j] === '1') && (str_expr[j+1] === '1')) {
                    morse_letter=morse_letter+'-'; 
                }
            }
            morse_arr[i]=morse_letter;
        }

        for (i=0; i<letter_count; i++) {
            res_str=res_str+ MORSE_TABLE[morse_arr[i]];
        }

    // for (i=0; i<letter_count; i++) {
    //     str_res = str_res + morse_arr[i];
    // }
    return res_str;
    
}

//console.log(decode('0000001111**********0000000010'));


module.exports = {
    decode
}