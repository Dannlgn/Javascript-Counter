// antenne dx e sx
const ar = document.createElement("div");
ar.setAttribute("class", "antenna-r");
document.getElementById("tvcontainer").append(ar);

const dotsr = document.createElement("div"); // dot antenna dx
dotsr.setAttribute("class", "points");
ar.appendChild(dotsr);

const al = document.createElement("div");
al.setAttribute("class", "antenna-l");
document.getElementById("tvcontainer").append(al);

const dotsl = document.createElement("div"); // dot antenna sx
dotsl.setAttribute("class", "points");
al.appendChild(dotsl);

// schermo sezione sx
const sectionsx = document.createElement("div");
sectionsx.setAttribute("class", "left-section");
document.getElementById("tvcontainer").append(sectionsx);

// div interno sezione sx
const innersectionsx = document.createElement("div");
innersectionsx.setAttribute("class", "inner-left-section");
innersectionsx.setAttribute("id", "displayCounter");
sectionsx.appendChild(innersectionsx);

// schermo sezione dx
const sectionrx = document.createElement("div");
sectionrx.setAttribute("class", "right-section");
document.getElementById("tvcontainer").append(sectionrx);

// pannello contenente i bottoni
const panel = document.createElement("div");
panel.setAttribute("class", "panel");
sectionrx.appendChild(panel);

// radials dx e sx

const radialr = document.createElement("div"); // cerchio superiore
radialr.setAttribute("class", "radial r");
panel.appendChild(radialr);

const radiall = document.createElement("div"); // cerchio inferiore
radiall.setAttribute("class", "radial l");
panel.appendChild(radiall);

// buttons

const buttonr = document.createElement("button"); // bottone +
buttonr.setAttribute("class", "minor-radial r");
buttonr.setAttribute("id", "increment");
radialr.appendChild(buttonr);

const buttonl = document.createElement("button"); // bottone -
buttonl.setAttribute("class", "minor-radial l");
buttonl.setAttribute("id", "decrement");
radiall.appendChild(buttonl);

const squarebutton = document.createElement("button"); // bottone reset
squarebutton.setAttribute("class", "square");
squarebutton.setAttribute("id", "reset");
panel.appendChild(squarebutton);

// linee
const contlinee = document.createElement("div"); // contenitore line
contlinee.setAttribute("class", "line-container");
sectionrx.appendChild(contlinee);

for (let i = 0; i < 4; i++) {
  const linee = document.createElement("div"); // line
  linee.setAttribute("class", "line");
  contlinee.appendChild(linee);
}
