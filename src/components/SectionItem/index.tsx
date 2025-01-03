import React, { ReactNode, useState, useRef, useEffect } from 'react';
import showIcon from '../../assets/img/show.svg';
import hideIcon from '../../assets/img/hide.svg';
import imageFullWidth from '../../assets/img/image-full-width.png';
import { gsap } from 'gsap';

interface Props {
  children: ReactNode;
  title: string;
  isMobile: boolean;
}

const SectionItem: React.FC<Props> = ({ children, title, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false); // Stato per il caricamento dell'immagine
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleAccordion = () => {
    if (isOpen) {
      // Animazione di chiusura
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          setIsOpen(false);
        },
      });
    } else {
      // Apertura
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen && contentRef.current ) {
      const contentHeight = contentRef.current.scrollHeight;
      gsap.set(contentRef.current, { height: contentHeight + (isMobile && title === 'Credono in noi' ? 400 : title === 'Contatti' ? 0: 128), opacity: 1 });
      gsap.from(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      });
    } else if (!isOpen && contentRef.current) {
      gsap.set(contentRef.current, { height: 0, opacity: 0 });
    }
  }, [isOpen, imageLoaded]); // Ricalcola l'altezza al caricamento dell'immagine

  // Gestione del caricamento dell'immagine
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section>
      <div style={{ padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', borderTop: '1px solid #798494' }}>
          <h3>{title}</h3>
          <img
            onClick={toggleAccordion}
            src={isOpen ? hideIcon : showIcon}
            alt={isOpen ? 'Nascondi contenuto' : 'Mostra contenuto'}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      
      <div
        ref={contentRef}
        style={{
          overflow: 'hidden',
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
       
          {isOpen && (
            <div style={{ paddingTop: '96px' }}>
              {children}
              {title === 'Chi siamo' && 
                <>
                <img src={imageFullWidth} onLoad={handleImageLoad} style={{ width: '100%', height: isMobile ?  '390px' : '',  objectFit: 'cover', // Imposta l'immagine come cover
    objectPosition: 'center',  }} alt="Section background" />
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end', padding: '48px 24px 0 24px'}}>
                    <p style={{width: isMobile ?  '100%':'50%'}} className='p-small c-gray-4'>Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis. Malesuada odio sollicitudin risus lectus vulputate massa rhoncus. Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis. Malesuada odio sollicitudin risus lectus vulputate massa rhoncus.</p>
                </div>
                </>
              }
            </div>
          )}
        
      </div>
    </section>
  );
};

export default SectionItem;