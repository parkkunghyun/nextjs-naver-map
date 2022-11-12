//import type { NextPage } from 'next';
import styled from 'styled-components';
import useMap from '../hooks/useMap';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { isElementAccessExpression } from 'typescript';


const IndexPage = () => {
  const [text,setText] = useState('')
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSearch = async (texts) => {
    const client_id = '1s86fM5jcJ6PbWHDdblu';
    const client_secret = 'nD_YhAtXg7';
    var title = texts

    const data = await axios({
      method: 'get',
      url: `https://openapi.naver.com/v1/search/blog.json?query=${encodeURI(title)}`,
      //dataType: 'json',
      headers: {
        'X-Naver-Client-Id':client_id, 
        'X-Naver-Client-Secret': client_secret
      }
    })
    console.log(data)
  }
  useMap();
  const router = useRouter()

  return (
    <>
      <input onChange={onChange} value={text}  />
      <button onClick={() =>onSearch(text)}>검색</button>
      <h4>{text}</h4>
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
