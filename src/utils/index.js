function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export function doImportantStuff() {
  sleep(150);
}

export function getInitialItems() {
  return Array(10)
    .fill(null)
    .map((_, index) => ({
      text: `Todo ${index + 1}`,
      id: index,
    }));
}

export function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
