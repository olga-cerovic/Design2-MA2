const hamburgeMenuDiv = document.querySelector(".nav-menu-mobile");
// const hamLines = document.querySelectorAll(".ham-line");
const hamIcon = document.querySelector(".hamburger-menu-icon");

const handleHamburgerMenuButton = () => {
  if (hamburgeMenuDiv.classList.contains("notShow")) {
    hamburgeMenuDiv.classList.remove("notShow");
    hamburgeMenuDiv.classList.add("show");
  } else {
    hamburgeMenuDiv.classList.remove("show");
    hamburgeMenuDiv.classList.add("notShow");
  }

  console.log("ndfdsnmndmfnmsd");
};

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    hamburgeMenuDiv.classList.add("notShow");
    hamburgeMenuDiv.classList.remove("show");
  }
});

hamburgeMenuDiv.addEventListener("click", handleHamburgerMenuButton);
