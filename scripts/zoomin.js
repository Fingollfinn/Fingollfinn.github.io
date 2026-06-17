document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption"); // 1. Grab the new caption element
  const closeBtn = document.getElementById("close-modal");
  const galleryImages = document.querySelectorAll(".gallery-image");

  // Open modal on image click
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      modalImage.src = img.src; 
      modalImage.alt = img.alt; 
      modalCaption.textContent = img.alt; // 2. Insert the image's alt text as the caption
      modal.showModal();        
    });
  });

  // Close modal on button click
  closeBtn.addEventListener("click", () => {
    modal.close();
  });

  // Close modal when clicking outside the image (on the backdrop)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });
});