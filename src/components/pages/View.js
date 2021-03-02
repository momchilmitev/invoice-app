import { useParams } from 'react-router-dom';

const View = () => {
  let { id } = useParams();

  return <div>View with id: {id}</div>;
};

export default View;
