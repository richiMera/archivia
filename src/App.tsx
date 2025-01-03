import { useState, useEffect, useRef } from 'react';
import dotIcon from '../src/assets/img/dot-icon.svg';
import scrollIcon from '../src/assets/img/scroll-icon.svg';
import scrollIconBig from '../src/assets/img/scroll-icon-big.svg';
import partnerImg from '../src/assets/img/partner.png';
import archiviaSvg from '../src/assets/img/archivia.svg';
import imageFullWidth from '../src/assets/img/image-full-width.png';
import { gsap } from 'gsap';

import './App.css';

import img1 from '../src/assets/img/image_1.png';
import img2 from '../src/assets/img/image_2.png';
import img3 from '../src/assets/img/image_3.png';
import SectionItem from './components/SectionItem';
import Carousel from './components/Carousel';
import {  useMediaQuery } from '@react-hook/media-query';

function App() {
  const images = [img1, img2, img3];
  const trailContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationTimeOut, setAnimationTimeOut] = useState<NodeJS.Timeout | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  console.log('isMobile', isMobile);
  

  /*  const addNewImg = (x: number, y: number) => {
     const img = document.createElement('img');
     img.className = 'trailImg';
     img.style.left = `${x - 75}px`;
     img.style.top = `${y - 100}px`;
     img.style.position = 'absolute';
     img.style.pointerEvents = 'none';
 
     img.src = images[currentImageIndex];
     setCurrentImageIndex((currentImageIndex + 1) % images.length);
 
     if (trailContainerRef.current) {
       trailContainerRef.current.appendChild(img);
     }
     manageImgLimit();
   };
 
   const manageImgLimit = () => {
     if (trailContainerRef.current) {
       while (trailContainerRef.current.children.length > 7) {
         const firstChild = trailContainerRef.current.firstChild as Node | null;
         if (firstChild) {
           trailContainerRef.current.removeChild(firstChild);
         }
       }
     }
   };
 
   const startAnimation = () => {
     if (currentlyPlaying || !trailContainerRef.current || trailContainerRef.current.children.length === 0) return;
     setCurrentlyPlaying(true);
 
     gsap.to('.trailImg', {
       y: 1000,
       scale: 0.5,
       opacity: 0,
       duration: 0.5,
       stagger: 0.025,
       onComplete: function () {
         this.targets().forEach((item: HTMLElement) => {
           if (item.parentNode) {
             item.parentNode.removeChild(item);
           }
         });
         setCurrentlyPlaying(false);
       },
     });
   };
 
   const handleMouseMove = (event: React.MouseEvent) => {
     clearTimeout(animationTimeOut as NodeJS.Timeout);
     addNewImg(event.pageX, event.pageY);
     setAnimationTimeOut(setTimeout(startAnimation, 100));
   };
  */
  return (
    <>
      <div className="container" style={{ height: '100svh', padding: '24px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Archivia</h3>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
            {!isMobile && <img style={{ marginRight: '4px' }} src={dotIcon} />}
            <p className='caption c-black'>{ !isMobile && 'Hai un progetto in mente?'} <span className='c-blue'>Contattaci</span></p>
          </div>
        </header>
        <div
          /* onMouseMove={handleMouseMove} */
          ref={trailContainerRef}
          className="trailContainer"
          style={{
            display: 'flex',
            height: 'calc(100% - 24px)',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gap: '24px',
            zIndex: '2',
          }}
        >
          <div style={{ width: '80%' }}>
            <h1>
              Valorizza il presente per conservare il <span className="c-blue">futuro</span>.
            </h1>
          </div>
          {isMobile ? <div style={{  }}>
            
            <p className="p-regular c-black mb-48">
              Archivia si occupa della gestione degli archivi per enti pubblici ed aziende.
            </p> 
              <p className="caption-small c-gray-4">Scorri per scoprire di più</p>
              <img src={scrollIcon} alt="Scroll Icon" />
            </div>
            : <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', width: '80%' }}>
              <p className="caption-small c-gray-4">Scorri per scoprire di più</p>
              <img src={scrollIcon} alt="Scroll Icon" />
            </div>
            <p className="p-regular c-black">
              Archivia si occupa della gestione degli archivi per enti pubblici ed aziende.
            </p>
          </div>}
        </div>
      </div>
      <div style={{ padding: '24px 0' }}>
        <SectionItem isMobile={isMobile } title='Chi siamo'>
          <div style={{ padding: '24px' }}>
            <p className='p-extra-large c-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos praesentium iusto corporis, quibusdam possimus quis natus quia. Asperiores ex officia nulla. Minima neque, optio ipsum ab esse reprehenderit omnis voluptates!</p>
            <div className='c-gray-4' style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '24px', padding: '24px 0' }}>
              <p className='p-small'>Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis. Malesuada odio sollicitudin risus lectus vulputate massa rhoncus. Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis. Malesuada odio sollicitudin risus lectus vulputate massa rhoncus.</p>
              <p className='p-small'>Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis. Malesuada odio sollicitudin risus lectus vulputate massa rhoncus. Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis. Malesuada odio sollicitudin risus lectus vulputate massa rhoncus.</p>
            </div>
          </div>

        </SectionItem>
        <SectionItem isMobile={isMobile} title='Cosa facciamo'>
          <div style={{ padding: '24px' }}>
            <p style={{ width: isMobile ? '100%' :'80%' }} className='p-large c-black mb-48'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos praesentium iusto corporis, quibusdam possimus quis natus quia. Asperiores ex officia nulla. Minima neque, optio ipsum ab esse reprehenderit omnis voluptates!</p>
            <Carousel isMobile={isMobile} />

          </div>
        </SectionItem>
        <SectionItem isMobile={isMobile} title='Credono in noi'>
          <div style={{ padding: '24px' }}>
            <p style={{width: isMobile ? '100%' :'80%' }} className='p-large c-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos praesentium iusto corporis, quibusdam possimus quis natus quia. Asperiores ex officia nulla. Minima neque, optio ipsum ab esse reprehenderit omnis voluptates!</p>
            <div style={{ display: 'flex', flexWrap: isMobile ? 'wrap' : 'nowrap', alignItems: 'center', justifyContent: 'space-between', padding: '128px 0' }}>
              <img style={{marginBottom: isMobile ? '120px' : ''}} src={partnerImg} />
              <img style={{marginBottom: isMobile ? '120px' : ''}} src={partnerImg} />
              <img style={{marginBottom: isMobile ? '120px' : ''}} src={partnerImg} />
              <img style={{marginBottom: isMobile ? '120px' : ''}} src={partnerImg} />
              <img src={partnerImg} />
              <img src={partnerImg} />
            </div>
          </div>
        </SectionItem>
        <SectionItem isMobile={isMobile} title='Contatti'>
          <div style={{ padding: '96px 24px 48px 24px', display: 'flex', gap: isMobile ? '24px' : '', flexDirection: isMobile ? 'column' : 'row', flexWrap: 'nowrap', alignItems: isMobile ? '' : 'flex-end', justifyContent: 'space-between' }}>
            <p className='p-large c-black'>Creiamo qualcosa di bello assieme</p>
            <h2 className='c-black'>info@archivia.eu</h2>
          </div>
        </SectionItem>
      </div>
      <footer style={{ backgroundColor: '#3177E0' }}>
       {isMobile ?  <div style={{ padding: '24px 24px 0 24px', marginBottom: '128px' }}>
          <p className='caption-small c-light-blue mb-48'>Archivia ©2024 Tutti i diritti riservati</p>
         <div style={{display: 'flex'}}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
              <p className='caption-small c-light-blue'>Social</p>
              <a href='https://it.linkedin.com/company/archivia-eu?trk=public_profile_topcard-current-company' target='blank' className='p-small c-light-blue pointer'>Linkedin</a>
              <a href='https://www.instagram.com/a_r_c_h_i_v_i_a/' target='blank' className='p-small c-light-blue pointer'>Instagram</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '50%' }}>
              <p className='caption-small c-light-blue'>Design</p>
              <a href='https://andreadominici.com' target='blank' className='p-small c-light-blue pointer'>andrea dominici</a>
            </div>
         </div>
        </div> :  <div style={{ padding: '24px 24px 0 24px', display: 'flex', justifyContent: 'space-between', marginBottom: '128px' }}>
          <p className='caption-small c-light-blue'>Archivia ©2024 Tutti i diritti riservati</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p className='caption-small c-light-blue'>Social</p>
            <a href='https://it.linkedin.com/company/archivia-eu?trk=public_profile_topcard-current-company' target='blank' className='p-small c-light-blue pointer'>Linkedin</a>
            <a href='https://www.instagram.com/a_r_c_h_i_v_i_a/' target='blank' className='p-small c-light-blue pointer'>Instagram</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p className='caption-small c-light-blue'>Design</p>
            <a href='https://andreadominici.com' target='blank' className='p-small c-light-blue pointer'>andrea dominici</a>
          </div>
        </div>}
        <img style={{ width: '100%' }} src={archiviaSvg} />
        <div style={{ display: 'flex', flexWrap: 'nowrap', marginTop: '-9px', backgroundColor: 'white' }}>
          {Array.from({ length: isMobile ? 6 : 12 }).map((_, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#3177E0',
                width: isMobile ? 'calc(100% / 6)' : 'calc(100% / 12)',
                height: isMobile ? '185px' : '410px',
                borderLeft: '1px solid #DFE7F2',
                borderRight: '1px solid #DFE7F2',
                borderTop: '2px solid #DFE7F2',
                borderBottom: '2px solid #DFE7F2',
                padding: isMobile ? '0 0 24px 0' : '0 24px 48px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: isMobile ? 'center' : '',
                boxSizing: 'border-box',
                transition: 'transform 0.3s ease-out', // Aggiunge una transizione fluida
                cursor: 'pointer', // Cambia il cursore per indicare interattività
              }}
              onMouseEnter={(e) => {
                const currentTarget = e.currentTarget as HTMLDivElement;
                currentTarget.style.transform = 'translateY(-48px)';
                const img = currentTarget.querySelector('img');
                if (img) img.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const currentTarget = e.currentTarget as HTMLDivElement;
                currentTarget.style.transform = 'translateY(0)';
                const img = currentTarget.querySelector('img');
                if (img) img.style.opacity = '0';
              }}
              onClick={() => {
                // Effettua uno scroll verso la cima della pagina
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth', // Abilita lo scroll fluido
                });
              }}
            >
              <div
                style={{
                  border: '1px solid #DFE7F2', // Simula un bordo interno anche per il cerchio
                  borderRadius: '50%',
                  aspectRatio: '1 / 1',
                  padding: isMobile ? '16px' : '',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >

                <img
                  style={{
                    opacity:  isMobile ? '1' : '0',
                    width: isMobile ?  '16px' : '',
                    transition: 'opacity 0.3s ease-out', // Transizione graduale per l'opacity
                  }}
                  src={scrollIconBig}
                />
              </div>
            </div>
          ))}
        </div>
      </footer>
    </>

  );
}

export default App;