document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generateBtn");

  button.addEventListener("click", () => {
    const mins = parseInt(document.getElementById("minutes").value);
    if (isNaN(mins) || mins < 0) {
      alert("Please enter a valid number of minutes.");
      return;
    }

    const futureEpoch = Math.floor(Date.now() / 1000 + mins * 60);
    document.getElementById("result").innerText = `Epoch: ${futureEpoch}`;
    navigator.clipboard.writeText(futureEpoch.toString());

    // Show "Copied" message
    document.getElementById("copied").style.display = "block";
    setTimeout(() => {
      document.getElementById("copied").style.display = "none";
    }, 2000);
  });
});
