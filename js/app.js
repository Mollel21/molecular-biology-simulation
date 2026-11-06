
/* ========================================
   MOLEBIO LAB NAVIGATION
======================================== */

function startSimulation() {
    window.location.href = "pages/student-dashboard.html";
}


/* ========================================
   PWA INSTALLATION
======================================== */

let deferredInstallPrompt = null;

const installButton = document.getElementById("installAppBtn");
const installMessage = document.getElementById("installMessage");


// Check if application is already installed
function isAppInstalled() {
    return (
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true
    );
}


// Hide button if already installed
if (installButton && isAppInstalled()) {
    installButton.hidden = true;
}


// Detect installation availability
window.addEventListener("beforeinstallprompt", (event) => {

    event.preventDefault();

    deferredInstallPrompt = event;

    if (installButton) {
        installButton.hidden = false;
    }

    console.log("MoleBio Lab installation is available.");

});


// Handle installation button
if (installButton) {

    installButton.addEventListener("click", async () => {

        if (isAppInstalled()) {
            installMessage.textContent =
                "MoleBio Lab is already installed.";
            installButton.hidden = true;
            return;
        }

        if (!deferredInstallPrompt) {

            installMessage.textContent =
                "Installation is not currently available. Try Chrome on Android using the browser menu.";

            return;
        }

        deferredInstallPrompt.prompt();

        const result = await deferredInstallPrompt.userChoice;

        if (result.outcome === "accepted") {

            installMessage.textContent =
                "MoleBio Lab installation accepted!";

        } else {

            installMessage.textContent =
                "Installation cancelled. You can try again later.";

        }

        deferredInstallPrompt = null;
        installButton.hidden = true;

    });

}


// Detect successful installation
window.addEventListener("appinstalled", () => {

    console.log("MoleBio Lab installed successfully.");

    if (installButton) {
        installButton.hidden = true;
    }

    if (installMessage) {
        installMessage.textContent =
            "MoleBio Lab installed successfully!";
    }

});
