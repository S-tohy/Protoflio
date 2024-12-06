function showModal(title, url) {
    // Get the modal and elements
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalLink = document.getElementById("modal-link");

    // Set the title and URL for the modal
    modalTitle.textContent = title;
    modalLink.onclick = () => window.open(url, "_blank");

    // Show the modal
    modal.classList.add("active");
}

function hideModal() {
    // Hide the modal
    const modal = document.getElementById("modal");
    modal.classList.remove("active");
}