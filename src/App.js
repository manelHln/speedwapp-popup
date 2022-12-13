import { logo } from "./assets";
import NotificationBar from './components/NotificationBar'

function App() {
  return (
      <div className="App">
        <div className="logo p-3">
          <img src={logo} alt="logo_speedwapp" />
        </div>
        {/*<Feedback />*/}
       <NotificationBar />
      </div>
  );
}

export default App;
