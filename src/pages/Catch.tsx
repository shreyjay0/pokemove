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

const generateRandomPoseName = (poseNum: number, setPoseNum: (arg0: number) => void) => {
  // const poseNum = Math.floor(Math.random() * 5);
  const poses = [
    "https://www.gaia.com/wp-content/uploads/HandtoToePose_NicoLuce.jpg",
    "https://www.ekhartyoga.com/media/images/articles/content/Reverse-Warrior-Pose-Viparita-Virabhadrasana.jpg",
    "data:image/jpeg;base64,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",
    "https://www.verywellfit.com/thmb/Bl-OlmNdULyUuapM2Luu8Nn5KwU=/4000x3000/smart/filters:no_upscale()/5-sideplank-56f94c2a3df78c7841931333.jpg", 
    "https://www.verywellfit.com/thmb/Sgy_FHtDtEl8wctggFasfjH3rhg=/3000x2000/filters:fill(FFDB5D,1)/About-50-4111744-Tree-Pose02-641-5c4b762cc9e77c00016f33b6.jpg", 
  ]
  // const yogapose = `https://www.yogapose.com/wp-content/uploads/2019/05/yoga-pose-${poseNum}.jpg`;
  const toReturn = poses[poseNum%5];
  setPoseNum(poseNum + 1);
  return toReturn
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
  const refCam = React.useRef<any>(null);
  const [poseNum, setPoseNum] = React.useState(0);
  const [imageSrc,setImageSrc]=React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      console.log("hi")
      let imageSrc = refCam && refCam.current && refCam.current.getScreenshot();
      let body = JSON.stringify({ imgSrc: imageSrc })
      console.log(body)
      fetch('/poseNet', {
        method: "POST",
        body: body,
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => {console.log("THISS IS THE RESULT: ", json); if (json.isMatch) alert('yay')})
      .catch(err => console.log(err));

      setImageSrc(imageSrc)
      console.log("ok")
      console.log(imageSrc)
    }, 10000);
  }, [refCam, imageSrc]);


  React.useEffect(() => {
    setTimeout(() => {
      setPokemon(generateRandomPokemonName());
      setYpose(generateRandomPoseName(poseNum, setPoseNum));
    }, 10000);
  }, [pokemon, poseNum]);
  return (
    <div className="flex flex-row justify-between items-center py-6 px-2 h-1/2">
      <div className="flex-1 max-w-md">
        <Webcam audio={false} ref={refCam} screenshotFormat="image/jpeg" className="shadow-lg rounded-lg" />
        {/* <canvas id="canvas" width="1080" height="720"></canvas> */}

      </div>
      <div className="w-48">
        <Pokemon pokemon={pokemon} />
      </div>
      <div className="flex-1 max-w-sm px-4">
        <YPose ypose={ypose} />
      </div>
       <img alt="alt" src={imageSrc}/>
    </div>
  );
}

export default Catch;
