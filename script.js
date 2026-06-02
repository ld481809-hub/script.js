// Portfolio Website Script

document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded successfully!");

    const currentYear = new Date().getFullYear();

    const footerYear = document.getElementById("year");

    if (footerYear) {
        footerYear.textContent = currentYear;
    }
});