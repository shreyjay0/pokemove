import React from "react";
import Pokemon from "../components/Pokemon";
import YPose from "../components/YPose";
import { pokelist } from "../pokelist";
import Webcam from "react-webcam";

const generateRandomPokemonName = () => {
  const pokeNum = Math.floor(Math.random() * 100) + 1;
  const pokemon = `https://static.pokemonpets.com/images/monsters-images-300-300/${pokeNum}-${
    pokelist[pokeNum - 1]
  }.webp`;
  return pokemon;
};

const generateRandomPoseName = () => {
  const poseNum = Math.floor(Math.random() * 5) + 1;
  const yogapose = `https://www.yogapose.com/wp-content/uploads/2019/05/yoga-pose-${poseNum}.jpg`;
  return yogapose;
};

const generatePokemon = (timeout = 10000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pokemon = generateRandomPokemonName();
      resolve(pokemon);
    }, timeout);
  });
};

function Catch() {
  const [pokemon, setPokemon] = React.useState("");
  const [ypose, setYpose] = React.useState("");
  const refCam = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      setPokemon(generateRandomPokemonName());
      setYpose(generateRandomPoseName());
    }, 10000);
  }, [pokemon]);
  return (
    <div className="flex flex-row justify-between items-center py-6 px-2 h-1/2">
      <div className="flex-1 max-w-md">
        <Webcam audio={false} ref={refCam} className="shadow-lg rounded-lg" />
      </div>
      <div className="w-48">
        <Pokemon pokemon={pokemon} />
      </div>
      <div className="flex-1 max-w-sm px-4">
        <YPose ypose={ypose} />
      </div>
    </div>
  );
}

export default Catch;
