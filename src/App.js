import "./App.css";
import { setAvatar } from "./utils/utils";
import AvatarPicker from "./components/AvatarPicker";
import { AVATARS } from "./data/constants";

function App() {
  return (
    <div className="App">
      <AvatarPicker avatars={AVATARS} />
    </div>
  );
}

export default App;
