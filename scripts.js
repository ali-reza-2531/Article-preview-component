const shareButton = document.querySelector(".share-icon");
      const cardFooter = document.querySelector(".card-footer");
      const author = document.querySelector(".author");
      const shareOptions = document.querySelector(".share-options");
      const shareOptionsDesktop = document.querySelector(
        ".share-options-desktop"
      );

      window.addEventListener("resize", () => location.reload());
      shareButton.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          cardFooter.classList.toggle("shared");
          author.classList.toggle("hidden");
          shareOptions.classList.toggle("hidden");
        } else {
          shareOptionsDesktop.classList.toggle("hidden");
        }
      });