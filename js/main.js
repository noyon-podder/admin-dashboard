// alert("Hello there");

//chart js

var xValues = [];
var yValues = [];
generateData("Math.sin(x)", 0, 10, 0.5);

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        pointRadius: 2,
        borderColor: "lightblue",
        data: yValues,
      },
    ],
  },
  // options: {
  //   legend: { display: false },
  //   title: {
  //     display: true,
  //     text: "y = sin(x)",
  //     fontSize: 16,
  //   },
  // },
});
function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    yValues.push(eval(value));
    xValues.push(x);
  }
}
