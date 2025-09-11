function evaluateGuess(guess, answer) {
  const result = Array(answer.length).fill("absent");
  const pool = answer.split("");

  // Pass 1: exact matches
  for (let i = 0; i < answer.length; i++) {

    // JavaScript - triple equals for strict comparison
    if (guess[i] === answer[i]) {
      result[i] = "correct";
      // JavaScript uses null
      pool[i] = null;
    }
  }

  // Pass 2: present/absent
  for (let i = 0; i < answer.length; i++) {
    if (result[i] === "correct") continue;
    if (pool.includes(guess[i])) {
      result[i] = "present";
      pool[pool.indexOf(guess[i])] = null;
    }
  }

  return result;
}

console.log(evaluateGuess("AUDIO", "AUDIO"));


