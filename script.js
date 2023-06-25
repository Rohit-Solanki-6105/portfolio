//for themes
function theme(){
    let theme_button = document.getElementById("theme_button");
    if(theme_button.innerHTML === "Cerulean Mode"){
        theme_button.innerHTML = "Light Mode";
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
    else if(theme_button.innerHTML === "Light Mode"){
        theme_button.innerHTML = "Dark Mode";
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
    else{
        theme_button.innerHTML = "Cerulean Mode";
        document.body.classList.remove("dark");
        document.body.classList.remove("light");
    }
}

// to search my projects
function search(){
    let input_text = document.getElementById("searchbar").value.toLowerCase();
    let project_arr = document.querySelectorAll(".pro");

    for(let i = 0; i < project_arr.length; i++){
        if(!project_arr[i].innerHTML.toLowerCase().includes(input_text)){
            project_arr[i].parentElement.style.display = "none";
        }
        else{
            project_arr[i].parentElement.style.display = "block";
        }
    }
}

//for menubar/navbar, making responsive
let menu_icon = document.getElementById("menu_icon");
let navlist = document.getElementById("navlist"); 
menu_icon.onclick = () => {
    navlist.classList.toggle("linkclose");
    navlist.classList.toggle("linkopen");
    if(navlist.className == "linkopen"){
        menu_icon.innerHTML = "\u00d7";
    }
    else{
        menu_icon.innerHTML = "☰";
    }
}

function search_achievements(){
    let input_achievement = document.getElementById("searchbar_acheivements").value.toLowerCase();
    let acheivement_arr = document.querySelectorAll(".acheivement");

    for(let i = 0; i < acheivement_arr.length; i++){
        if(!acheivement_arr[i].innerHTML.toLowerCase().includes(input_achievement)){
            acheivement_arr[i].style.display = "none";
        }
        else{
            acheivement_arr[i].style.display = "inline-block";
        }
    }
}
