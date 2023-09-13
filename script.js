function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function updateRectangles() {
    const svg = document.getElementById("uptime-svg");

    const existingRectangles = svg.querySelectorAll(".green");
    existingRectangles.forEach((rect) => {
      svg.removeChild(rect);
    });

    for (let i = 2; i <= 90; i++) {
      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rect.setAttribute("class", "green");
      rect.setAttribute("x", i * 10);
      rect.setAttribute("width", "8");
      rect.setAttribute("fill", "green");
      rect.setAttribute("height", "40px");
      rect.setAttribute("id", `${i}-1694160939688-tooltip`);
      svg.appendChild(rect);
    }
  }

  const svg = document.getElementById("uptime-svg");
  svg.addEventListener("mouseover", function (event) {
    const target = event.target;
    if (target.classList.contains("green")) {
      const rectId = target.getAttribute("id");
      const date = getFormattedDate();
      const history = document.getElementById("uptime-data");
      history.textContent = `${date} `;
    }
  });

  updateRectangles();



  const svg_2 = document.querySelector("svg");

  for (let i = 2; i <= 90; i++) {
    const rect = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    rect.setAttribute("class", "green");
    rect.setAttribute("x", i * 10);
    rect.setAttribute("width", "8");
    rect.setAttribute("height", "40px");
    rect.setAttribute("id", `${i}-1694160939688-tooltip`);
    svg.appendChild(rect);
  }