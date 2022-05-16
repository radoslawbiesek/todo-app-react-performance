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
      text: `Todo ${Math.floor((index + 1) * Math.random() * 100)}`,
      id: index,
    }));
}

export function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export function itemsReducer(items, action) {
  switch (action.type) {
    case "ADD":
      return [...items, action.payload];
    case "DELETE":
      return items.filter((item) => item.id !== action.payload);
    case "SHUFFLE":
      return shuffle(items);
    default:
      return items;
  }
}
