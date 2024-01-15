import "./App.css";
import { isMobileAgent, isPortraitOrientation } from "./utils/responsive";
import { MoviesLobby } from "./view/common/MoviesLobby";
import { SearchBar } from "./view/common/SearchBar";

const isMobile = isMobileAgent() ? "mobile" : "";
const isPortrait = isPortraitOrientation() ? "portrait" : "landscape";

function App() {
  return (
    <div className={`lobby ${isMobile} ${isPortrait}`}>
      <h1 className="lobby-header">Movies Lobby</h1>
      <div className="lobby-container">
        <SearchBar />
        <MoviesLobby />
      </div>
    </div>
  );
}

export default App;
