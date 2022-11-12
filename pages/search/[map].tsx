//import type { NextPage } from 'next';
import styled from 'styled-components';
import IndexPage from '..';
import useMap from '../../hooks/useMap';
import Link from 'next/link';
import Head from 'next/head';
import searchAPI from '../../hooks/searchAPI';

const searchPage= () => {
  useMap();
  searchAPI();

  return (
    <>
        <Head>

        </Head>
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

export default searchPage;