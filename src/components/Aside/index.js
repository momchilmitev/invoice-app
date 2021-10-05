import './Aside.scss';
import moon from '@assets/icons/icon-moon.svg';
import sun from '@assets/icons/icon-sun.svg';
import logo from '@assets/images/logo.svg';
import avatar from '@assets/images/avatar.jpg';

const Aside = ({ darkTheme = false }) => {
  return (
    <aside className="aside">
      <div className="logo">
        <div className="logo__up">
          <div className="logo__down"></div>
          <img src={logo} alt="logo" className="logo__image" />
        </div>
      </div>
      <div className="aside__images">
        <div className="aside__icon">
          <img src={darkTheme ? moon : sun} alt="theme-icon" />
        </div>
        <div className="aside__avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
