var text = document.querySelector(".selector").innerText,
  splitLetter = text.split(""),
  lettersArray = [],
  counter = 400;
console.log(text, splitLetter);
splitLetter.map(function (letter) {
  var markup =
    '<span style="position: relative; font-size: 60px; right:' +
    counter +
    'px "> ' +
    letter +
    " </span>";
  lettersArray.push(markup);
  counter = counter + 200;
});
var finallArray = lettersArray.join(" ");
document.querySelector(".selector").innerHTML = finallArray;

document.querySelector(".folder").addEventListener("click", function () {
  var tl = new TimelineMax();

  tl.staggerTo(
    document.querySelectorAll(".selector span"),
    0.5,
    { right: 0 },
    1
  );

  tl.addCallback(function () {
    tl.to(document.querySelector(".selector"), 0.5, { left: 100 });
  });
});
