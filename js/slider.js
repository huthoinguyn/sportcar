const slider = document.querySelector("#slider");
const sliderTitle = document.querySelector("#slider .slider-wrap h2");
const sliderWrap = document.querySelector("#slider .slider-wrap");
const sliderItems = [
  {
    img: "./img/home-slider-01.webp",
    title: "The Wind is <br/> Not Even close to us",
    desc: "We are dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "./img/home-slider-02.webp",
    title: "We're Your One-Stop Destination for That!",
    desc: "We are dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "./img/home-slider-03.webp",
    title: "We're Your One-Stop Destination for That!",
    desc: "We are dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

let index = 0;
function changeSlider(index) {
  slider.removeAttribute("style");
  slider.setAttribute(
    "style",
    `background:url('${sliderItems[index].img}');background-size:cover;background-repeat:no-repeat;background-position:center;transition:background 1s linear;`
  );
  sliderTitle.innerHTML = `${sliderItems[index].title}`;
}

setInterval(() => {
  index++;
  if (index >= sliderItems.length) index = 0;
  changeSlider(index);
}, 4000);
