export default function decorate(block) {
    // get first row — contains hero content
    const row = block.querySelector(':scope > div');
    if (!row) return;

    // get all cells
    const cells = row.querySelectorAll(':scope > div');

    // if two cells → image + content layout
    if (cells.length === 2) {
        cells[0].classList.add('hero-image');
        cells[1].classList.add('hero-content');

        // make first image eager load (LCP optimization)
        const img = cells[0].querySelector('img');
        if (img) {
            img.setAttribute('loading', 'eager');
            img.setAttribute('fetchpriority', 'high');
        }
    } else {
        // single cell → centered text layout
        cells[0].classList.add('hero-content', 'hero-centered');
    }

    // find CTA button and add accent class
    const ctaLinks = block.querySelectorAll('a');
    ctaLinks.forEach((link, i) => {
        if (i === 0) link.classList.add('button', 'accent');
        else link.classList.add('button', 'secondary');
    });
}