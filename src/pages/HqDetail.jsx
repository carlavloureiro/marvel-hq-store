import { useParams } from 'react-router-dom';

export default function HqDetail() {
  const { id } = useParams();
  return <h1>Detalhes da HQ - ID: {id}</h1>;
}
