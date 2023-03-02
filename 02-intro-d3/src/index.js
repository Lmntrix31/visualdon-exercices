import { select, selection } from "d3-selection";

const monsvg = select("body")
  .append("svg")
  .attr("width", 3000)
  .attr("height", 3000)
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", 40)
  .attr("fill", "red");
select("svg")
  .append("circle")
  .attr("cx", 150)
  .attr("cy", 150)
  .attr("r", 40)
  .attr("fill", "yellow");
select("svg")
  .append("circle")
  .attr("cx", 250)
  .attr("cy", 250)
  .attr("r", 40)
  .attr("fill", "green");

select("svg")
  .selectAll("circle")
  .filter(function (d, i) {
    return i == 1;
  })
  .attr("fill", "blue")
  .attr("cx", 200);

select("svg")
  .selectAll("circle")
  .filter(function (d, i) {
    return i == 0;
  })
  .attr("cx", 100);

select("svg")
  .selectAll("circle")
  .append("text")
  .text("coucou")
  .attr("x", 0)
  .attr("y", 0)
  .attr("fill", "black");

console.log(monsvg);

// rajouter du texte en dessous de chaque cercle
