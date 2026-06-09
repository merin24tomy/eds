export default function decorate(block) {
  const rows = block.querySelectorAll(':scope > div');

  rows.forEach((row, index) => {
    row.classList.add('timeline-item');

    if (index % 2 === 0) {
      row.classList.add('timeline-left');
    } else {
      row.classList.add('timeline-right');
    }

    const cells = row.querySelectorAll(':scope > div');

    if (cells[0]) {
      // get day text
      const dayText = cells[0].textContent.trim();
      cells[0].classList.add('timeline-day');

      // inject day badge into content card
      if (cells[1]) {
        cells[1].classList.add('timeline-content');

        // create day badge
        const badge = document.createElement('span');
        badge.classList.add('timeline-badge');
        badge.textContent = dayText;

        // insert badge at top of content
        cells[1].insertBefore(badge, cells[1].firstChild);
      }
    }
  });
}