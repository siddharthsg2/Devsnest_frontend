const img1 = require("../images/slider/slide_1.png").default;
const img2 = require("../images/slider/slide_2.png").default;
const img3 = require("../images/slider/slide_3.png").default;

const heroSliderData = [
  {
    title: "NEW SEASON SALE",
    description: "GET 50% OFF ON STYLES OF THIS SEASON",
    img: img1,
    color: "blue",
    path: "/men",
  },
  {
    title: "TOP CATEGORIES",
    description: "BEST OF WOMEN'S WEAR",
    img: img2,
    path: "/women",
    color: "pink",
  },
  {
    title: "SHOP FROM TOP BRANDS",
    description: "All your favourites at your doorstep.",
    img: img3,
    path: "/accessories",
    color: "orange",
  },
];

export default heroSliderData;
