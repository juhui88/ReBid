import HomePhoto from "../components/home/HomePhoto";
import { SwiperSlide, Swiper } from "swiper/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../style/swiper.css";
import "swiper/css/pagination";
import { useCookies } from "react-cookie";

export default function Home() {
  const [data, setData] = useState([]);
  const [endTod, setEndTod] = useState([]);
  const [cookie, setcookie] = useCookies();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/bids`)
      .then((res) => {
        setData(res.data.data.bids);
        return res.data.data.bids[0];
      })
      .catch((e) => console.log(e));

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/bids/imminent`)
      .then((res) => {
        setEndTod(res.data.data.bids);
      })
      .catch((e) => console.log(e));

    console.log(cookie);
  }, [cookie]);

  return (
    <div className="flex flex-col items-center">
      <Banner bid={data[1]} />
      <div className="flex flex-col gap-5 py-5">
        <div className="text-2xl px-2">지금 진행중인 경매</div>
        <div className="w-[850px] overflow-visible">
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
            className="overflow-visible"
          >
            {data.length !== 0 ? (
              data.map((e, el) => {
                return (
                  <SwiperSlide key={el}>
                    <HomePhoto
                      image={e.imageUrl}
                      name={e.itemName}
                      bidId={e.bidId}
                    />
                  </SwiperSlide>
                );
              })
            ) : (
              <div>No Data</div>
            )}
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col gap-5 py-5">
        <div className="text-2xl px-2">오늘 끝나는 경매</div>
        <div className="w-[850px] overflow-visible">
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
            className="overflow-visible"
          >
            {endTod.length !== 0 ? (
              endTod.map((e, el) => {
                return (
                  <SwiperSlide key={el}>
                    <HomePhoto
                      name={e.itemName}
                      image={e.imageUrl}
                      bidId={e.bidId}
                    />
                  </SwiperSlide>
                );
              })
            ) : (
              <div>No Data</div>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
