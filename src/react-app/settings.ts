const settingsBtn = document.getElementById("settings-btn")!;

settingsBtn.addEventListener("click", () => {
  document.body.appendChild(createSettingsModal());
});

function createSettingsModal(): HTMLElement {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const modal = document.createElement("div");
  modal.className = "modal";

  const title = document.createElement("h2");
  title.textContent = "Settings";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";

  closeBtn.onclick = () => {
    overlay.remove();
  };

  modal.append(title, closeBtn);
  overlay.appendChild(modal);

  // close when clicking outside modal
  overlay.onclick = (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  };

  return overlay;
}