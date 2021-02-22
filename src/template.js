export const renderItemTemplate = (color, size, item) => {
  return `<li class="items ${color} ${item}">
          <img src="imgs/${color}_${item[0]}.png" alt="${item}"/>
          <p>${color} ${item}, ${size} </p>
          </li>`;
};
