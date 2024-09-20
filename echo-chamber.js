/**
 * Predicts the next number in a sequence of echoes.
 *
 * @param {number[]} echoes - An array of numbers representing the echoes.
 * @returns {number} The next number in the sequence.
 */
const echoes = [3, 6, 9, 12, 15, 18, 21, 24], next = 27;

function predictNext(echoes) {
    let difference = echoes[1] - echoes[0];
    let next = echoes[echoes.length - 1] + difference;
    return next;
} 



console.log(predictNext(echoes)); // 15

// Store the full sequence including the predicted number in memories
const memories = [30];

// memories.push(...echoes, next);