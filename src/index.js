import Handlebars from "./handlebars/dist/handlebars.runtime";

import logIn from "./pages/logIn/logIn.hbs";
import register from "./pages/register/register.hbs";
import editProfile from "./pages/editProfile/editProfile.hbs";
import chatPage from "./pages/chatPage/chatPage.hbs";
import page404 from "./pages/page404/page404.hbs";
import page500 from "./pages/page500/page500.hbs";

//components
import input from "./components/input/input.hbs";
import button from "./components/button/button.hbs";
import title from "./components/title/title.hbs";
import chatItem from "./components/chatItem/chatItem.hbs";

//images
import photoUrl from "./static/img/photo.svg";
import avatarUrl from "./static/img/photo.jpg";
import errorImageUrl from "./static/img/error-image.svg";

//icons
import arrowRightUrl from "./static/icons/arrow-right.svg";
import checkUrl from "./static/icons/check.svg";
import chipUrl from "./static/icons/chip.svg";
import sendUrl from "./static/icons/send.svg";
import menuPointsUrl from "./static/icons/menu-points.svg";

const route = {
  logIn,
  register,
  editProfile,
  chatPage,
  page404,
  page500,
};

const images = {
  editProfile: {
    photoUrl,
  },
  chatPage: {
    arrowRightUrl,
    checkUrl,
    chipUrl,
    sendUrl,
    avatarUrl,
    menuPointsUrl,
  },
  chatItem: {
    avatarUrl,
  },
  page404: {
    errorImageUrl,
  },
  page500: {
    errorImageUrl,
  },
};

Handlebars.registerPartial("input", input);
Handlebars.registerPartial("button", button);
Handlebars.registerPartial("title", title);
Handlebars.registerPartial("chatItem", chatItem);

function render(html) {
  const root = document.querySelector("#root");
  root.innerHTML = html;
}

window.router = function (template) {
  const page = route[template];
  const url = images[template];
  render(page(url));
};

window.addEventListener("DOMContentLoaded", () => {
  render(route.logIn());
});
