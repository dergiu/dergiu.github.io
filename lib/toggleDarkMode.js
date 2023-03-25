function LightMode(){
    localStorage['DarkMode'] = 'false';
    document.getElementById('DarkModeToggle').checked = true;
    document.documentElement.style.setProperty("--white", "#1e1e1e");
    document.documentElement.style.setProperty("--black", "#e1e1e1");
    document.documentElement.style.setProperty("--HeaderNavigationalButtonBackkground", "#000000");
    document.documentElement.style.setProperty("--HeaderBoxShadow", "#8783f5");
    console.log("DarkMode disattivata");
}

function DarkMode(){
    localStorage['DarkMode'] = 'true';
    document.getElementById('DarkModeToggle').checked = false;
    document.documentElement.style.setProperty("--white", "#b8b6b6");
    document.documentElement.style.setProperty("--black", "#1e1e1e");
    document.documentElement.style.setProperty("--HeaderNavigationalButtonBackkground", "#ffffff");
    document.documentElement.style.setProperty("--HeaderBoxShadow", "#b8b6b6");
    console.log("DarkMode abilitata");
}

function ToggleListner() {
    var checkbox = document.querySelector("input[name=DarkModeToggle]");
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            LightMode()
        } 
        else {
            DarkMode();
        }
    });
}

function DarkModeSistema() {
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            DarkMode();
        } else {
            LightMode();
        }
    }
}

function PrimoAccesso(){
    if(!localStorage.getItem("DarkMode")){
        DarkModeSistema();
    }
    else{
        if(localStorage.getItem("DarkMode") == "true"){
            DarkMode();
        }
        else{
            LightMode();
        }
    }
}