import { useState } from "react";
import "./App.css";
import RatingComponent from "./components/RatingComponent";
import ThankYouComponent from "./components/ThankYouComponent";

function App() {
  const [rating, setRating] = useState<string>("");
  const [subMit, setSubMit] = useState<boolean>(false);

  const handleSubMit = () => {
    setSubMit(true);
  };

  return (
    <div>
      {subMit === false ? (
        <RatingComponent setRating={setRating} handleSubMit={handleSubMit} />
      ) : (
        <ThankYouComponent rating={rating} />
      )}
    </div>
  );
}

export default App;
