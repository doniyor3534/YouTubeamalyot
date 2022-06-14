import React, { useContext } from 'react';
import '../App.css'
import { DataContext } from '../Components/DataContext';
import { Saitbar } from './All';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const path = useNavigate()
    const { btnmassiv } = useContext(DataContext)
    const { vidiomassiv } = useContext(DataContext)
    const { search, setSearch } = useContext(DataContext)
    const { homeopen, setHomeopen } = useContext(DataContext)
    const homefun = (val) => {
        setHomeopen(!homeopen)
        cardopen(val)
        path('/page2')
    }


    const { setCardtanla, cardtanla } = useContext(DataContext)
    const cardopen = (val) => {
        setCardtanla(val)
        console.log(cardtanla);
    }

    const { btnkey, setBtnkey } = useContext(DataContext)
    const btnfun = (val) => {
        setSearch(val.key)
        console.log(val.key);
        btnkey ? setBtnkey(true)
            : setBtnkey(false)
    }


    return (
        <>


            <div className='home'>
                <Saitbar />
                <div className="tabbody">
                    <div className="tabbtnss">
                        <div className="tabbtns">
                            {
                                btnmassiv.map((val) => (
                                    <button className='tabbtn' key={val.id} onClick={e => btnfun(val)}>{val.name}</button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="tabbodycards">
                        {
                            search === '' ?
                                vidiomassiv.map((val) => (
                                    <div className="tabbodycard" key={val.id} onClick={() => homefun(val)}>
                                        <video src={val.img} controls className='vidio'></video>
                                        <div className="tabbodycard_footer">
                                            <img src={val.imgmini} alt="" />
                                            <div>
                                                <span>{val.span}</span>
                                                <p>{val.p}</p>
                                                <p>{val.p2}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                : <>
                                    {
                                        btnkey ?
                                            vidiomassiv.filter((item) => {
                                                return item.p.toLowerCase().indexOf(search.toLowerCase()) !== -1
                                            }).length > 0 ?
                                                vidiomassiv.filter((item) => {
                                                    return item.p.toLowerCase().indexOf(search.toLowerCase()) !== -1
                                                }).map((val) => (
                                                    <div className="tabbodycard" key={val.id} onClick={e => homefun(val)}>
                                                        <video src={val.img} controls className='vidio'></video>
                                                        <div className="tabbodycard_footer">
                                                            <img src={val.imgmini} alt="" />
                                                            <div>
                                                                <span>{val.span}</span>
                                                                <p>{val.p}</p>
                                                                <p>{val.p2}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                                : <div className="errorcard">
                                                    <h1>Topilmadi</h1>
                                                    <img src="./img/blackcat.gif" alt="" />
                                                </div>
                                            : vidiomassiv.filter((itemm) => {
                                                return itemm.key.toLowerCase().indexOf(search.toLowerCase()) !== -1
                                            }).length > 0 ?
                                                vidiomassiv.filter((itemm) => {
                                                    return itemm.key.toLowerCase().indexOf(search.toLowerCase()) !== -1
                                                }).map((val) => (
                                                    <div className="tabbodycard" key={val.id} onClick={e => homefun(val)}>
                                                        <video src={val.img} controls className='vidio'></video>
                                                        <div className="tabbodycard_footer">
                                                            <img src={val.imgmini} alt="" />
                                                            <div>
                                                                <span>{val.span}</span>
                                                                <p>{val.p}</p>
                                                                <p>{val.p2}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                                : <div className="errorcard">
                                                    <h1>Topilmadi</h1>
                                                    <img src="./img/blackcat.gif" alt="" />
                                                </div>
                                    }

                                </>
                        }
                    </div>
                </div>
            </div>

        </>

    );

};

export default Home;