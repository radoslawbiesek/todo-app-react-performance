function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export function doImportantStuff() {
  sleep(50);
}

export function getInitialItems() {
  return Array(5)
    .fill(null)
    .map((_, index) => ({
      text: `Todo ${index + 1}`,
      id: index,
    }));
}
