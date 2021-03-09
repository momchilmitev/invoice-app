import './Button.scss';

export default function Button(props) {
  return (
    <button className={`btn btn--${props.modifier}`}>{props.children}</button>
  );
}
