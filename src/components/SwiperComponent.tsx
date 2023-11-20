import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function SwiperComponent() {
    const [bullet, set_bullet] = useState(["HOME", "CONTEXT", "JOIN US", "CONTEXT US"]);
    const [modal, setModal] = useState(false);
    const experience = () => {
        setModal(!modal);
    }
    const profile = "/ones/ones.jpg"
    return (
        <>
            <Swiper
                pagination={{
                    clickable:true,
                    dynamicBULLETs: true,
                    renderBullet: function (index: number, className: string) {
                        return '<button class="' + className + '">' + (bullet[index])  + "</button>";
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                      <div style={{display:"flex", lineHeight: "20px"}}>
                          <img src={profile} alt="나" className="profile_wrap"/>
                          <p style={{margin:"70px "}}> 즐기는 사람은 <br /> 이길 수 없다고 생각해요 :) </p>
                      </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div>
                            <p>의류 편집숍 웹 디자니에서부터 서울 우수 기업 상장의 UI/UX 디자이너에서부터 대기업 API 자동화 선행 개발과 <br />
                              게임 생성 스토리 자동 생성 솔루션 구현을 경험 해봤어요.</p>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <section>
                        <div>
                            <h3> Game Game Composition </h3>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    );
}


// import React, {useState} from 'react';
// import SwiperCore from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import * as ReactDOMServer from "react-dom/server";
//
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
//
// import './styles.css';
// import { Pagination } from 'swiper/modules';
//
// // Install Swiper modules
//
// interface SwiperComponentProps {}
//
// const SwiperComponent: React.FC<SwiperComponentProps>  = () => {
//     // Initialize Swiper when the component mounts
//     return (
//         <>
//             <Swiper
//                 spaceBetween={30}
//                 modules={Pagination}
//                 pagination={{
//                     clickable: true,
//                     renderBULLET: function (index: number, className: string) {
//                         return ReactDOMServer.renderToStaticMarkup(<div className={className}>This renderToStaticMarkup will convert your JSX into html</div>);
//                     },
//                 }}
//                 className="mySwiper2"
//             >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//                 <SwiperSlide>Slide 5</SwiperSlide>
//                 <SwiperSlide>Slide 6</SwiperSlide>
//                 <SwiperSlide>Slide 7</SwiperSlide>
//                 <SwiperSlide>Slide 8</SwiperSlide>
//                 <SwiperSlide>Slide 9</SwiperSlide>
//             </Swiper>
//         </>
//     );
// };
//
// export default SwiperComponent;
