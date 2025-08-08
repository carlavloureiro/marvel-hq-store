import { Link } from 'react-router-dom';
import {Card, ComicImage, ComicInfo } from './HqCard.styles';

export default function HQCard({ comic }) {
  const { id, title, thumbnail, prices } = comic;
  const price = prices[0]?.price ?? 'N/A';
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Link to={`/hq/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card>
        <ComicImage src={imageUrl} alt={title} />
        <ComicInfo>
          <h3>{title}</h3>
          <p>Preço: ${price}</p>
        </ComicInfo>
      </Card>
    </Link>
  );
}
