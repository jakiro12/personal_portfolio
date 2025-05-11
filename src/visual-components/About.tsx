import React from 'react'
import '../app.css'
interface AboutProps{
    open:boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const AboutMe : React.FC<AboutProps> = ({open,setOpen })=>{
    return(
        <div className='box_about_me' style={{display: open ? 'block' : 'none'}}>
            <div>
                <p className='box_about_me_text'>
                    Desarrollador frontend con más de 2 años de experiencia en React y React Native creando interfaces de usuario interactivas y responsivas, colaborando con diseñadores y desarrolladores backend para crear soluciones integradas y fluidas. Altamente comprometido con las tareas asignadas y comunicacion con el equipo.
                </p>
                <button
                className='box_about_me_close_btn'
                onClick={()=>setOpen(false)}
                >X</button>
            </div>            
        </div>
    )
}
export default AboutMe