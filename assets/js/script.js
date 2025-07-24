// Global open lightbox function
window.openLightbox = function (imageSrc, imageAlt) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCounter = document.getElementById("lightbox-counter");

  if (!lightbox || !lightboxImg) {
    return;
  }

  // Set the image
  lightboxImg.src = imageSrc;
  lightboxImg.alt = imageAlt;

  // Set counter (for single image)
  if (lightboxCounter) {
    lightboxCounter.textContent = "1 / 1";
  }

  // Show the lightbox
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
};

// Global close function
window.closeLightbox = function () {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// Global navigation functions (placeholder for now)
window.showPrevImage = function () {
  // Placeholder
};

window.showNextImage = function () {
  // Placeholder
};

// Keyboard navigation
document.addEventListener("keydown", function (e) {
  const lightbox = document.getElementById("lightbox");
  if (lightbox && lightbox.classList.contains("active")) {
    if (e.key === "Escape") {
      closeLightbox();
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Simple test function
  window.simpleTest = function () {
    alert("Script is working!");
  };

  const button = document.querySelector(".cp-email");
  const textToCopy = "hectorjosepuentesruiz@gmail.com"; // Cambia esto al texto que deseas copiar

  cv_button = document.querySelector(".open-cv");

  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add("hidden");
      }
    });

    // Close mobile menu when window is resized to desktop size
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        mobileMenu.classList.add("hidden");
      }
    });
  }

  // Carousel functionality
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicators = document.querySelectorAll(".indicator");

  let currentSlide = 0;
  const totalSlides = 3;

  function updateCarousel() {
    const translateX = -currentSlide * 100;
    if (carousel) {
      carousel.style.transform = `translateX(${translateX}%)`;
    }

    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.remove("bg-gray-600");
        indicator.classList.add("bg-purple-700");
      } else {
        indicator.classList.remove("bg-purple-700");
        indicator.classList.add("bg-gray-600");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Event listeners for carousel
  if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide);
  }

  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlide = index;
      updateCarousel();
    });
  });

  // Auto-slide (optional)
  if (carousel) {
    setInterval(nextSlide, 10000); // Change slide every 5 seconds
  }

  cv_button.addEventListener("click", () => {
    // Detectar la ruta correcta según la ubicación de la página
    const currentPath = window.location.pathname;
    let pdfUrl;

    if (currentPath.includes("/pages/")) {
      // Estamos en una subpágina (projects o events)
      pdfUrl = "../../assets/docs/Curriculum_Hector_Puentes.pdf";
    } else {
      // Estamos en la página principal
      pdfUrl = "assets/docs/Curriculum_Hector_Puentes.pdf";
    }

    window.open(pdfUrl, "_blank");
  });

  button.addEventListener("click", () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        const overlay = document.createElement("div");
        overlay.textContent = "Email Copied";
        overlay.style.position = "fixed";
        overlay.style.left = "50%";
        overlay.style.transform = "translateX(-50%)";
        overlay.style.bottom = "20px";
        overlay.style.padding = "10px 20px";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Medio transparente
        overlay.style.color = "white";
        overlay.style.borderRadius = "5px";
        overlay.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
        overlay.style.fontSize = "1rem";
        overlay.style.zIndex = "1000";
        document.body.appendChild(overlay);

        setTimeout(() => {
          document.body.removeChild(overlay);
        }, 2000);
      })
      .catch((err) => {
        // Error handling
      });
  });

  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");

  let currentImageIndex = 0;
  let galleryImages = [];

  function openLightbox(imageSrc, imageAlt, images, index) {
    if (!lightbox) {
      return;
    }

    galleryImages = images;
    currentImageIndex = index;

    const lightboxImage = lightbox.querySelector("#lightbox-img");

    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt;

    updateCounter();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  }

  function updateCounter() {
    if (!lightbox) return;
    const counter = lightbox.querySelector("#lightbox-counter");
    counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
  }

  function showPrevImage() {
    if (!lightbox) return;
    currentImageIndex =
      (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    const lightboxImage = lightbox.querySelector("#lightbox-img");
    lightboxImage.src = galleryImages[currentImageIndex].src;
    lightboxImage.alt = galleryImages[currentImageIndex].alt;
    updateCounter();
  }

  function showNextImage() {
    if (!lightbox) return;
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    const lightboxImage = lightbox.querySelector("#lightbox-img");
    lightboxImage.src = galleryImages[currentImageIndex].src;
    lightboxImage.alt = galleryImages[currentImageIndex].alt;
    updateCounter();
  }

  // Make functions globally available
  window.closeLightbox = closeLightbox;
  window.showPrevImage = showPrevImage;
  window.showNextImage = showNextImage;

  // Test function
  window.testLightbox = function () {
    if (!lightbox) {
      alert("Lightbox not found!");
      return;
    }

    const testImages = [
      { src: "../../assets/images/Logo.png", alt: "Test Image 1" },
      { src: "../../assets/images/Logo.png", alt: "Test Image 2" },
    ];
    openLightbox("../../assets/images/Logo.png", "Test Image", testImages, 0);
  };

  // Event listeners for lightbox
  if (lightbox) {
    const closeBtn = lightbox.querySelector(".lightbox-close");

    if (closeBtn) {
      closeBtn.addEventListener("click", closeLightbox);
    }

    // Close lightbox when clicking on the backdrop
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("active")) {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        showPrevImage();
      } else if (e.key === "ArrowRight") {
        showNextImage();
      }
    }
  });

  // Initialize gallery images
  function initializeGallery() {
    const galleryContainer = document.querySelector(".grid.md\\:grid-cols-3");

    if (galleryContainer) {
      const images = galleryContainer.querySelectorAll("img");

      const imageArray = Array.from(images).map((img) => ({
        src: img.src,
        alt: img.alt,
      }));

      images.forEach((img, index) => {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
          openLightbox(img.src, img.alt, imageArray, index);
        });
      });
    }
  }

  // Initialize gallery when DOM is loaded
  initializeGallery();
});
