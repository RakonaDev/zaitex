import '../css/Header.css'

import logo from '../img/zaitex-logo.png'
import logoActivo from '../img/zaitex-logoActivo.png'

import casaActivo from '../img/home-activo.svg'
import casaDesactivado from '../img/home-desactivado.svg'

import nosotrosActivo from '../img/nosotros-activo.svg'
import nosotrosDesactivado from '../img/nosotros-desactivado.svg'

import cursoActivo from '../img/cursos-activo.svg'
import cursoDesactivado from '../img/cursos-desactivado.svg'

import tallerActivo from '../img/talleres-activo.svg'
import tallerDesactivado from '../img/talleres-desactivado.svg'

import bibliotecaActivo from '../img/biblioteca-activo.svg'
import bibliotecaDesactivado from '../img/biblioteca-desactivado.svg'
import { Link, NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'

export function Header(){

    const location = useLocation();

    const [verHeader, setVerHeader] = useState(true)

    const [imageUrl, setImageUrl] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    /* Esconde el header cuando entre a login */
    useEffect(() => {
        if(location.pathname.includes('/login')){
            setVerHeader(false)
        }
        else{
            setVerHeader(true)
        }
    },[location])

    /* Verifica si no esta en scroll 0 */ 
    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        }
    
        window.addEventListener('scroll', handleScroll);
        
        // Limpia el evento de desplazamiento cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Actualiza el src de la imagen cuando la ubicación cambia
        if(location.pathname == '/nosotros'){
            setImageUrl('nosotros')
        }
        else if (location.pathname == '/'){
            setImageUrl('inicio')
        }
        else if (location.pathname.includes('cursos')){
            setImageUrl('cursos')
        }
        else if (location.pathname.includes('talleres')){
            setImageUrl('talleres')
        }
        else if (location.pathname == '/carreras-cortas'){
            setImageUrl('biblioteca')
        }
        
        /* Añadir nuevo path siempre que quieras que no vaya para arriba del todo */ 
        if(location.pathname == '/cursos/ilustracion'
            || location.pathname == '/cursos/software' 
            || location.pathname == '/cursos/especialidades'){
            return
        }else{
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

    },[location]);

    window.addEventListener('DOMContentLoaded', function(){

        const list = document.querySelectorAll('.list')

        function activarLink(){
            list.forEach((item) => {
                item.classList.remove("active")
                console.log(this)
                this.classList.add("active")
            })
        }

        list.forEach((item)=>{
            item.addEventListener('click', activarLink())
        })

    })

    return (
        
        <header className={isScrolled ? "header-container top" : "header-container"} id={verHeader ? "header" : "esconder"}>
            <div className='cubridor-header'></div>
            { /* Aqui va el logo de la pagina */ }
            <Link to='/' className="logo-container">
                <img src={isScrolled ? logoActivo : logo} alt="zaitex-logo" className="logo-zaitex"/>
            </Link>
            <nav className='nav-header'>
                {/* Lista de iconos */}
                <ul className="nav-container">
                    
                    <NavLink to='/' className="home-btn list">
                        <img src={imageUrl == 'inicio' ? casaActivo : casaDesactivado} className='logo-inicio' alt="home" />
                        <span className="txtInicio">Inicio</span>
                    </NavLink>
                    
                    <NavLink to='/nosotros' className="about-btn list">
                        <img src={imageUrl == 'nosotros' ? nosotrosActivo : nosotrosDesactivado} className="logo-nosotros" alt="nosotros" />
                        <span className="txtNosotros">Nosotros</span>
                    </NavLink>
                    <NavLink to='/cursos' className="courses-btn list">
                        <img src={imageUrl == 'cursos' ? cursoActivo : cursoDesactivado} className='logo-cursos' alt="cursos" />
                        <span className="txtCursos">Cursos</span>
                    </NavLink>
                    <NavLink to='/talleres' className="talleres-btn list">
                        <img src={imageUrl == 'talleres' ? tallerActivo : tallerDesactivado} className='logo-talleres' alt="talleres"/>
                        <span className="txtTalleres">Talleres</span>
                    </NavLink>
                    <NavLink to='/carreras-cortas' className="biblioteca-btn list">
                        <img src={imageUrl == 'biblioteca' ? bibliotecaActivo : bibliotecaDesactivado} className='logo-carreras' alt="bilbioteca" />
                        <span className="txtBiblioteca">Carreras Cortas</span>
                    </NavLink>

                    <div className='circulo'></div>
                    <div className='luna'></div>
                </ul>
            </nav>
        </header>
    )

}
