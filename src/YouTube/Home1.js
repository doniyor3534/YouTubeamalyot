import React, { useContext, useState } from 'react';
import '../App.css'
import { DataContext } from '../Components/DataContext';
import { Kament, Saitbar } from './All';


const Home1 = () => {

    const { btnmassiv } = useContext(DataContext)
    const { vidiomassiv } = useContext(DataContext)
    const { cardtanla, setCardtanla } = useContext(DataContext)
    const cardopen = (val) => {
        setCardtanla(val)
    }
    const [sub, setSub] = useState(false)

    const [like, setLike] = useState(32)
    const [dezlike, setDezlike] = useState(81)
    const [likelar, setLikelar] = useState(true)
    const [dezlikelar, setDezlikelar] = useState(true)
    const [save, setSave] = useState(true)
    const likefun = () => {
        if (likelar) {
            setLike(like + 1)
            setLikelar(false)
        } else {

        }
    }
    const dezlikefun = () => {
        if (dezlikelar) {
            setDezlike(dezlike + 1)
            setDezlikelar(false)
        } else {

        }
    }
    const { btnkey, setBtnkey } = useContext(DataContext)
    const btnfun = (val) => {
        setSearch(val.key)
        console.log(val.key);
        btnkey ? setBtnkey(true)
            : setBtnkey(false)
    }
    const { setSearch, search } = useContext(DataContext)
    return (
        <div>
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
                    <div className="tabbodycards2">
                        <div className="glavnicards">
                            <div className="glavnicard" key={cardtanla.id}>
                                <video src={cardtanla.img} controls className='vidiog'></video>
                                <div className='glavnilik'>
                                    <a href=".">#Twice</a>
                                    <a href=".">#TasteofLove</a>
                                    <a href="."> #AlcohollFree</a>
                                </div>
                                <h4>{cardtanla.span}</h4>
                                <div className="centercard">
                                    <p>{cardtanla.p2}{cardtanla.p}</p>
                                    <div className="dflex">
                                        <button onClick={likefun}> <img src="./img/like1.svg" alt="" /><h3 className='like'> {like} </h3>  M..</button>
                                        <button onClick={dezlikefun}> <img src="./img/like2.svg" alt="" /> <h3 className="like">{dezlike}</h3> K..</button>
                                        <button > <img src="./img/share.svg" alt="" /> SHARE</button>
                                        <button onClick={() => setSave(!save)}> <img src="./img/save.svg" alt="" /> {save ? 'SAVE' : <img src='./img/atmetka.png' className='iconsave' alt='djdj' />}</button>
                                        <button > <img src="./img/uchnuqta.svg" alt="" /> </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="subscript">
                                    <div className="dflex">
                                        <img src={cardtanla.imgmini} alt="" />
                                        <span>
                                            <h4>{cardtanla.p}</h4>
                                            <p>21.3M subscribers</p>
                                        </span>
                                    </div>
                                    <button className={sub ? 'SUBSCRIBEbtn active' : 'SUBSCRIBEbtn '} onClick={() => setSub(!sub)}>SUBSCRIBE <img src="./img/qongiroqcha.png" alt="" className={sub ? 'subimg active' : 'subimg'} /></button>
                                </div>
                                <Kament />
                            </div>
                        </div>
                        <div className="kichkinacard">
                            {
                                search === '' ?
                                    vidiomassiv.map((val) => (
                                        <div className="tabbodycard2 " onClick={e => cardopen(val)} key={val.id}>
                                            <video src={val.img} controls className='vidiogg'></video>
                                            <div className="tabbodycard_footer2">
                                                <img src={val.imgmini} alt="" />
                                                <div>
                                                    <span>{val.span}</span>
                                                    <p>{val.p}</p>
                                                    <p>{val.p2}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : vidiomassiv.filter((val) => {
                                        return val.p.toLowerCase().indexOf(search.toLowerCase()) !== -1
                                    }).length > 0 ? vidiomassiv.filter((val) => {
                                        return val.p.toLowerCase().indexOf(search.toLowerCase()) !== -1
                                    }).map((val) => (
                                        <div className="tabbodycard2 " onClick={e => cardopen(val)} key={val.id}>
                                            <video src={val.img} controls className='vidiogg'></video>
                                            <div className="tabbodycard_footer2">
                                                <img src={val.imgmini} alt="" />
                                                <div>
                                                    <span>{val.span}</span>
                                                    <p>{val.p}</p>
                                                    <p>{val.p2}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )) : 'topilmadi'
                   }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home1;