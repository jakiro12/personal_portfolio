import { useEffect, useState } from 'react'
import '../app.css'
import { openMediaLinks } from '../custom-funcs/open_links'
export default function CarruselOfCurrentProjects(){
    const [project,setProject]=useState<number>(0)
    const projectsNames=["Listador de tareas para tableros personales de Trello",
                          "Invitacion animada para eventos",
                          "BBVA MVP clon",
                          "SiDCa Aplicacion movil"]
    useEffect(() => {
        const buttons = document.querySelectorAll<HTMLButtonElement>("[data-carousel-button]")        
        buttons.forEach(button => {
          button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
    
            const carousel = button.closest("[data-carousel]")
            if (!carousel) return
    
            const slides = carousel.querySelector<HTMLUListElement>("[data-slides]")
            if (!slides) return
    
            const activeSlide = slides.querySelector<HTMLElement>("[data-active]")
            if (!activeSlide) return
    
            const children = Array.from(slides.children) as HTMLElement[]
            let newIndex = children.indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = children.length - 1
            if (newIndex >= children.length) newIndex = 0
    
            children[newIndex].dataset.active = "true"
            delete activeSlide.dataset.active
            setProject(newIndex)
          })
        })            
        return () => {
          buttons.forEach(button => {
            button.replaceWith(button.cloneNode(true)) 
          })
        }
      }, [])
    return(
        <article className='carrusel_container'>
            <h2>{projectsNames[project]}</h2>
            <main>
                <div className="carousel" data-carousel>
                <button className="carousel-button prev" data-carousel-button="prev">&#10092;</button>
                <button className="carousel-button next" data-carousel-button="next">&#10093;</button>
                <ul data-slides>
                  <li className="slide" data-active 
                    >
                           
                      <picture
                         onClick={(e) => openMediaLinks(e, "https://trello-list-maker.vercel.app/")}
                      >
                        <source media='(min-width:650px)' srcSet='/lista.png'/>
                        <source media='(max-width:600px)' srcSet='/listapk.png'/>
                        <img src="/lista.png" alt="Listador de tares"/>
                      </picture>    
                  </li>
                  <li className="slide" 
                    >                    
                      <picture
                         onClick={(e)=>openMediaLinks(e,"https://mockup-greenplus.vercel.app/")}
                      >
                        <source media='(min-width:650px)' srcSet='/invitacion.png'/>
                        <source media='(max-width:600px)' srcSet='/invitacionpk.png'/>
                        <img src="/invitacion.png" alt="Invitacion a boda"/>
                      </picture>  
                  </li>
                  <li className="slide"
                    >                    
                     <picture
                         onClick={(e)=>openMediaLinks(e,"https://github.com/jakiro12/bbvaappClone")}
                      >
                        <source media='(min-width:650px)' srcSet='/bbvapk.png'/>
                        <source media='(max-width:600px)' srcSet='/bbva.jpg'/>
                        <img src="/bbva.png" alt="Insectos"/>
                      </picture>  
                  </li>
                   <li className="slide"
                    >                    
                     <picture
                         onClick={(e)=>openMediaLinks(e,"https://play.google.com/store/apps/details?id=com.jakiro12.one&hl=es_AR&pli=1")}
                      >
                        <source media='(min-width:650px)' srcSet='/sidcapk.png'/>
                        <source media='(max-width:600px)' srcSet='/sidcap.jpg'/>
                        <img src="/sidcapk.png" alt="Aplicacion movil de Sidca"/>
                      </picture>  
                  </li>
                </ul>
              </div>
            </main>
        </article>
    )
}