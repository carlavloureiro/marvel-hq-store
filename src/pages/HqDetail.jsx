import { useState } from 'react';
import Header from '../components/Header/Header';
import ComicDetail from '../components/HqDetail/HqDetail';

export default function HqDetail() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {!isLoading && <Header />}
      <ComicDetail onLoadingChange={setIsLoading} />
    </>
  );
}
