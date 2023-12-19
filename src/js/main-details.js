"use strict";
import { body } from "./dom.js";

const service = new PokemonService();

const formatNumbers = (number) => {
  return String(number).padStart(4, "0");
};

const streamlineHtml = (pokemon) => {
  const pokemonType = $(".pokemonType");
  const pokemonName = $(".pokemonName");
  const pokemonID = $(".pokemonID");
  const pokemonSprites = $(".pokemonSprites");
  const pokemonWeight = $(".pokemonWeight");
  const pokemonHeight = $(".pokemonHeight");
  const pokemonStatsValue = $(".pokemonStat");
  const pokemonStatsValueBar = $(".statsValueBar");

  pokemonType.toggleClass(`${pokemon.types[0]}`);
  pokemonName.text(`${pokemon.name}`);
  pokemonID.text(`#${formatNumbers(pokemon.id)}`);
  pokemonSprites.attr({
    src: `${pokemon.sprites}`,
    alt: `${pokemon.name}`,
  });
  pokemonWeight.text(`${pokemon.weight} kg`);
  pokemonHeight.text(`${pokemon.height} m`);

  for (let j = 0; j < pokemonStatsValue.length; j++) {
    const value = pokemon.statsValue[j];

    pokemonStatsValue[j].textContent = formatNumbers(value);
    pokemonStatsValueBar[j].style.width = `${value}%`;
  }
};

const generatePokemonByIdOrName = async (pokemon, idOrName) => {
  const pokemonDetails = await service.getPokemonDetails(idOrName);
  return pokemon.instancePokemon(pokemonDetails);
};

const mainDetail = ({ name, id, types, sprites }) => {
  $(body).removeClass("bg-body");

  const type = types[0];
  const secondType = types[1]
    ? `<li class="text-white py-1 px-3 rounded-full text-center text-xs w-min lg:text-sm xl:text-lg">${types[1]}</li>`
    : "";

  return `
	<div class="relative z-10 lg:px-8 xl:max-w-4xl xl:mx-auto xl:px-0 xl:h-min">
		<!--Esse span é o responsável por deixar a tela escura quando o menu suspenso está ativado-->
		<span class="spanBlack hidden top-0 left-0 w-screen h-screen bg-black/80 z-30"></span>
		<!--/Esse span é o responsável por deixar a tela escura quando o menu suspenso está ativado-->
		<nav class="mb-32 flex justify-between items-center p-4 ${type}" id="nav">
			<div class="flex space-x-3">
				<a href="../../index.html">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
						stroke="currentColor" class="w-7 h-7 text-white drop-shadow-xl cursor-pointer">
						<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
					</svg>
				</a>
				<h1 class="righteous text-xl text-white drop-shadow-xl lg:text-2xl">${name}</h1>
			</div>
			<span class="righteous text-sm text-white drop-shadow-xl lg:text-base">#${formatNumbers(
        id
      )}</span>
		</nav>

		<div class="border p-2 bg-white rounded-t-xl">
			<!--Container com imagens-->
			<figure class="relative">
				<!--Pokeball-->
				<img src="./src/assets/background-pokeball.png" alt="Ilustração de pokeball opaca"
					class="absolute right-0 -translate-y-full h-48 z-10 opacity-10">
				<!--/Pokeball-->
				<!--Pokemon-->
				<img src="${sprites}" alt="Imagem alusiva ao pokemon ${name}"
					class="mx-auto absolute top-0 right-0 left-0 -translate-y-36 h-64 drop-shadow-md">
				<!--/Pokemon-->
			</figure>
			<!--/Container com imagens-->
			<!--Seção com informações 'ABOUT'-->
			<div class="pt-28 space-y-5 px-2">
				<!--Types-->
				<ul class="flex-center space-x-3 text-white font-medium">
					<li class="text-white py-1 px-3 rounded-full text-center text-xs w-min lg:text-sm xl:text-lg">
						${type}
					</li>
					${secondType}
				</ul>
				<!--/Types-->
				<!--About-->
				<h1 class="text-center ${type} text-lg font-bold bg-white lg:text-xl xl:text-2xl">About</h1>
				<!--/About-->
				<!--PESO, ALTURA E MOVES-->
				<div>
					<ul class="flex justify-center items-stretch divide-x divide-gray-300">
						<!--PESO-->
						<li
							class="relative text-black flex justify-between items-center flex-col self-stretch px-4 xs:text-sm xs:px-2 sm:px-2 sm:text-sm">
							<section class="flex-center space-x-4 h-2/3">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
									stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z">
								</svg>
								<p class="pokemonWeight"></p>
							</section>
							<p class="text-gray-400 text-sm">Weight</p>
						</li>
						<!--/PESO-->
						<!--ALTURA-->
						<li class="text-black flex justify-between items-center flex-col self-stretch px-4 xs:text-sm xs:px-2 sm:px-2 sm:text-sm">
							<section class="flex-center space-x-4 h-2/3">
								<svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
									stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" />
									<path
										d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
									<line x1="4" y1="8" x2="6" y2="8" />
									<line x1="4" y1="12" x2="7" y2="12" />
									<line x1="4" y1="16" x2="6" y2="16" />
									<line x1="8" y1="4" x2="8" y2="6" />
									<polyline points="12 4 12 7 " />
									<polyline points="16 4 16 6 " />
								</svg>
								<p class="pokemonHeight"></p>
							</section>
							<p class="text-gray-400 text-sm">Height</p>
						</li>
						<!--/ALTURA-->
					</ul>
				</div>
				<!--/PESO, ALTURA E MOVES-->
			</div>
			<!--/Seção com informações 'ABOUT'-->
			<p class="text-black py-6 px-2 text-sm lg:max-w-lg lg:mx-auto lg:text-base xl:text-lg xl:max-w-2xl xl:mx-auto">
				There is a plant seed on its back right from the day this Pokémon is
				born. The seed slowly grows larger.
			</p>

			<header class="text-center ${type} text-lg font-bold bg-white lg:text-xl xl:text-2xl" id="header">Base Stats
			</header>

			<!--Tabela com habilidades-->
			<section class="flex space-x-3 divide-x divide-gray-300 xs:px-2 sm:px-2 md:px-2 lg:max-w-lg lg:mx-auto xl:max-w-2xl xl:mx-auto">
				<!--LABEL-->
				<ul class="text-sm font-bold text-right lg:text-base">
					<li class="bg-white ${type}">HP</li>
					<li class="bg-white ${type}">ATK</li>
					<li class="bg-white ${type}">DEF</li>
					<li class="bg-white ${type}">SATK</li>
					<li class="bg-white ${type}">SDEF</li>
					<li class="bg-white ${type}">SPD</li>
				</ul>
				<!--/LABEL-->
				<div class="flex w-full">
					<ul class="text-sm text-black px-2 w-full lg:text-base">
						<li class="flex-center space-x-4 relative w-full">
							<p class="pokemonStat"></p>
							<div class="flex items-center relative w-full border h-2 bg-gray-200 rounded-full">
								<span class="block ${type} rounded-full h-2 statsValueBar "></span>
							</div>
						</li>
						<li class="flex-center space-x-4 relative w-full">
							<p class="pokemonStat"></p>
							<div class="flex items-center relative w-full border h-2 bg-gray-200 rounded-full">
								<span class="block ${type} rounded-full h-2 statsValueBar"></span>
							</div>
						</li>
						<li class="flex-center space-x-4 relative w-full">
							<p class="pokemonStat"></p>
							<div class="flex items-center relative w-full border h-2 bg-gray-200 rounded-full">
								<span class="block ${type} rounded-full h-2 statsValueBar"></span>
							</div>
						</li>
						<li class="flex-center space-x-4 relative w-full">
							<p class="pokemonStat"></p>
							<div class="flex items-center relative w-full border h-2 bg-gray-200 rounded-full">
								<span class="block ${type} rounded-full h-2 statsValueBar"></span>
							</div>
						</li>
						<li class="flex-center space-x-4 relative w-full">
							<p class="pokemonStat"></p>
							<div class="flex items-center relative w-full border h-2 bg-gray-200 rounded-full">
								<span class="block ${type} rounded-full h-2 statsValueBar"></span>
							</div>
						</li>
						<li class="flex-center space-x-4 relative w-full">
							<p class="pokemonStat"></p>
							<div class="flex items-center relative w-full border h-2 bg-gray-200 rounded-full">
								<div class="block ${type} rounded-full h-2 statsValueBar"></div>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<!--Tabela com habilidades-->
		</div>
	</div>
	`;
};

export { streamlineHtml, formatNumbers, generatePokemonByIdOrName, mainDetail };
