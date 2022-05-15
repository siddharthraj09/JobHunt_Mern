
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components"
import {Link} from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Pabst health goth yuccie, YOLO everyday carry biodiesel tacos
            bicycle rights. Drinking vinegar activated charcoal enamel pin,
            post-ironic prism sartorial knausgaard artisan irony tilde bitters
            VHS synth umami pickled.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
