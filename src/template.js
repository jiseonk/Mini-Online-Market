export const itemTemplate = (color, item) => {
  return `<li class="items ${color} ${item}">
          <img src="imgs/${color}_${item[0]}.png" alt="${item}"/>
          <p>${color} ${item}</p>
          </li>`;
};
