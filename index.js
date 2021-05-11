// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(arr, occasion) {
  const reply = [];
  for (let i = 0; i < arr.length; i++) {
    reply.push(`Thank you, ${arr[i]}, for the wonderful ${occasion} gift!`);
  }
  return reply;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(num) {
  let i = num;
  while (i >= 0) {
    console.log(i--);
  }
}
