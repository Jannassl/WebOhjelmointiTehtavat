'use strict'

export const restaurantRow = restaurant => {
    const { name, address } = restaurant;
    const row = document.createElement("tr");
  
    row.innerHTML = `
      <td>${name ? name : 'N/A'}</td>
      <td>${address ? address : 'N/A'}</td>
    `;
  
    return row;
  };


  export const restaurantModal = (restaurant, menu) => {
    const {name, address, postalCode} = restaurant;
    const {courses} = menu;
    let menuHtml = '';
    courses.forEach(item => {
      menuHtml += `<p>${item.name}: Hinta: ${item.price}</p>`;
    });
    const htmlContent = `
      <h2>${name}</h2>
      <p>${address}</p>
      <p>${postalCode}</p>
      ${menuHtml}
    `;
  
    return htmlContent;
  };
