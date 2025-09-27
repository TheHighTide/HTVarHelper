/**
 * Check if a string contains any special characters.
 * 
 * @param {string} string The string to check
 * 
 * @returns `true` if the string contains special characters and `false` if it doesn't
 * 
 * @throws {TypeError} If `string` is not a string
 */
export function containsSpecialCharacters(string) {
    if (typeof string !== 'string') {
        throw new TypeError("Input must be a string");
    }

    const specialCharacters = [
        '`', '~', '!', '@', '#', '$', '%', '^', '&', '*',
        '(', ')', '-', '_', '=', '+', '[', '{', ']', '}',
        '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>',
        '/', '?'
    ];

    for (let char of specialCharacters) {
        if (string.includes(char)) {
            return true;
        }
    }

    return false;
}

/**
 * Check if a string is empty.
 * @param {string} string The string to check
 * 
 * @returns `true` if the string is empty and `false` if it isn't
 * 
 * @throws {TypeError} If `string` is not a string
 */
export function isEmptyString(string) {
    if (typeof string !== 'string') {
        throw new TypeError("Input must be a string");
    }

    return string.length === 0;
}