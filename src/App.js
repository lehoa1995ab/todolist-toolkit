import './App.css';
import Indexs from './component/indexs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Indexs/>
      <ToastContainer/>
    </div>
  );
}

export default App;
