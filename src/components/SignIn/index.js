import './SignIn.scss';
import { useState, useContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { AuthContext } from '../../contexts/AuthContext';

const SignIn = () => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (isNewUser) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((credentials) => {
          const user = credentials.user;
          setUser(user);
        })
        .catch((e) => console.log(e.message));
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        const user = credentials.user;
        setUser(user);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <form className="sign-in__form" onSubmit={onFormSubmit}>
      <input
        className="sign-in__input"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="sign-in__input"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        className="sign-in__submit btn btn--purple"
        type="submit"
        value={isNewUser ? 'sign up' : 'sign in'}
      />
      <p className="sign-in__info">
        Are you new user?{' '}
        <span onClick={() => setIsNewUser(!isNewUser)}>SignUp</span>
      </p>
    </form>
  );
};

export default SignIn;
