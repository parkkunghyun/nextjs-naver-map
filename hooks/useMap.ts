import { useEffect, useRef, useState } from 'react';

function useMap() {
  const mapRef = useRef<HTMLElement | null | any>(null); // 불필요한 렌더링을 막을수있어서, 변경시 렌더링 안해도 되는것들적긴
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >('');

  useEffect(() => {
    // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
      setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
    }
  }, []);
  
  useEffect(() => {
    var h ="d"

    if (typeof myLocation !== 'string') {
      // 현재 위치 추적
      let currentPosition = [myLocation.latitude, myLocation.longitude];

      // Naver Map 생성
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });
      var Marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map:mapRef.current
      });
      var contentString = [
        '<div class="iw_inner">',
        `   <h3>${h}</h3>`,
        '   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />',
        '       <img src="/img/example/hi-seoul.jpg" width="55" height="55" alt="서울시청" class="thumb" /><br />',
        '       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />',
        '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
        '   </p>',
        '</div>'
    ].join('');
    var infowindow = new naver.maps.InfoWindow({
        content: contentString
    });
    naver.maps.Event.addListener(Marker, "click", function(e) {
        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(mapRef.current, Marker);
        }
    });
    }
  }, [myLocation]);

  return {
    myLocation,
  };
}
export default useMap;