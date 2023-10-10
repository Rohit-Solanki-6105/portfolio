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
