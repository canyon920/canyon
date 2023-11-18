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
    const [BULLET, SET_BULLET] = useState(["HOME", "CONTEXT", "JOIN US", "CONTEXT US"]);
    return (
        <>
            <Swiper
                pagination={{
                    clickable:true,
                    // dynamicBULLETs: true,
                    renderBULLET: function (index: number, className: string) {
                        return '<button class="' + className + '">' + (BULLET[index])  + "</button>";
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <section>
                      <div>
                        <h3> PROFILE </h3>
                          <p> <br /> 풍부한 경험을 갖고 있는 프론트엔드 개발자 김동원 입니다.</p>
                      </div>
                    </section>
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
