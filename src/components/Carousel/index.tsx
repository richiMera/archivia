// import React, { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import gsap from 'gsap';
 import carouselImage1 from '../../assets/img/carousel-image-1.jpg';
 import carouselImage2 from '../../assets/img/carousel-image-2.jpg';
 import arrowButtonLeft from '../../assets/img/arrow-button-left.svg';
 import arrowButtonRight from '../../assets/img/arrow-button-right.svg';

// interface CarouselProps {
//   isMobile: boolean;
// }

// const Carousel: React.FC<CarouselProps> = ({ isMobile }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null); // Ref per il contenitore delle card
//   const cards = [
//     { title: 'Archivi', img: carouselImage1, tags: ['Movimentazione', 'Spolveratura', 'Riordino', 'Scarto'] },
//     { title: 'Archivi', img: carouselImage2, tags: ['Movimentazione', 'Spolveratura', 'Riordino', 'Scarto'] },
//     { title: 'Archivi', img: carouselImage1, tags: ['Movimentazione', 'Spolveratura', 'Riordino', 'Scarto'] },
//     { title: 'Archivi', img: carouselImage2, tags: ['Movimentazione', 'Spolveratura', 'Riordino', 'Scarto'] },
//   ];

//   const handleDotClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   useEffect(() => {
//     if (carouselRef.current) {
//       const cardWidth = isMobile ? window.innerWidth : 1136; // Adattiamo la larghezza in base alla visualizzazione mobile o desktop
//       const startPos = -activeIndex * cardWidth; // Posizione corretta in base all'indice attivo

//       // Utilizzare gsap per muovere il carosello alla posizione desiderata
//       gsap.to(carouselRef.current, {
//         x: startPos, // Arrivo alla posizione finale
//         duration: 0.6,
//         ease: 'power3.inOut',
//       });
//     }
//   }, [activeIndex, isMobile]); // Si attiva ogni volta che l'indice cambia

//   const CarouselContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     width: 100%;
//   `;

//   const CarouselViewport = styled.div`
//     width: 100%;
//     overflow: hidden;
//   `;

//   const CarouselWrapper = React.forwardRef<HTMLDivElement, { isMobile: boolean; children: React.ReactNode }>(
//     ({ isMobile, children }, ref) => {
//       return (
//         <div
//           ref={ref}
//           style={{
//             display: 'flex',
//             gap: isMobile ? '8px' : '24px',
//             width: isMobile
//               ? `calc(100% * ${cards.length} + 8px * ${cards.length - 1})`
//               : `calc(1136px * ${cards.length} + 24px * ${cards.length - 1})`,
//             transition: 'transform 0.3s ease-out',
//           }}
//         >
//           {children}
//         </div>
//       );
//     }
//   );

//   interface CardProps {
//     title: string;
//     img: string;
//     tags: string[];
//     active: boolean;
//     isMobile: boolean;
//   }

//   const Card: React.FC<CardProps> = ({ title, img, tags, active, isMobile }) => {
//     return (
//       <div
//         style={{
//           width: isMobile ? '100%' : '1136px',
//           height: isMobile ? '640px' : '640px',
//           borderRadius: '8px',
//           flexShrink: 0,
//           position: 'relative',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//           backgroundImage: `${active ? 'linear-gradient(0deg, rgba(49, 119, 224, 1) 0%, rgba(49, 119, 224, 0) 100%)' : 'linear-gradient(0deg, rgba(60, 75, 97, 1) 0%, rgba(60, 75, 97, 0) 100%)'}, url(${img})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           overflow: 'hidden',
//           transition: 'transform 0.3s ease-out, background-image 0.3s ease-out',
//         }}
//       >
//         <CardTitle title={title} isMobile={isMobile} />
//         <Tags tags={tags} isMobile={isMobile} />
//       </div>
//     );
//   };

//   interface CardTitleProps {
//     title: string;
//     isMobile: boolean;
//   }

//   const CardTitle: React.FC<CardTitleProps> = ({ title, isMobile }) => {
//     return (
//       <h2
//         style={{
//           position: 'absolute',
//           top: isMobile ? '24px' : '40px',
//           left: isMobile ? '24px' : '40px',
//           color: 'white',
//           fontSize: '24px',
//           margin: 0,
//           zIndex: 1,
//         }}
//       >
//         {title}
//       </h2>
//     );
//   };

//   interface TagsProps {
//     tags: string[];
//     isMobile: boolean;
//   }

//   const Tags: React.FC<TagsProps> = ({ tags, isMobile }) => {
//     return (
//       <div
//         style={{
//           display: 'flex',
//           flexWrap: isMobile ? 'wrap' : 'nowrap',
//           gap: '8px',
//           position: 'absolute',
//           bottom: isMobile ? '24px' : '40px',
//           left: isMobile ? '24px' : '40px',
//         }}
//       >
//         {tags.map((tag, index) => (
//           <Tag key={index} tag={tag} />
//         ))}
//       </div>
//     );
//   };

//   interface TagProps {
//     tag: string;
//   }

//   const Tag: React.FC<TagProps> = ({ tag }) => {
//     return (
//       <div
//         style={{
//           padding: '12px 16px',
//           border: '1px solid white',
//           borderRadius: '50px',
//           color: 'white',
//           fontSize: '14px',
//           fontWeight: 400,
//           lineHeight: 1.5,
//           whiteSpace: 'nowrap',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           textAlign: 'center',
//         }}
//       >
//         <p
//           style={{
//             margin: 0,
//             fontSize: '14px',
//             fontWeight: 400,
//             lineHeight: 1.5,
//             whiteSpace: 'nowrap',
//           }}
//         >
//           {tag}
//         </p>
//       </div>
//     );
//   };

//   const Dots = styled.div`
//     display: flex;
//     justify-content: center;
//     gap: 16px;
//     margin-top: 24px;
//   `;

//   const Dot = styled.div<{ active: boolean }>`
//     width: 56px;
//     height: 4px;
//     border-radius: 10px;
//     background-color: ${({ active }) => (active ? '#3177E0' : '#CBD0D6')};
//     cursor: pointer;
//     transition: background-color 0.3s;
//   `;

//   return (
//     <CarouselContainer>
//       <CarouselViewport>
//         <CarouselWrapper isMobile={isMobile} ref={carouselRef}>
//           {cards.map((card, index) => (
//             <Card key={index} title={card.title} img={card.img} tags={card.tags} active={index === activeIndex} isMobile={isMobile} />
//           ))}
//         </CarouselWrapper>
//       </CarouselViewport>
//       <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
//         <Dots>
//           {cards.map((_, index) => (
//             <Dot key={index} active={index === activeIndex} onClick={() => handleDotClick(index)} />
//           ))}
//         </Dots>
//       </div>
//     </CarouselContainer>
//   );
// };

// export default Carousel;

import { useState } from "react";

interface CarouselProps {
  isMobile: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
         { title: 'Archivi', img: carouselImage1, tags: ['Movimentazione', 'Spolveratura', 'Riordino', 'Scarto'], content: 'Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis.' },
         { title: 'Archivi', img: carouselImage2, tags: ['Movimentazione', 'Spolveratura', 'Riordino', 'Scarto'], content: 'Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis.' },
         { title: 'Archivi', img: carouselImage1, tags: ['Movimentazione', 'Spolveratura', 'Riordino', 'Scarto'], content: 'Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis.' },
         { title: 'Archivi', img: carouselImage2, tags: ['Movimentazione', 'Spolveratura', 'Riordino', 'Scarto'], content: 'Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis.' },
       ];

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="carousel-container"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      <div
        className="carousel"
        style={{
          display: 'flex',
          transition: 'transform 0.3s ease-in-out',
          transform: `translateX(-${currentIndex * (isMobile ? 100 + 27 / window.innerWidth * 100 : 1136 + 24)}${isMobile ? '%' : 'px'})`, // Muove tutto il gruppo di card

        }}
      >
        {cards.map((card, index) => (
        

          <div
            className="carousel-card"
            key={index}
            style={{
              minWidth: isMobile ? '100%' : '1136px', // Larghezza fissa per ogni card
              height: isMobile ? '460px':'640px',
              marginRight: '24px', // Spazio tra le card
              marginBottom: '16px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              backgroundColor: 'white',
              backgroundImage: `${index === currentIndex ? 'linear-gradient(0deg, rgba(49, 119, 224, 1) 0%, rgba(49, 119, 224, 0) 100%)' : 'linear-gradient(0deg, rgba(60, 75, 97, 1) 0%, rgba(60, 75, 97, 0) 100%)'}, url(${card.img})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat',
                        position: 'relative',
                         transition: 'transform 0.3s ease-out, background-image 0.3s ease-out',
            }}
          >
           <h2
        style={{
          position: 'absolute',
          top: isMobile ? '24px' : '40px',
          left: isMobile ? '24px' : '40px',
          color: 'white',
          fontSize: '24px',
          margin: 0,
          zIndex: 1,
        }}
      >
        {card.title}
      </h2>
      <div
         style={{
           display: 'flex',
           flexWrap: isMobile ? 'wrap' : 'nowrap',
           gap: '8px',
           position: 'absolute',
           bottom: isMobile ? '24px' : '40px',
           left: isMobile ? '24px' : '40px',
         }}
       >
         {card.tags.map((tag, tagindex) => (
            <div
                    style={{
                      padding: '12px 16px',
                      border: '1px solid white',
                      borderRadius: '50px',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: 1.5,
                      whiteSpace: 'nowrap',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: 1.5,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tag}
                    </p>
                  </div>
         ))}
      </div>
     
          </div>
          
         
         
        ))}
      </div>

      <div
        className="carousel-content"
        style={{
          display: 'flex',
          transition: 'transform 0.3s ease-in-out',
          transform: `translateX(-${currentIndex * (isMobile ? 100 + 27 / window.innerWidth * 100 : 1136 + 24)}${isMobile ? '%' : 'px'})`, // Muove tutto il gruppo di card

        }}
      >
        {cards.map((card, index) => (
        

         <p style={{ minWidth: isMobile ? '100%' : '1136px',  marginRight: '24px',marginBottom: '24px', // Larghezza fissa per ogni card
         }} className='p-regular'>{card.content}</p>
          
         
         
        ))}
      </div>

      <div
        className="dots"
        style={{
          textAlign: 'center',
          marginTop: '10px',
          height: '60px',
          justifyContent: isMobile ? 'flex-start':'center',
          alignItems: 'center',
          position: 'relative',
          display: 'flex',
          gap: '8px'
        }}
      >
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            style={{
              display: 'inline-block',
              // width: '12px',
              // height: '12px',
              // margin: '0 5px',
              // borderRadius: '50%',
              // backgroundColor: index === currentIndex ? '#fff' : 'rgba(0, 0, 0, 0.5)',
              // cursor: 'pointer',
              // transition: 'background-color 0.3s ease',
              width: isMobile ? '40px' : '56px',
     height: '4px',
     borderRadius: '10px',
     backgroundColor: index === currentIndex ? '#3177E0' : '#CBD0D6',
     cursor: 'pointer',
     transition: 'background-color 0.3s',
            }}
          ></span>
        ))}
        <div style={{position: 'absolute', display: 'flex', justifyContent: 'flex-end', gap: '8px', right: '0'}}>
          <img onClick={()=>{if(currentIndex !== 0) {setCurrentIndex(currentIndex - 1)}}} src={arrowButtonLeft} />
          <img onClick={()=>{if(currentIndex !== 3) {setCurrentIndex(currentIndex + 1)}}} src={arrowButtonRight} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
