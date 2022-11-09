//import type { NextPage } from 'next';
import styled from 'styled-components';
import useMap from '../hooks/useMap';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link';

const IndexPage = () => {
  useMap();
  const router = useRouter()
  return (
    <>
      <form action="_search" method='post'>
        <input name="titles" type="text" />
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