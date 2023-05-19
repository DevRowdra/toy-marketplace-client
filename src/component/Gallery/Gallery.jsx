import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Gallery = () => {
    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease-out', once: true });
      }, []);
  return (
    <div className="mt-11">
        <h1 data-aos="zoom-out-down" className='text-center font-semibold text-7xl mb-7 text-red-400'>Toy Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-2 ">
        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="500" className=" overflow">
          <img
            className="object-cover w-full "
            src="https://t3.ftcdn.net/jpg/02/01/87/96/240_F_201879683_cZ6soU5fl0rDtwox8yCcZZECTgKNSrmu.jpg"
            alt=""
          />
        </div>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" className=" md:row-span-2 md:col-span-2 overflow-hidden">
          <img
            className="object-cover w-full "
            src="https://t3.ftcdn.net/jpg/05/06/42/04/240_F_506420477_RWGT3tK6J8Z1HBTy5M5kE7LxEUknniiV.jpg"
            alt=""
          />
        </div>

        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="500" className=" overflow">
          <img
            className="object-cover w-full "
            src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?size=626&ext=jpg&ga=GA1.1.1866924333.1684384371&semt=ais"
            alt=""
          />
        </div>

          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="500" className=" overflow">
            <img
              className="object-cover w-full "
              src="https://t4.ftcdn.net/jpg/03/06/78/05/240_F_306780515_Vrzcn6P7R4PbYYTVQrfwN3mRAltYyupJ.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="500" className=" overflow">
            <img
              className="object-cover w-full h-48 "
              src="https://t3.ftcdn.net/jpg/02/01/87/96/240_F_201879683_cZ6soU5fl0rDtwox8yCcZZECTgKNSrmu.jpghttps://t3.ftcdn.net/jpg/01/68/88/96/240_F_168889615_PFFsepzTVATmDsrpGT3QQf4BXXkwbJkq.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="200" className=" overflow">
            <img
              className="object-cover w-full "
              src="https://t4.ftcdn.net/jpg/00/83/33/23/240_F_83332389_M395HUI1v7wqSmDrSW9Imb1boitGL6SX.jpg"
              alt=""
            />
          </div>
          <div className=" overflow">
            <img
              className="object-cover w-full "
              src="https://t3.ftcdn.net/jpg/05/87/26/68/240_F_587266869_ZnKD9Nkt39Zg2YYZYQYvigH5eL3MtUu8.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="200" className=" overflow">
            <img
              className="object-cover w-full  "
              src="https://img.freepik.com/free-photo/toy-red-car-with-pinecone-top_1252-14.jpg?size=626&ext=jpg&ga=GA1.2.1866924333.1684384371&semt=ais"
              alt=""
            />
          </div>
          <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="200" className=" overflow">
            <img
              className="object-cover w-full "
              src="https://t4.ftcdn.net/jpg/00/51/16/29/240_F_51162995_OsPklZediuCgDJwOqbWjlOMrVFzoYIUn.jpg"
              alt=""
            />
          </div>
      </div>
    </div>
  );
};

export default Gallery;
