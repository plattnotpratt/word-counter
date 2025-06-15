const textArea = document.getElementById('word-count-area');
const lineCountElement = document.getElementById('line-count');
const wordCountElement = document.getElementById('word-count');
const charCountElement = document.getElementById('char-count');

let charCount = (text) => {
    return text.split('').length;
}

let wordCount = (text) => {
    const words = text.split(/\s+/);
    if(words[words.length - 1] === ''){
        return words.length -1;
    }else{
        return words.length;
    }

}

let lineCount = (text) => {
    return text.split('\n').length;
}

textArea.addEventListener('input', textChanged)


function textChanged(e){
    wordCountElement.innerHTML = wordCount(e.target.value);
    charCountElement.innerHTML = charCount(e.target.value);
    lineCountElement.innerHTML = lineCount(e.target.value);
}