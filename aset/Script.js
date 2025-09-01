 document.getElementById("darkModeToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", this.checked);
  });


function filterAcara() {
  const tanggalInput = document.getElementById("filterTanggal").value;
  const tagarInput = document.getElementById("filterTagar").value.toLowerCase();
  const acaraCards = document.querySelectorAll(".acara-card");

  acaraCards.forEach(card => {
    const tanggal = card.getAttribute("data-tanggal");
    const tagar = card.getAttribute("data-tagar").toLowerCase();

    const cocokTanggal = !tanggalInput || tanggal === tanggalInput;
    const cocokTagar = !tagarInput || tagar.includes(tagarInput);

    if (cocokTanggal && cocokTagar) {
      card.style.display = "block";
    }
     else {
      card.style.display = "none";
    }
  });
}


function filterGaleri() {
  const tagarInput = document.getElementById("filterTagar").value.toLowerCase();
  const items = document.querySelectorAll(".galeri-item");

  items.forEach(item => {
    const tagar = item.getAttribute("data-tagar").toLowerCase();
    if (!tagarInput || tagar.includes(tagarInput)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

document.querySelectorAll(".galeri-item img").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("modalImage").src = img.src;
    document.getElementById("modalPreview").style.display = "flex";
  });
});

function closeModal() {
  document.getElementById("modalPreview").style.display = "none";
}
