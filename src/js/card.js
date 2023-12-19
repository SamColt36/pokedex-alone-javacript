"use strict";
import {
    sandwishButton,
    iconHash,
    radioButtons,
    checkButton,
    cardSearch,
  } from "./dom.js";

const enableSearch = () => {
  $(cardSearch).toggleClass("hidden");
  $(sandwishButton).toggleClass("z-50");
};

iconHash.click(enableSearch);

radioButtons.change(() => {
  return radioButtons
    ? checkButton.removeClass("hidden").addClass("block")
    : checkButton.addClass("hidden").removeClass("block");
});

checkButton.click(enableSearch);
