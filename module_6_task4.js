printNumbers(5, 10);

function printNumbers(a, b) {
    let currentNum = a;

    const intervalId = setInterval(() => {
      console.log(currentNum);
      if (currentNum === b) {
        clearInterval(intervalId);
      } else {
        currentNum++;
      }
    }, 1000);
  }
