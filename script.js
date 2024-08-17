
function toggleTheme(){
    document.body.classList.toggle("dark-theme");

    const lightModeIcon = document.getElementById("light-mode-icon");
    const isDarkTheme = document.body.classList.contains("dark-theme");

    if(isDarkTheme){
        lightModeIcon.setAttribute("src", "./images/sun.png");
        // document.getElementById("theme-icon").classList.add("icon_in_dark_mode");
    }else{
        lightModeIcon.setAttribute("src", "./images/moon-icon-0.png");  
        // document.getElementById("theme-icon").classList.remove("icon_in_dark_mode");
    }
}
