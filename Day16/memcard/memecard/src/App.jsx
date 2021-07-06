import "./App.css";

function App() {
    return(
        <div className="memeCard">
        <div className="cardImg">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2s9cjb-1548710537.jpg"
            alt="pic"
          ></img>
        </div>
        <h1>React card</h1>
        <div className="cardDescription">
          <p> Meme card THA</p>
        </div>
      </div>
    );
}

export default App;