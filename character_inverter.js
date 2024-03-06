function character_inverter(str) {
    let originalCharacters = str.split("");
    let invertedCharacters = [];
    for (let i = originalCharacters.length - 1; i >= 0; i--) {
        invertedCharacters.push(originalCharacters[i]);
    }
    const result = invertedCharacters.join("");	
    console.log(result);
    return result;
}

character_inverter("Hello World!"); // !dlroW olleH
character_inverter("JavaScript"); // tpircSavaJ