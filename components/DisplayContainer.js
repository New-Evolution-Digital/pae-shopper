import Navigation from '../components/navigation';
import AdvSearch from '../components/advSearch';
import CardContainer from './cardContainer';

const DisplayContainer = () => {
  return (
    <div>
      <Navigation />
      <div>
        <AdvSearch />
        <CardContainer />
      </div>
    </div>
  );
};

export default DisplayContainer;
