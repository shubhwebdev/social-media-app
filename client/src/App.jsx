import SiteRoutes from './config/routes';
import Navigation from './components/Navigation/Navigation'
import SiteFooter from './components/Footer/SiteFooter';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <SiteRoutes/>
      <SiteFooter/>
    </div>
  );
}

export default App;
