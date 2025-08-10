import Header from '../components/Header/Header'; 
import Banner from '../components/Banner/Banner';
import Sobre from '../components/Sobre/Sobre';
import HQList from '../components/HqList/HqList'; 

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Sobre />
      <HQList /> 
    </>
  );
}
