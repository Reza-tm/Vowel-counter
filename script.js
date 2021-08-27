let textInput = document.getElementById("input");
let result = document.getElementById("result");
function vowelsFinder() {
	let inputValue = textInput.value.toLowerCase();
	let totalVowels = 0;
	for (let i = 0; i < inputValue.length; i++) {
		let letter = inputValue[i];
		if (letter.match(/([a,o,u,e,i])/)) {
			totalVowels++;
		}
	}
	result.textContent = `Vowels number = ${totalVowels}`;
}
