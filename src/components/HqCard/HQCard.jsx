import { Card, ComicImage, ComicTitle, ComicPrice } from './HqCard.styles';

export default function HQCard({ comic }) {
  const { title, thumbnail, prices } = comic;
  const price = prices[0]?.price ?? 'N/A';
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Card>
      <ComicImage src={imageUrl} alt={title} />
      <ComicTitle>{title}</ComicTitle>
      <ComicPrice>Preço: ${price}</ComicPrice>
    </Card>
  );
}
