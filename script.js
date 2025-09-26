// Greeting dengan nama otomatis
const welcomeText = document.getElementById("welcomeText");
const userName = prompt("Masukkan nama Anda:");
if (userName) {
  welcomeText.textContent = `Hi ${userName}, Welcome To Website`;
}

// Form handling
const form = document.getElementById("messageForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const pesan = document.getElementById("pesan").value;

  // Validasi sederhana
  if (!nama || !tanggal || !gender || !pesan) {
    alert("Semua field harus diisi!");
    return;
  }

  // Tampilkan waktu sekarang
  const now = new Date();
  document.getElementById("currentTime").textContent =
    "Current time: " + now;

  // Tampilkan hasil ke output
  document.getElementById("outNama").textContent = nama;
  document.getElementById("outTanggal").textContent = tanggal;
  document.getElementById("outGender").textContent = gender;
  document.getElementById("outPesan").textContent = pesan;
});