import Workspace from 'polotno/canvas/workspace';
import { store } from './SetupPolotno';
import './App.css'

// Feed Polotno store object into the app
const App = () => {
  return (
    <div id="container">
            <Workspace store={store} />
    </div>
  )
};

export default App;