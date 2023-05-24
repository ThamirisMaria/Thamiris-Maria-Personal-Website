const developerTypeSpan = document.getElementById("developer-type-span");
const developerTypes = ["Web ", ".NET "];
const currentDeveloperType = [];

let i = 0,
  j = 0;
let isTyped = false;
function developerTypesLoop() {
  developerTypeSpan.innerHTML = currentDeveloperType.join("");

  if (i < developerTypes.length) {
    if (!isTyped && j <= developerTypes[i].length) {
      currentDeveloperType.push(developerTypes[i][j]);
      j++;
    }

    if (isTyped && j <= developerTypes[i].length) {
      currentDeveloperType.pop(developerTypes[i][j]);
      j--;
    }

    if (j == developerTypes[i].length) {
      isTyped = true;
    }

    if (isTyped && j === 0) {
      i++;
      isTyped = false;
    }
  } else {
    i = 0;
  }
  setTimeout(developerTypesLoop, 600);
}

// function deleteDeveloperType(isTyped) {
//   while (isTyped) {
//     currentDeveloperType.pop(developerTypes[i][j]);
//     developerTypeSpan.innerHTML = currentDeveloperType.join("");
//     j--;

//     if (j < 0) {
//       return false;
//     }
//   }
// }

developerTypesLoop();

// function deleteDeveloperType() {
//   return (currentDeveloperType = []);
// }

/*Script for hero section's scroll animations*/
const cloud1 = document.getElementById("cloud-1");
const cloud2 = document.getElementById("cloud-2");
const cloud3 = document.getElementById("cloud-3");
const cloud4 = document.getElementById("cloud-4");

const greeting1 = document.getElementById("greeting-1");
const greeting2 = document.getElementById("greeting-2");

const scrollSnapContainer = document.querySelector(".container");

scrollSnapContainer.addEventListener("scroll", function (e) {
  let value = e.target.scrollTop;

  cloud1.style.top = 25 + value * -1.5 + "px";
  cloud2.style.top = 240 + value * -1.3 + "px";
  cloud3.style.top = 20 + value * -1.4 + "px";
  cloud4.style.top = 230 + value * -1.2 + "px";

  cloud1.style.right = 420 + value * -1.5 + "px";
  cloud2.style.left = 400 + value * -1.3 + "px";
  cloud3.style.left = 320 + value * -1.4 + "px";
  cloud4.style.right = 280 + value * -1.2 + "px";

  greeting1.style.opacity = 1 + value / -100;
  greeting2.style.opacity = 1 + value / -120;
});
