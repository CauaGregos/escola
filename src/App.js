import './App.css';
import Logo from '../src/components/templates/Logo';
import Menu from '../src/components/templates/Menu';
import Footer from '../src/components/templates/Footer';
import Rotas from '../src/Rotas';
import CrudAluno from './CrudAluno/CrudAluno';


function App() {
  return (<div className="App">
    <Logo />
    <Menu />
    <CrudAluno/>
    <Footer />
  </div>
  );
}
export default App;
