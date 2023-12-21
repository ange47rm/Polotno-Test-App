import Workspace from 'polotno/canvas/workspace';
import { store } from './SetupPolotno';
import './App.css'

const App = () => {
  return (
    <div id="container">
            <Workspace store={store} />
    </div>
  )
};

export default App;