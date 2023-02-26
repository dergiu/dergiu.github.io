function toggleListner() {
    var checkbox = document.querySelector("input[name=DarkModeToggle]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            document.documentElement.style.setProperty("--white", "#1e1e1e");
            document.documentElement.style.setProperty("--black", "#e1e1e1");
            document.documentElement.style.setProperty("--HeaderNavigationalButtonBackkground", "#000000");
            document.documentElement.style.setProperty("--HeaderBoxShadow", "#8783f5");
            console.log("DarkMode disabilitata");

        } else {
            document.documentElement.style.setProperty("--white", "#b8b6b6");
            document.documentElement.style.setProperty("--black", "#1e1e1e");
            document.documentElement.style.setProperty("--HeaderNavigationalButtonBackkground", "#ffffff");
            document.documentElement.style.setProperty("--HeaderBoxShadow", "#b8b6b6");
            console.log("DarkMode abilitata");
        }
    });
}

function darkModeSistema() {
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Dark
            document.getElementById("DarkModeToggle").checked = false;
            document.documentElement.style.setProperty("--white", "#b8b6b6");
            document.documentElement.style.setProperty("--black", "#1e1e1e");
            document.documentElement.style.setProperty("--HeaderNavigationalButtonBackkground", "#ffffff");
            document.documentElement.style.setProperty("--HeaderBoxShadow", "#b8b6b6");
            console.log("DarkMode abilitata");
        } else {
            // Light
            document.getElementById("DarkModeToggle").checked = true;
            document.documentElement.style.setProperty("--white", "#1e1e1e");
            document.documentElement.style.setProperty("--black", "#e1e1e1");
            document.documentElement.style.setProperty("--HeaderNavigationalButtonBackkground", "#000000");
            document.documentElement.style.setProperty("--HeaderBoxShadow", "#8783f5");
            console.log("DarkMode disabilitata");
        }
    }
}