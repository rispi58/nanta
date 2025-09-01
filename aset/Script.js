document.getElementById("toggleBtn").addEventListener("click", function () {
  const hiddenCards = document.querySelectorAll(".pengurus-card.hidden");
  hiddenCards.forEach(card => card.classList.toggle("hidden"));

  // Ganti teks tombol
  if (this.textContent === "Lihat Semua") {
    this.textContent = "Sembunyikan";
  } else {
    this.textContent = "Lihat Semua";
  }
});