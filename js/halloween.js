function Halloween(){
    //Background
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "black";
    document.getElementsByTagName("BODY")[0].style.transition = "background 1s ease";
    
    document.getElementById('normalHeading').style.display = "none";
    document.getElementById('festive1').style.display = "block";
    document.getElementById('halloweenHeading').style.display = "block";
    document.getElementById('halloweenHeading').style.fontFamily = "Creepster";
    document.getElementById('halloweenHeading').style.color = "#F75F1C";

    //Links
    var links = document.getElementsByClassName("nav-link");
    for(var i = 0; i < links.length; i++){
        links[i].style.fontFamily = "Creepster";
        links[0].id = "nav-links2";
        links[1].id = "nav-links3";
        links[2].id = "nav-links2";
        links[3].id = "nav-links3";
        links[4].id = "nav-links2";
    }
    //Project Info
    var cards = document.getElementsByClassName("card");
    var titles = document.getElementsByClassName("card-title");
    var content = document.getElementsByClassName("card-text");
    var arrows = document.getElementsByClassName("arrows");
    var svgs = document.getElementsByClassName("svg");
    var spans = document.getElementsByTagName("SPAN");

    for(var i = 0; i < cards.length; i++){
        cards[i].id = "card2";
    }
    for(var i = 0; i < titles.length; i++){
        titles[i].style.fontFamily = "Creepster";
        titles[i].style.color = "#881EE4";
    }
    for(var i = 0; i < content.length; i++){
        content[i].style.fontFamily = "Creepster";
        content[i].style.color = "#F75F1C";
    }
    for(var i = 0; i < titles.length; i++){
        titles[i].style.fontFamily = "Creepster";
        titles[i].style.color = "#881EE4";
    }
    for(var i = 0; i < spans.length; i++){
        spans[i].style.fontFamily = "Creepster";
        spans[i].style.color = "#881EE4";
        spans[i].style.borderBottom = "none";
    }
    for(var i = 0; i < svgs.length; i++){
        svgs[i].id = "svg2";
    }
    for(var i = 0; i < arrows.length; i++){
        arrows[i].style.fontFamily = "Creepster";
        arrows[i].style.color = "#85E21F";
    }
    //Buttons
    var btns = document.getElementsByClassName("btn");
    for(var i = 0; i < btns.length; i++){
        btns[i].id = "btn2";
    }
    //Paragraphs
    var paragraphs = document.getElementsByTagName("P");
    for(var i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.fontFamily = "Creepster";
        paragraphs[i].style.color = "#F75F1C";
    }
    //icons
    var icons = document.getElementsByClassName("icon");
    icons[0].id = "icon2";
    icons[1].id = "icon3";
    icons[2].id = "icon2";
    icons[3].id = "icon3";
    icons[4].id = "icon2";
    icons[5].id = "icon3";

    //Images
    var logo =  document.getElementById('logo');
    document.getElementById('me').style.boxShadow = "2px 3px 15px #85E21F";
    logo.style.borderRight = "2px solid #881EE4";
    logo.style.borderLeft = "2px solid #F75F1C";
    logo.style.borderTop = "2px solid #F75F1C";
    logo.style.borderBottom = "2px solid #881EE4";

    //H tags
    document.getElementsByTagName("H2")[0].style.fontFamily = "Creepster";
    document.getElementsByTagName("H2")[0].style.color = "#F75F1C";
    document.getElementsByTagName("H2")[2].style.fontFamily = "Creepster";
    document.getElementsByTagName("H2")[2].style.color = "#881EE4";

    document.getElementsByTagName("H3")[0].style.fontFamily = "Creepster";
    document.getElementsByTagName("H3")[0].style.color = "#881EE4";
    document.getElementsByTagName("H3")[0].id = "h3Halloween";
    document.getElementsByTagName("H3")[1].style.fontFamily = "Creepster";
    document.getElementsByTagName("H3")[1].style.color = "#881EE4";
    document.getElementsByTagName("H3")[1].id = "h3Halloween";
    document.getElementsByTagName("H3")[2].style.fontFamily = "Creepster";
    document.getElementsByTagName("H3")[2].style.color = "#881EE4";
    document.getElementsByTagName("H3")[2].id = "h3Halloween";

    document.getElementsByTagName("H6")[0].style.fontFamily = "Creepster";
    document.getElementsByTagName("H6")[0].style.color = "#881EE4";
    document.getElementsByTagName("H6")[0].id = "h6Halloween";
}