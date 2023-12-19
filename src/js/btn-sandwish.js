"use strict";
import {
  sandwishButton,
  iconHash,
  dropdownMenu,
  closeMenu,
  pathElement,
  spanBlack,
  pathActived,
  pathDisabled,
} from "./dom.js";

let count = 0;

sandwishButton.addClass("transition duration-700 transition-all ease-in-out");
dropdownMenu.addClass("transition duration-700 transition-all ease-in-out");

const toggleClass = () => {
  spanBlack.toggleClass("fixed hidden");
  sandwishButton.toggleClass("text-white text-black");
  iconHash.toggleClass("z-50");
  dropdownMenu.toggleClass("translate-y-full");
};

const activateMenu = () => {
  pathElement.attr("d", pathDisabled);
  toggleClass();
};

const disableMenu = () => {
  pathElement.attr("d", pathActived);
  toggleClass();
};

const comportamentoBtnMenuSuspenso = () => {
  count++;
  return count % 2 == 0 ? disableMenu() : activateMenu();
};

sandwishButton.click(comportamentoBtnMenuSuspenso);
closeMenu.click(comportamentoBtnMenuSuspenso);
