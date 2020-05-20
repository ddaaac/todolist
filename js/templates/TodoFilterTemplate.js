export const todoFilterTemplate = (filter, isSelected) => {
  return (`
  <li>
    <a class="${filter.name} ${isSelected ? "selected" : ""}" href="#/${filter.name}">${filter.content}</a>
  </li>
  `);
};