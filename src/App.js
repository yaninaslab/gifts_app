import "./App.css";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [gifts, setGifts] = useState(data);

  const removeGift = (id) => {
    let newGifts = gifts.filter((gift) => gift.id !== id);
    setGifts(newGifts);
  };

  return (
    <div className="big_container">
      <div className="container">
        <h1>List of {gifts.length} gifts</h1>
      </div>

      {gifts.map((element) => {
        const { id, gift, image } = element;

        return (
          <div key={id}>
            <div className="container">
              <h2>
                {id} - {gift}
              </h2>
            </div>

            <div className="container">
              <img src={image} width="300px" height="400px" alt="gifts" />
            </div>

            <div className="container">
              <button onClick={() => removeGift(id)}>Remove</button>
            </div>
          </div>
        );
      })}
      <div className="container">
        <button onClick={() => setGifts([])}>Delete All</button>
      </div>
    </div>
  );
}

export default App;
