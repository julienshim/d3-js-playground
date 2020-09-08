import { select, arc } from "d3";

const svg = select("svg");
const height = +svg.attr("height");
const width = +svg.attr("width");
const g = svg
  .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);
const circle = g
  .append("circle")
    .attr("r", height / 2)
    .attr("fill", "yellow")
    .attr("stroke", "black");

const eyeSpacing = 100;
const eyeYOffset = -70;
const eyeRadius = 40;
const eyebrowWidth = 70;
const eyebrowHeight = 15;
const eyesbrowsYOffset = -40;

const eyesG = g
  .append("g")
    .attr("transform", `translate(0, ${eyeYOffset})`);
const leftEye = eyesG
  .append("circle")
    .attr("r", eyeRadius)
    .attr("cx", -eyeSpacing)
    .attr("fill", "black");
const rightEye = eyesG
  .append("circle")
    .attr("r", eyeRadius)
    .attr("cx", eyeSpacing)
    .attr("fill", "black");

const eyebrowsG = eyesG
  .append('g')
    .attr('transform', `translate(0, ${eyesbrowsYOffset})`);

eyebrowsG
  .transition().duration(2000)
    .attr('transform', `translate(0, ${eyesbrowsYOffset - 50})`)
  .transition().duration(2000)
    .attr('transform', `translate(0, ${eyesbrowsYOffset})`);
    
const leftEyebrow = eyebrowsG
  .append("rect")
    .attr("x", -eyeSpacing - eyebrowWidth / 2)
    .attr("y", eyesbrowsYOffset)
    .attr("width", eyebrowWidth)
    .attr("height", eyebrowHeight)

const rightEyebrow = eyebrowsG
  .append("rect")
    .attr("x", eyeSpacing - eyebrowWidth / 2)
    .attr("y", eyesbrowsYOffset)
    .attr("width", eyebrowWidth)
    .attr("height", eyebrowHeight)

const mouth = g.append("path").attr(
  "d",
  arc()({
    innerRadius: 150,
    outerRadius: 170,
    startAngle: Math.PI / 2,
    endAngle: (Math.PI * 3) / 2,
  })
);
