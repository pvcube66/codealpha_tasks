const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    const src = image.getAttribute('src');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="${src}" alt="Enlarged Image">
      </div>
    `;
    document.body.appendChild(modal);

    const closeModal = modal.querySelector('.close');
    closeModal.addEventListener('click', () => {
      modal.remove();
    });
  });
});