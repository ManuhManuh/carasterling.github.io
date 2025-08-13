$("img, button").on("click", function(event){   
    animatedPress(event.target.id);
    switch(event.target.id){
        case "portfolio": window.location.href = "./pages/portfolio.html";
            break;

        //projects

        case "orienteering": window.location.href = "orienteering.html";
            break;

        case "octavicopter": window.location.href = "octavicopter.html";
            break;
        case "github-octavicopter": window.open("https://github.com/ManuhManuh/OctaviCopterFestival");
            break;
        
        case "new-recipe": window.location.href = "newrecipe.html";
            break;
        case "github-new-recipe": window.open("https://github.com/ManuhManuh/TheNewRecipe");
            break;

        case "tower-defense": window.location.href = "towerdefense.html";
            break;
        case "github-tower": window.open("https://github.com/ManuhManuh/TowerDefense");
            break;

        case "mud-run": window.location.href = "mudrun.html";
            break;
        case "github-mud-run": window.open("https://github.com/ManuhManuh/KartingMod");
            break;

        case "eggs": window.location.href = "eggs.html";
            break;
        case "github-eggs": window.open("https://github.com/ManuhManuh/EggsellentAdventure");
            break;

        case "ez-button": window.location.href = "ezbutton.html";
            break;
        case "github-ez-button": window.open("https://github.com/ManuhManuh/TheEZButton");
            break;

        case "desk-forest": window.location.href = "deskforest.html";
            break;
        case "github-desk-forest": window.open("https://github.com/ManuhManuh/FebCourseAR");
            break;

        case "vera": window.location.href = "vera.html";
            break;
            
        case "back": window.location.href = "../pages/portfolio.html";
            break;
        
        case "home": window.location.href = "../index.html";
            break;

        // socials

        case "linkedin": window.open("http://www.linkedin.com/in/CaraSterling");
            break;
        case "github": window.open("https://github.com/ManuhManuh");
            break;
        case "youtube": window.open("https://www.youtube.com/channel/UC7CewKnRCaIvwiQfGVuca0w");
            break;

        // badges

        case "iiba": window.open("https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/21922524");
            break;
        case "csfundamental": window.open("https://www.credly.com/badges/711ee9eb-0392-47b8-bcf2-a24158eb0bac/public_url");
            break;
        case "xrdev": window.open("https://www.youtube.com/channel/UC7CewKnRCaIvwiQfGVuca0w");
            break;
        case "unitydev": window.open("http://www.linkedin.com/in/CaraSterling");
            break;
        case "junior": window.open("https://github.com/ManuhManuh");
            break;
        case "mru": window.open("https://www.youtube.com/channel/UC7CewKnRCaIvwiQfGVuca0w");
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
