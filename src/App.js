import InviteFriends from "./components/InviteFriends";
import Popup from "./components/Popup";
import Feedback from './components/Feedback'
import { logo } from "./assets";

function App() {
  return (
      <div className="App">
        <div className="logo p-3">
          <img src={logo} alt="logo_speedwapp" />
        </div>
        {/*<Popup />*/}
         <InviteFriends />
         {/*<Feedback />*/}
         {/**/}
      </div>
  );
}

export default App;
