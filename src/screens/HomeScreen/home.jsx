import './home.css'
import React, { useRef, useEffect, useState } from 'react';

export const Home = () =>{

    const headerRef = useRef();
    const [currentSection, setCurrentSection] = useState('');
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let current = '';
        const limiteScroll = 80;
  
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            const marginOfError = 100; // Experimente diferentes valores
            if (window.scrollY >= sectionTop - marginOfError && window.scrollY < sectionTop + sectionHeight - marginOfError) {
              current = section.getAttribute('id');
          }
        });
  
        setCurrentSection(current);
  
        const header = headerRef.current;
        if (header) {
          header.classList.toggle('ativo', window.scrollY > limiteScroll);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const hamburguer = document.querySelector(".hamburguer");
      const navMenu = document.querySelector(".nav-menu");
  
      const handleHamburguerClick = () => {
        hamburguer.classList.toggle("active");
        navMenu.classList.toggle("active");
      };
  
      if (hamburguer) {
        hamburguer.addEventListener("click", handleHamburguerClick);
      }
  
      return () => {
        if (hamburguer) {
          hamburguer.removeEventListener("click", handleHamburguerClick);
        }
      };
    }, []);

    return(
        <>
        <section className="home" id='home'>
            <div className="container-home">
                <header ref={headerRef}>
                    <ul className='nav-menu'>
                        <li><a href="#" className={currentSection === 'home' ? 'ative' : ''}>Home</a></li>
                        <li><a href="#about" className={currentSection === 'about' ? 'ative' : ''}>About</a></li>
                        <li><a href="#service" className={currentSection === 'service' ? 'ative' : ''}>Service</a></li>
                        <li><a href="#exemplo" className={currentSection === 'exemplo' ? 'ative' : ''}>Exemplo</a></li>
                        <li><a href="#blog" className={currentSection === 'blog' ? 'ative' : ''}>Blog</a></li>
                    </ul>

                    <div className="container-hamburguer">
          <div className="hamburguer">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
                </header>

                <div className="content-home">
                    <h1>Elevate Your <br />Cybersecurity Strategy</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    <br /> <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ducimus autem animi necessitatibus minima obcaecati accusamus corrupti sequi? <br /> Veniam eum sapiente cumque explicabo?  Officiis delectus dignissimos beatae illum qui a!
                    Veniam eum sapiente cumque explicabo? <br /> Officiis delectus dignissimos beatae illum qui a! 
                    Veniam eum sapiente cumque explicabo? Officiis delectus dignissimos beatae illum qui a! <br />
                    Veniam eum sapiente cumque explicabo? Officiis delectus dignissimos beatae illum qui a!
                    v
                 
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}