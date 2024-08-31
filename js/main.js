const url = './partials/content.json';


let dc = document.getElementById("dynamic-content");
let portfolio_section = document.getElementById("portfolio_section");
let sideNav = document.getElementById("sideNav");
let footer = document.getElementById("footer");
let controls = document.getElementById("controls").children;

for (let i = 0; i < controls.length; i++) {
	controls[i].addEventListener('click', detectButton);
}


function defaultValue() {
  controls[0].click();
}


function detectButton(ev) {


    let currentButton = ev.target.textContent;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {

        let jsonKeys = Object.keys(data);
        let jsonValues = Object.values(data);
        let outputContainer = [];
        let collectOutput;


       	if (currentButton === controls[0].innerHTML) {

            portfolio_section.style.display = "none";
            portfolio_section.innerHTML = "";

            for (let i = 0; i < jsonKeys.length; i++) {

                collectOutput = `
                <div class="collectOutput">
                    <div class="collectOutput_col1">
                    ${jsonValues[i].url}
                    </div>
                    <div class="collectOutput_col2">
                    ${jsonValues[i].title}
                    ${jsonValues[i].bodyText}
                    </div>
                </div>
                `;

                outputContainer.push(collectOutput);
                // cancell loop once portfolio data reached
                if (i == 2) {
                    break;
                }
            }

            dc.innerHTML = outputContainer.join("");
       	}

       	else {
            dc.innerHTML = "";
            dc.style.display = "none";

            portfolio_section.style.display = "flex";


            for (let i = 3; i < jsonKeys.length; i++) {

                collectOutput = `
                <div class="portfolio_piece_container">
                    <figure><img class="portfolio_image" src="${jsonValues[i].url}"></figure>
                    <p class='article_p portfolioP'> ${jsonValues[i].bodyText} </p>
                </div>
                `;

                outputContainer.push(collectOutput);
            }

            portfolio_section.innerHTML = outputContainer.join("");

       	}
    })

}



function autoRefresh() {
window.location = window.location.href;
}
setInterval('autoRefresh()', 2000);











