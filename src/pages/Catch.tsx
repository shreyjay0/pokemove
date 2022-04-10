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
    "https://www.gaia.com/wp-content/uploads/TreePose_StephSchwartz.jpg",
    "https://www.ekhartyoga.com/media/images/articles/content/Warrior-2-yoga-pose-Virabhadrasana-II-Ekhart-Yoga.jpg",
    "https://www.gaia.com/wp-content/uploads/HandtoToePose_NicoLuce.jpg", 
  ]
  // const yogapose = `https://www.yogapose.com/wp-content/uploads/2019/05/yoga-pose-${poseNum}.jpg`;
  const toReturn = poses[poseNum%3];
  setPoseNum(poseNum + 1);
  return toReturn
};


function Catch() {
  const [pokemon, setPokemon] = React.useState("");
  const [ypose, setYpose] = React.useState("");
  const refCam = React.useRef<any>(null);
  const [poseNum, setPoseNum] = React.useState(0);
  const [imageSrc,setImageSrc]=React.useState('');
  const [match, setMatch] = React.useState(false);
  const[cumMatch, setCumMatch] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const canvas = React.useRef<any>();

  React.useEffect(() => {
    setTimeout(() => {
      // console.log("hi")
      let imageSrc = refCam && refCam.current && refCam.current.getScreenshot();
      let body = JSON.stringify({ imgSrc: imageSrc, refIdx: poseNum % 3 })
      // console.log(body)
      
      fetch('/poseNet', {
        method: "POST",
        body: body,
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => {
        // console.log("THISS IS THE RESULT: ", json); 
        if (json.isMatch) {
          setMatch(true)
          // console.log("yyayyyy")
        }
          
        const ctx = canvas && canvas.current && canvas.current.getContext('2d');
        

        ctx.clearRect(0, 0, 450, 340);

        // console.log(json.skeleton)
        const ref = json.skeleton
        // left hip to left knee
        ctx.beginPath();
        ctx.moveTo(ref["leftHip"][0], ref["leftHip"][1]);
        ctx.lineTo(ref["leftKnee"][0], ref["leftKnee"][1]);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "yellow";
        ctx.stroke();


        // left knee to left ankle
        ctx.beginPath();
        ctx.moveTo(ref["leftKnee"][0], ref["leftKnee"][1]);
        ctx.lineTo(ref["leftAnkle"][0], ref["leftAnkle"][1]);
        ctx.strokeStyle = "red";

        ctx.closePath();
        ctx.stroke();

        // right hip to right knee
        ctx.beginPath();
        ctx.moveTo(ref["rightHip"][0], ref["rightHip"][1]);
        ctx.lineTo(ref["rightKnee"][0], ref["rightKnee"][1]);
        ctx.strokeStyle = "yellow";
        ctx.closePath();
        ctx.stroke();

        // left hip to right hip
        ctx.beginPath();
        ctx.moveTo(ref["leftHip"][0], ref["leftHip"][1]);
        ctx.lineTo(ref["rightHip"][0], ref["rightHip"][1]);
        ctx.strokeStyle = "green";
        ctx.closePath();
        ctx.stroke();


        // right knee to right ankle
        ctx.beginPath();
        ctx.moveTo(ref["rightKnee"][0], ref["rightKnee"][1]);
        ctx.lineTo(ref["rightAnkle"][0], ref["rightAnkle"][1]);
        ctx.strokeStyle = "red";
        ctx.closePath();
        ctx.stroke();


        // left shoulder to left elbow
        ctx.beginPath();
        ctx.moveTo(ref["leftShoulder"][0], ref["leftShoulder"][1]);
        ctx.lineTo(ref["leftElbow"][0], ref["leftElbow"][1]);
        ctx.strokeStyle = "purple";
        ctx.closePath();
        ctx.stroke();

        // left shoulder to left hip
        ctx.beginPath();
        ctx.moveTo(ref["leftShoulder"][0], ref["leftShoulder"][1]);
        ctx.lineTo(ref["leftHip"][0], ref["leftHip"][1]);
        ctx.strokeStyle = "blue";
        ctx.closePath();
        ctx.stroke();

        // left shoulder to right shoulder
        ctx.beginPath();
        ctx.moveTo(ref["leftShoulder"][0], ref["leftShoulder"][1]);
        ctx.lineTo(ref["rightShoulder"][0], ref["rightShoulder"][1]);
        ctx.strokeStyle = "pink";
        ctx.closePath();
        ctx.stroke();


        // // right shoulder to right elbow
        ctx.beginPath();
        ctx.moveTo(ref["rightShoulder"][0], ref["rightShoulder"][1]);
        ctx.lineTo(ref["rightElbow"][0], ref["rightElbow"][1]);
        ctx.strokeStyle = "purple";
        ctx.closePath();
        ctx.stroke();

        // right shoulder to right hip
        ctx.beginPath();
        ctx.moveTo(ref["rightShoulder"][0], ref["rightShoulder"][1]);
        ctx.lineTo(ref["rightHip"][0], ref["rightHip"][1]);
        ctx.strokeStyle = "blue";
        ctx.closePath();
        ctx.stroke();

        // right elbow to right wrist
        ctx.beginPath();
        ctx.moveTo(ref["rightElbow"][0], ref["rightElbow"][1]);
        ctx.lineTo(ref["rightWrist"][0], ref["rightWrist"][1]);
        ctx.strokeStyle = "orange";
        ctx.closePath();
        ctx.stroke();

        // left elbow to left wrist
        ctx.beginPath();
        ctx.moveTo(ref["leftElbow"][0], ref["leftElbow"][1]);
        ctx.lineTo(ref["leftWrist"][0], ref["leftWrist"][1]);
        ctx.strokeStyle = "orange";
        ctx.closePath();
        ctx.stroke();
    })
      .catch(err => console.log(err));

      setImageSrc(imageSrc)
      // console.log("ok")
      // console.log(imageSrc)
    }, 1000);
  }, [refCam, imageSrc, canvas]);


  React.useEffect(() => {
    let timer = setTimeout(() => {
      if (match) {
        setCumMatch(true)
      } else {
        setMessage("IT RAN AWAY")
      }
      
      setTimeout(() => {
        setCumMatch(false)
        setMessage("")
        // setCumMatch(false);
        console.log("SET POKEMON")
        setPokemon(generateRandomPokemonName());
        setYpose(generateRandomPoseName(poseNum, setPoseNum));
        setMatch(false);
      }, 1000)
      
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [match, poseNum]);
  return (
    <div>

      <div className="flex flex-row justify-between items-center py-6 px-6 h-1/2">
        <div className="flex-1 max-w-md">
          <Pokemon pokemon={pokemon} />
        </div>
        <div className="flex-1 max-w-md">
          <Webcam audio={false} ref={refCam} screenshotFormat="image/jpeg" className="shadow-lg rounded-lg " />
          <canvas style={{position: "absolute", top: "23.5%", left: "34.5%"}} ref={canvas} id="canvas" width="450" height="340"></canvas>

        </div>
        <div className="flex-1 max-w-md">
          <YPose ypose={ypose} />
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
        {cumMatch && <div style={{ color: "green ", fontSize: "5em", fontFamily: "Impact, Fantasy"}}> YOU CAUGHT A POKEMON! </div>}
        {!cumMatch && <div style={{color: "red", fontSize: "5em", fontFamily: "Impact, Fantasy"}} > {message} </div>}
      </div>
    </div>
  );
}

export default Catch;
