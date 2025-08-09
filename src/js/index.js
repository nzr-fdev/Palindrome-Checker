const inputArea = document.getElementById('text')
const resultArea = document.getElementById('result')
const submit = document.getElementById('submit')

const palindrome = () => {
    const input = inputArea.value;

    const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverseInput = cleanInput.split('').reverse().join('');

    if (!input) {
        resultArea.textContent = "Please input a value!";
        return;
    } else if (cleanInput === reverseInput) {
        resultArea.textContent = `"${input}" is a Palindrome!`
    } else {
        resultArea.textContent = `"${input}" is not a Palindrome`
    }
}

submit.addEventListener("click", palindrome)