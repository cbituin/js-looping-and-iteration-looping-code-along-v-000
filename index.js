const writeCards = (arr, ev) => {
  for(let i = 0; i < arr.length; i++) {
    console.log(`Thank you, ${arr[i]}, for the wonderful ${ev} gift!`);
  }
};

const countdown = (int) => {
  while (int > 0) {
    console.log(int);
    int -= 1;
  };
};
