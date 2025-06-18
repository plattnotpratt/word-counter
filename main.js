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
    return textArea.querySelectorAll('div').length +1;
}

textArea.addEventListener('input', function(e){
    let text = textArea.innerText;
    wordCountElement.innerHTML = wordCount(text);
    charCountElement.innerHTML = charCount(text);
    lineCountElement.innerHTML = lineCount(text);
})


function textChanged(e){
    let text = textArea.innerText;
    wordCountElement.innerHTML = wordCount(text);
    charCountElement.innerHTML = charCount(text);
    lineCountElement.innerHTML = lineCount(text);
}