$("img, button").on("click", function(event){   
    animatedPress(event.target.id);
    switch(event.target.id){
        case "portfolio": window.location.href = "./pages/portfolio.html";
            break;
        case "orienteering": window.location.href = "orienteering.html";
            break;
        case "octavicopter": window.location.href = "octavicopter.html";
            break;
        case "new-recipe": window.location.href = "newrecipe.html";
            break;
        case "tower-defense": window.location.href = "towerdefense.html";
            break;
        case "mud-run": window.location.href = "mudrun.html";
            break;
        case "eggs": window.location.href = "eggs.html";
            break;
        case "ez-button": window.location.href = "ezbutton.html";
            break;
        case "desk-forest": window.location.href = "deskforest.html";
            break;
        case "vera": window.location.href = "vera.html";
            break;
        case "back": window.location.href = "../pages/portfolio.html";
            break;
        case "home": window.location.href = "../index.html";
            break;
    }
});

function animatedPress(name){
    var clickedImage = $("#"+ name);
    clickedImage.addClass("pressed");
    setTimeout(function() {
        clickedImage.removeClass("pressed");
      }, 100);

}
