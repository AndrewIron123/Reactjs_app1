import logo from './logo.svg';
import './App.scss';
import Header from './header/Header'
import Content from './content/Content';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
