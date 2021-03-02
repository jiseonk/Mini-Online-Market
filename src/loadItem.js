export const loadItems = () => {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
};
