import React from "react";
import ReactDOM from "react-dom";

const R = "Anuradha";
const P = "Rahul";
const T = new Date().toLocaleDateString();
const D = new Date().toLocaleTimeString();
const Image1 = "https://picsum.photos/seed/picsum/400/300";
const Image2 = "https://picsum.photos/200/600?grayscale";
const Image3 = "https://picsum.photos/636/354";
const Image4 = "https://picsum.photos/id/537/200/300";
const Image5 = "https://picsum.photos/736/354";
const Link = " http://www.mmmut.ac.in/";
ReactDOM.render(
  <>
    <h1>Rahul {9648 + 8948}</h1>
    <p>Paswan</p>
    {Math.random()}
    <ol>
      <li>Dark</li>
      <li>Dark</li>
      {R + " " + P}
      <h1>
        Same work as above by using backtick {`my name is Rahul ${R} ${P}`}
      </h1>
      <li>rk</li>
    </ol>
    <li>{R}</li>
    <li>{P}</li>
    <li>{T}</li>
    <ol>{D}</ol>
    <h1 contentEditable="true">Rahul Paswan</h1>
    <img src="https://picsum.photos/536/354" alt="randomImages" />
    <img src={Image1} />
    <img src={Image2} />
    <img src={Image3} />
    <img src={Image4} />
    <a href={Link} target=" _blank">
      <img src={Image5} />{" "}
    </a>
  </>,
  document.getElementById("root")
);
