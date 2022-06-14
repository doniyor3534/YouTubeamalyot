import React, { useContext } from 'react';
import '../App.css';
import { DataContext } from '../Components/DataContext';
import { Iconvidio, Mikrafon, Navimgfun, Qongiroqchacard } from './All';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const path = useNavigate()
    const { saitbar, setSaitbar, navimginfofun, search,setSearch, setNavimginfofun, mikrafon,iconvidio, setIconvidio ,setMikrafon, qongiroqfun, setQongiroqfun } = useContext(DataContext)
    const saitbarfun = () => {
        setSaitbar(!saitbar)
    }
    // const {  } = useContext(DataContext)
    const navimgfun = () => {
        setNavimginfofun(!navimginfofun)
    }
    // const {  } = useContext(DataContext)
    const mikrafonopen = () => {
        setMikrafon(!mikrafon)
    }
    // const { } = useContext(DataContext)
    const qongiroqopen = () => {
        setQongiroqfun(!qongiroqfun)
    }
    // const { } = useContext(DataContext)
    const iconvidioopen = () => {
        setIconvidio(!iconvidio)
    }
    // const {  } = useContext(DataContext)
    const searchoff = () => {
        setSearch('')

    }
    const { setHomeopen } = useContext(DataContext)
    const homefun = () => {
        setHomeopen(true)
        path("/")
    }
    const { navactive, setNavactive } = useContext(DataContext);
    const navburger = () => {
        setNavactive(!navactive)
    }
    const inputfun = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div className='navaitbar'>
            <nav className={navactive ? "active" : ""}>
                <div className="navbrend">
                    <button onClick={saitbarfun}><img src="./img/menu.svg" alt="" /></button>
                    <button onClick={homefun}><img src="./img/logo.png" alt="" /></button>
                    <button className='menuburger' onClick={navburger}>Menu</button>
                </div>
                <div className="dflex">
                    <div className="inputgroup">
                        <input type="search" placeholder='search' className='search' value={search} onChange={inputfun} />
                        <button onClick={searchoff}><img src="./img/lupa.svg" alt="" /></button>
                    </div>
                    <button className='mikrafonbtn' onClick={mikrafonopen}><img src="./img/mikrafon.svg" alt="" /></button>
                </div>
                {/* ///////////////// */}
                <div className="dflex navrightbtns">
                    <button onClick={iconvidioopen}><img src="./img/icon.svg" alt="" /></button>
                    <button><img src="./img/icon (1).svg" alt="" /></button>
                    <button onClick={qongiroqopen}><img src="./img/icon (2).svg" alt="" /></button>
                    <button className='navimgbtn' onClick={navimgfun}><img src="./img/navimg.svg" alt="" />  </button>
                </div>
            </nav>
            <Navimgfun />
            <Mikrafon />
            <Qongiroqchacard />
            <Iconvidio />
        </div>
    );
};

export default Navbar;