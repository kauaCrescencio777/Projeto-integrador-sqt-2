const svg_job = document.getElementById("svg_job");

const svg_house = document.getElementById("svg_house");

let option_selec = ""

const favorite_option_house = document.getElementById("favorite-option-house");

const favorite_option_job = document.getElementById("favorite-option-job");

const text_div_favorite_house = document.getElementById("text_div_favorite_house")

const text_div_favorite_job = document.getElementById("text_div_favorite_job")

favorite_option_house.addEventListener("click", () => {
    change_icon_house()
  });

  favorite_option_job.addEventListener("click", () => {
    change_icon_job()
  });


function change_icon_house(){
    svg_house.querySelectorAll("path").forEach(path => {
        path.setAttribute("stroke", "white");
      });
  
      favorite_option_house.style.backgroundColor = "#FF7622"
      text_div_favorite_house.style.color = "white"
      favorite_option_house.style.transition = "0.4s"

      

      svg_job.querySelectorAll("path").forEach(path => {
        path.setAttribute("stroke", "#FF7622");
      });

      favorite_option_job.style.backgroundColor = "#F0F5FA"
      text_div_favorite_job.style.color = "#FF7622"
      favorite_option_job.style.transition = "0.4s"

      option_selec = "option_house"
}

function change_icon_job(){
    svg_job.querySelectorAll("path").forEach(path => {
        path.setAttribute("stroke", "white");
      });
  
      favorite_option_job.style.backgroundColor = "#FF7622"
      text_div_favorite_job.style.color = "white"
      favorite_option_job.style.transition = "0.4s"

      

      svg_house.querySelectorAll("path").forEach(path => {
        path.setAttribute("stroke", "#FF7622");
      });

      favorite_option_house.style.backgroundColor = "#F0F5FA"
      text_div_favorite_house.style.color = "#FF7622"
      favorite_option_house.style.transition = "0.4s"

      option_selec = "option_job"
}