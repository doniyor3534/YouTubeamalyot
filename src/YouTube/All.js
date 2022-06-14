import React,{useContext,useState} from "react";
import '../App.css'
import { DataContext } from "../Components/DataContext";

export const Saitbar =()=>{
      const {saitbar}=useContext(DataContext)

   
      return(
          <>
                <div className={saitbar ? 'saitbar active' : "saitbar"}>
            <ul>
                <li><span className='ugolka1'></span>
                    <span className='ugolka2'></span>
                    <a href="."><img src="./img/home.svg" alt="" />  Home</a></li>
                <li><span className='ugolka1'></span>
                    <span className='ugolka2'></span>
                    <a href="."><img src="./img/dddd.svg" alt="" />  Explore</a></li>
                <li><span className='ugolka1'></span>
                    <span className='ugolka2'></span>
                    <a href="."><img src="./img/subscription.svg" alt="" />  Subscriptions</a></li>
                <li><span className='ugolka1'></span>
                    <span className='ugolka2'></span>
                    <a href="."><img src="./img/library.svg" alt="" />  Library</a></li>
                <li><span className='ugolka1'></span>
                    <span className='ugolka2'></span>
                    <a href="."><img src="./img/history.svg" alt="" />  History</a></li>
                <li><span className='ugolka1'></span>
                    <span className='ugolka2'></span>
                    <a href="."><img src="./img/Group.svg" alt="" />  Your Videos</a></li>
                <li><span className='ugolka1'></span>
                    <span className='ugolka2'></span>
                    <a href="."><img src="./img/examply.svg" alt="" />  Watch Later</a></li>
                <li><span className='ugolka1'></span>
                    <span className='ugolka2'></span>
                    <a href="."><img src="./img/Vector.svg" alt="" />  Liked Videos</a></li>
            </ul>
        </div>
          </>
      )
}


// ///////////

export const Iconvidio =()=>{
    const {iconvidio}=useContext(DataContext)
    return(
        <>
           <div className={iconvidio ? "iconvidiocard active" :"iconvidiocard"}>
                     <ul>
                         <li> <a href="."> <img src="./img/iconvidio.svg" alt="" />YouTube TV</a></li><hr />
                         <li> <a href="."> <img src="./img/iconvidio1.svg" alt="" />YouTube Music   </a></li>
                         <li> <a href="."> <img src="./img/iconvidio2.svg" alt="" />YouTube Kids   </a></li><hr />
                         <li> <a href="."> <img src="./img/iconvidio3.svg" alt="" />Creators Academy   </a></li>
                         <li> <a href="."> <img src="./img/iconvidio4.svg" alt="" />YouTube for Artists  </a></li>
                     </ul>
                </div>
        </>
    )
}


// ////////

export const Qongiroqchacard =()=>{
    const {qongiroqfun}=useContext(DataContext)
    return(
        <>
           <div className={qongiroqfun ? "qongiroqchacard active" :"qongiroqchacard"}>
                    <div className="qongiroqcardheader">
                        <h1>Notifications</h1>
                        <button className='qongiroqcardheaderbtn'><img src="./img/qongiroqchaicon.svg" alt="" /></button>
                    </div>
                    <div className="qongiroqcardbody">
                        <img src="./img/qongiroqchabg.png" alt="" />
                        <h4> Your notifications live here</h4>
                        <p>Subscribe to your favourite channels to recieve notifications about their latest videos</p>
                    </div>
                </div>
        </>
    )
}
// /////////

export const Mikrafon=()=>{
    const {mikrafon,setMikrafon}=useContext(DataContext)
    const mikrafonopen=()=>{
        setMikrafon(!mikrafon)
    }
    return(
        <>
            <div className={mikrafon ? "mikrafoncard active" :"mikrafoncard"}>
                    <button className="closemikrafon" onClick={mikrafonopen}>x</button>
                    <h1>Listening...</h1>
                    <div className="mikrafonbg">
                        <img src="./img/mikrafonimg.svg" alt="" className='mikrafonimg' />
                    </div>
                </div>
        </>
    )
}
// /////////

export const Navimgfun=()=>{
const {navimginfofun}=useContext(DataContext)
const {root,setRoot}=useContext(DataContext);
const darkfun=()=>{
    setRoot(!root)
}
    return(
        <>
            <div className={navimginfofun ? "navimgbtninfo active" : "navimgbtninfo"}>
                            <div className="dflex">
                                <img src="./img/navimg.svg" alt="" />
                                <div>
                                    <h3>Shruti Bhutda</h3>
                                    <span>Manage Your Google Account </span>
                                </div>
                            </div>
                            <ul>
                                <li><img src="./img/navimginfo/Vector.svg" alt="" />  Your channel</li>
                                <li><img src="./img/navimginfo/Vector (1).svg" alt="" /> Purchases and memberships</li>
                                <li><img src="./img/navimginfo/Vector (2).svg" alt="" />  YouTube Studio  </li>
                                <li><img src="./img/navimginfo/Vector (3).svg" alt="" />Switch account</li>
                                <li><img src="./img/navimginfo/Vector (4).svg" alt="" /> Sign out</li>
                            </ul>
                            <hr />
                            <ul>
                                <li onClick={darkfun}> <img src="./img/navimginfo/Vector (5).svg" alt="" />  Appearance: Dark</li>
                                <li> <img src="./img/navimginfo/Group.svg" alt="" /> Language: British English</li>
                                <li> <img src="./img/navimginfo/Vector (6).svg" alt="" /> Location: India</li>
                                <li> <img src="./img/navimginfo/Vector (7).svg" alt="" /> Settings</li>
                                <li> <img src="./img/navimginfo/Vector (8).svg" alt="" /> Your data in YouTube</li>
                                <li> <img src="./img/navimginfo/Vector (9).svg" alt="" /> Help</li>
                                <li> <img src="./img/navimginfo/Vector (10).svg" alt="" /> Send feedback</li>
                                <li> <img src="./img/navimginfo/Vector (11).svg" alt="" /> Keyboard shortcuts</li>
                            </ul>
                            <hr />
                            <button className='navimginfobtnfooter'>Restricted Mode: Off</button>
                        </div>
                  
        </>
    )
}
// ///////


export const Kament=()=>{
    const [input,setInput]=useState({
        img:'./img/kament/avatar.svg',
        h4:'',
        id:null
    }) 
    const {komentcardmassiv,setKomentcardmassiv}=useContext(DataContext)
    const kamentsub=(e)=>{
        e.preventDefault();
        setKomentcardmassiv([...komentcardmassiv,{...input,id:new Date().getTime()}])
        console.log(komentcardmassiv);
        setInput({
            img:'./img/kament/avatar.svg',
            h4:'',
            id:null
        })
    }
    const inputfun=(e)=>{
         setInput({...input,[e.target.name]:e.target.value})
         console.log(input);
    }
   
    const likefun=(id)=>{
        setKomentcardmassiv(komentcardmassiv=>komentcardmassiv.map((val)=> val.id === id && val.like === false ? {...val, likecount:val.likecount +1 ,like:true } : val))

    }
    const dezlikefun=(id)=>{
        setKomentcardmassiv(komentcardmassiv=>komentcardmassiv.map((val)=> val.id === id && val.dezlikee === false? {...val, dezlike:val.dezlike +1 , dezlikee:  true} : val))
    }
    return(
        <>
                           <h4>TWICE “Alochol-Free” M/V</h4>
                            <h4>TWICE The 10th Mini Album ”Taste of Love”</h4>
                            <p>SHOW MORE</p>
                            <hr />
                            <div className="dflexstart">
                            <h4>1,227,877 Comments</h4>
                            <span> <img src="./img/sortby.svg" alt="" /> SORT BY</span>
                            </div>
                        <div className="addcoment">
                            <img src="./img/navimg.svg" alt="" />
                            <form onSubmit={kamentsub}>
                                <input type="text" placeholder='Add a public comment...' name="h4"  value={input.h4} onChange={inputfun}/>
                            </form>
                        </div>
                      {
                          komentcardmassiv.map((val)=>(
                         <>
                            <div className="komentcard" key={val.id}>
                              <img src={val.img} alt="" className="komentcardimg"/>
                                <div>
                                    <h5>Kat Blaque <span>1 Month ago</span></h5>
                                    <h4>{val.h4}</h4>
                                    <div className="dflex">
                                    <button><img src="./img/like1.svg" alt="" onClick={()=>likefun(val.id)} /> {val.likecount} K</button>
                                    <button><img src="./img/like2.svg" alt=""  onClick={()=>dezlikefun(val.id)}/> {val.dezlike} REPLY</button>
                                    </div>
                                    <a href="."> <img src="./img/kament/strelkapas.svg" alt="" /> View 468 replies</a>
                                </div>
                                <button className="komentcardbtn"><img src="./img/kament/Vector.svg" alt="" /></button>
                             </div>
                          </>
                          ))
                          
                      }
        </>
    )
}