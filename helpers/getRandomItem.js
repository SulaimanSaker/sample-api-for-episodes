export default function getRandomItem(array) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * array.length);

  // get random item
  const item = array[randomIndex];

  return item;
}
