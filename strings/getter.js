/**
 * Get a random character from a string.
 * 
 * @param {string} string The string to get a random character from
 * 
 * @returns Returns a random character from `string`
 * 
 * @throws {TypeError} Will throw if `string` is not a string
 * @throws {Error} Will throw if `string` is empty
 */
export function getRandomCharacterFromString(string) {
    // Check if the string is valid before randomization
    if (typeof string !== 'string') {
        throw new TypeError("Input must be a string");
    }
    if (string.length === 0) {
        throw new Error("Input cannot be empty");
    }

    // Run the randomization
    const random = Math.floor(Math.random() * string.length);
    return string.charAt(random);
}

/**
 * Get a random word from a string.
 * 
 * @param {string} string The string to get a random word from
 * 
 * @returns Returns a random word from `string`
 * 
 * @throws {TypeError} Will throw if `string` is not a string
 * @throws {Error} Will throw if `string` is empty or contains no words
 */
export function getRandomWordFromString(string) {
    // Check if the string is valid before randomization
    if (typeof string !== 'string') {
        throw new TypeError("Input must be a string");
    }
    if (string.length === 0) {
        throw new Error("Input cannot be empty");
    }

    // Setup the word list
    const words = string.split(' ').filter(word => word.length > 0);
    if (words.length === 0) {
        throw new Error("Input must contain at least one word");
    }

    // Run the randomization
    const random = Math.floor(Math.random() * words.length);
    return words[random];
}

/**
 * Get a word from a string at a specific index.
 * 
 * @param {string} string The string to get a word from
 * @param {number} index Then index to get the word from
 * 
 * @returns Returns the word in `string` at `index`
 * 
 * @throws {TypeError} Will throw if `string` is not a string or if `index` is not an integer
 * @throws {Error} Will throw if `string` is empty or contains no words
 * @throws {RangeError} Will throw if `index` is out of bounds
 */
export function getWordAtIndex(string, index) {
    // Check if the string is valid before getting the word
    if (typeof string !== 'string') {
        throw new TypeError("Input must be a string");
    }
    if (string.length === 0) {
        throw new Error("Input cannot be empty");
    }
    if (typeof index !== 'number' || !Number.isInteger(index)) {
        throw new TypeError("Index must be an integer");
    }
    if (index < 0) {
        throw new RangeError("Index cannot be negative");
    }

    // Setup the word list
    const words = string.split(' ').filter(word => word.length > 0);
    if (words.length === 0) {
        throw new Error("Input must contain at least one word");
    }
    if (index >= words.length) {
        throw new RangeError("Index out of bounds");
    }

    return words[index];
}