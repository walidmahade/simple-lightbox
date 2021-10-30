document.addEventListener("DOMContentLoaded", () => {
  // ===> DOM elements <=== //
  let $lightbox = document.getElementById('lightbox');

  if ($lightbox === null) {
    // create lightbox html element
    const $lightbox_el = document.createElement('div')
    $lightbox_el.classList.add('lightbox')
    $lightbox_el.setAttribute('id', 'lightbox')
    document.body.append($lightbox_el)
    // re-fetch lightbox
    $lightbox = document.getElementById('lightbox');

    // Hide Lightbox event
    $lightbox.addEventListener('click', (e) => {
      if (!e.target.hasAttribute('src')) {
        $lightbox.classList.remove('show');
        $lightbox.innerHTML = '';
      }
    });

    // create lightbox styles
    const style = document.createElement('style');
    style.innerHTML = `
    /* Lightbox */
    .lightbox {
      opacity: 0;
      visibility: hidden;
      position: fixed;
      left:0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: -1;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease-in;
    }
    .lightbox.show {
      background-color: rgba(0,0,0, 0.85);
      opacity: 1;
      visibility: visible;
      z-index: 99999;
    }
    .lightbox img {
      max-width: 90%;
      transform: scale(1);
      transition: transform .3s ease-in-out;
    }
    .lightbox.zoom img {
      transform: scale(1.6);
    }
    /* Close lightbox "x" icon */
    .lightbox .close-lightbox{
      cursor: pointer;
      position: absolute;
      top: 30px;
      right: 50px;
      width: 20px;
      height: 20px;
    }
    .lightbox .close-lightbox::after,
    .lightbox .close-lightbox::before{
      content: '';
      width: 3px;
      height: 20px;
      background-color: #ddd;
      position: absolute;
      border-radius: 5px;
      transform: rotate(45deg);
    }
    .lightbox .close-lightbox::before{
      transform: rotate(-45deg);
    }
    .lightbox .close-lightbox:hover::after,
    .lightbox .close-lightbox:hover::before{
      background-color: #fff;
    }
    /* lightbox zoom icon */
    .zoom-lightbox {
      cursor: pointer;
      position: absolute;
      top: 28px;
      right: 100px;
      width: 20px;
      height: 20px;
    }
    .zoom-lightbox svg { pointer-events: none; }
    .zoom-lightbox svg * { fill: #fff; }
    `;
    document.body.appendChild(style);
  }

  // ===> Event listeners and triggers <=== //

  // Show lightbox
  document.addEventListener('click', e => {
    if (e.target.tagName === "IMG" && e.target.hasAttribute('data-lightbox')) {
      const image = e.target;
      if (image) {
        $lightbox.innerHTML += '<div class="close-lightbox"></div>' + image.outerHTML;
        document.querySelector("#lightbox img").removeAttribute('data-lightbox')
        $lightbox.classList.add('show');
      }
    }
  });
});
