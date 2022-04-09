import React from "react";

function Home() {
  const onStartSession = () => {
    window.location.href = "/session/catch";
  };
  return (
    <div>
      <div className="text-2xl">Welcome to pokemove</div>
      <div className="p-8">
        <div className="text-xl">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={onStartSession}
          >
            Start a session
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
