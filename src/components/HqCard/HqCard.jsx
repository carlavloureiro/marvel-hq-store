import { Link } from 'react-router-dom';
import { Card, ComicImage, ComicInfo, AddCartButton } from './HqCard.styles';
import { Container } from '../HqList/HqList.styles';

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
            <div>
              <p>R$ {price}</p>
            </div>
          </ComicInfo>
          <AddCartButton><i class="bi bi-cart4"></i>Comprar</AddCartButton>
        </Card>
      </Link>
);
}
