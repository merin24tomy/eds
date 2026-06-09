export default function decorate(block) {
  // Step 1: find all direct child divs → these are our ROWS
  const rows = block.querySelectorAll(':scope > div');

  rows.forEach((row) => {
    // Step 2: add 'cards-row' class to each row
    row.classList.add('cards-row');

    // Step 3: find all cells inside this row
    const cells = row.querySelectorAll(':scope > div');

    cells.forEach((cell) => {
      // Step 4: add 'card' class to each cell
      cell.classList.add('card');

      // Step 5: find the image inside this card
      const pic = cell.querySelector('picture');
      if (pic) {
        // update sizes for card layout
        const img = pic.querySelector('img');
        if (img) img.setAttribute('sizes', '(min-width: 900px) 33vw, 100vw');

        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('card-image');
        pic.parentElement.insertBefore(imageWrapper, pic);
        imageWrapper.appendChild(pic);
      }

      // Step 6: wrap remaining content in a div
      const contentWrapper = document.createElement('div');
      contentWrapper.classList.add('card-content');

      [...cell.children].forEach((child) => {
        if (!child.classList.contains('card-image')) {
          contentWrapper.appendChild(child);
        }
      });

      cell.appendChild(contentWrapper);
    });
  });
}