import { useEffect, useRef, useState } from 'react'
import './app.css'
import { openMediaLinks } from './custom-funcs/open_links'
import CarruselOfCurrentProjects from './visual-components/Carrusel'
import AboutMe from './visual-components/About'

function App() {
  const [openAbout,setOpenAbout]=useState<boolean>(false)
  const deploys=useRef<null>(null)

  const clients : number[]=[1,2,3]
  const scrollWebsite=(elementRef : any)=>{
    window.scrollTo({
        top:elementRef.current.offsetTop,
        behavior:'smooth',
    })
}
  useEffect(()=>{
    if(openAbout){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }
    return()=>{
      document.body.style.overflow='auto'
    }
  },[openAbout])
  return (
    <div className='container-page_assign'>
      <section className='first_presentation'>
        <nav>
          <div className='logos_medias'>
            <div className='media_name'>
              <span className='photo_me'></span>
              <span className='dev_name'>Lautaro Carreño</span>
              <span className='check_name'>&#x2713;</span>
              </div>
            <span className='media_logo'
              onClick={(e) => openMediaLinks(e, "https://www.linkedin.com/in/lautaro-carre%C3%B1o-9b9248b1/")}
              ></span>
            <span className='media_logo'
              onClick={(e) => openMediaLinks(e, "https://github.com/jakiro12")}            
            ></span>
          </div>
          <div className='items_funcs'>
            <span
              onClick={()=>scrollWebsite(deploys)}
            >Works</span>
            <span
              onClick={()=>setOpenAbout(!openAbout)}
            >About</span>
            <span>Resume</span>
          </div>
        </nav>
        <aside className='box_about_info'>
          <div className='photos_trusted'>
            <div className='box_photos_clients'>              
              {clients.map((e,i)=>
                <span                   
                  key={i} className='p_1' style={{left:`${3 * i}0px`,backgroundImage:`url(/person${e}.jpg)`,backgroundSize: 'cover',backgroundPosition:'center'}}></span>
              )}              
            </div>
            <p className='trust_by'>
              Trusted by + 20 Clients
            </p>
          </div>
          <div className='big_title_about'>
            Soluciones simples para desafíos grandes.
          </div>
          <div className='info_about'>
            <p>
            Me enfoco en transformar tareas complejas en experiencias simples y eficientes, siempre pensando en la comodidad del usuario final.
            </p>
          </div>
          <div className='btn_get'>
            <button className='btn_get-call'>Book a call</button>
            <button className='btn_get-wsapp'
              onClick={(e)=>openMediaLinks(e,'https://api.whatsapp.com/send?phone=+5493424420130')}
            >
              <img src='../public/wsp.png' style={{width:20,height:20,objectFit:'cover'}}/>
              Chat</button>
          </div>
        </aside>
        <AboutMe open={openAbout} setOpen={setOpenAbout}/>
      </section>
      <section className='second_presentation' ref={deploys}>
              <CarruselOfCurrentProjects/>
      </section>
    </div>
  )
}

export default App
