import './App.css';
import Image from './components/base/image/Image';

function App() {
  return (
    <div className="App">
      <Image 
        style={{ 
          width: 50,
          height: 100
         }}
        source={`/assets/img/abramov.jpg`}
      />
    </div>
  );
}

export default App;
