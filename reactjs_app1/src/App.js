import logo from './logo.svg';
import './App.scss';
import Content from './content/Content';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
