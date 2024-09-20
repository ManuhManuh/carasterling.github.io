$("button").on("click", function(event){    
    console.log(event.target.id);
    switch(event.target.id){
        case "portfolio": window.location.href = "./pages/portfolio.html";
            break;
        case "new-recipe": window.location.href = "newrecipe.html";
            break;
        case "octavicopter": window.location.href = "octavicopter.html";
            break;
        case "back": window.location.href = "../pages/portfolio.html";
            break;
        case "home": window.location.href = "../index.html";
            break;
    }
    //`window.location.href = "./pages/newrec.html";
});