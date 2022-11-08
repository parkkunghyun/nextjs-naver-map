import type { NextPage } from 'next';
import styled from 'styled-components';
import useMap from '../hooks/useMap';

const IndexPage: NextPage = () => {
  useMap();
  return (
    <>
      <form action="" method='post'>
        <input type="text" />
        <button type='submit'>검색</button>
      </form>
       <MapBox id="map"></MapBox>
    </>
 
  );
};

// Styles
const MapBox = styled.div`
  width: 800px;
  height: 800px;
`;

export default IndexPage;