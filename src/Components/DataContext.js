
import React, { useState } from "react";

export const DataContext = React.createContext();

const Saitbar = ({ children }) => {
    const [saitbar, setSaitbar] = useState(false)
    const [iconvidio, setIconvidio] = useState(false)
    const [qongiroqfun, setQongiroqfun] = useState(false)
    const [mikrafon, setMikrafon] = useState(true)
    const [navimginfofun, setNavimginfofun] = useState(false)
    const vidiomassiv = [
        {
            id: 1,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar.svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'JYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 2,
            key: 'All',
            img: './img/vidio5.MOV',
            imgmini: './img/home/avatar (1).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'rYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 3,
            key: 'All',
            img: './img/vidio2.mp4',
            imgmini: './img/home/avatar (2).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'yYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 4,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (3).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'sYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 5,
            key: 'All',
            img: './img/vidio3.mp4',
            imgmini: './img/home/avatar (4).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'gYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 6,
            key: 'All',
            img: './img/vidio3.mp4',
            imgmini: './img/home/avatar (5).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'bYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 7,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (6).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'cYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 8,
            key: 'All',
            img: './img/vidio5.MOV',
            imgmini: './img/home/avatar (7).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'nYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 9,
            key: 'All',
            img: './img/vidio4.mp4',
            imgmini: './img/home/avatar (4).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'mYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 10,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (3).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'xYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 11,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (7).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'jYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 12,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (1).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'lYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 13,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (2).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'dYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 14,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (6).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'hYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 15,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (7).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'vYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 16,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (5).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'aYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 17,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (5).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'zYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 18,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (5).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'fYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 19,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (5).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'gYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 20,
            key: 'All',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (5).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'iYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 21,
            key: 'UI/UX',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (5).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'oYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
        {
            id: 22,
            key: 'User Interface design',
            img: './img/vidio.MOV',
            imgmini: './img/home/avatar (5).svg',
            span: 'TWICE "Alcohol-Free" M/V  ',
            p: 'wYP Entertainment',
            p2: '130M views • 1 Month ago'
        },
    ]
    const btnmassiv = [
        { id: 1, key: 'All', name: 'All' },
        { id: 2, key: 'User Interface design', name: 'User Interface design' },
        { id: 3, key: 'UI/UX', name: 'UI/UX' },
        { id: 4, key: 'Logos', name: 'Logos' },
        { id: 5, key: 'Computer science', name: 'Computer science' },
        { id: 6, key: 'Sales', name: 'Sales' },
        { id: 7, key: 'Music', name: 'Music' },
        { id: 8, key: 'Live', name: 'Live' },
        { id: 9, key: 'Stock Market', name: 'Stock Market' },
        { id: 0, key: 'Mixes', name: 'Mixes' },
        { id: 11, key: 'Lo-fi Music', name: 'Lo-fi Music' },
        { id: 12, key: 'BTS', name: 'BTS' },
    ]
    const [komentcardmassiv, setKomentcardmassiv] = useState([
        {
            id: 1,
            likecount: 17,
            dezlike: null,
            like: false,
            dezlikee: false,
            img: './img/kament/avatar.svg',
            h4: `For some reason this video made me appreciate their beauty much more. I'm a Jeongyeon bias but Twice is all 
            visuals all the time`
        },
        {
            id: 2,
            likecount: 17,
            dezlike: null,
            like: false,
            dezlikee: false,
            img: './img/kament/avatar (1).svg',
            h4: `appreciable.`
        },
        {
            id: 3,
            likecount: 17,
            dezlike: null,
            like: false,
            dezlikee: false,
            img: './img/kament/avatar (2).svg',
            h4: `For some reason this video made me appreciate their beauty much more. `
        },
        {
            id: 4,
            likecount: 17,
            dezlike: null,
            like: false,
            dezlikee: false,
            img: './img/kament/avatar (3).svg',
            h4: `For some reason this video made me appreciate their beauty much more. I'm a Jeongyeon bias but Twice is all 
            visuals all the time`
        },
        {
            id: 5,
            likecount: 17,
            dezlike: null,
            like: false,
            dezlikee: false,
            img: './img/kament/avatar (2).svg',
            h4: `For some reason this video made me appreciate `
        },
        {
            id: 6,
            likecount: 17,
            dezlike: null,
            like: false,
            dezlikee: false,
            img: './img/kament/avatar (1).svg',
            h4: `For some reason this video made me appreciate their beauty much more. I'm a Jeongyeon bias but Twice is all 
            visuals all the time`
        },
        {
            id: 7,
            likecount: 17,
            dezlike: null,
            like: false,
            dezlikee: false,
            img: './img/kament/avatar.svg',
            h4: `For some reason this video made me appreciate their beauty much more. I'm a Jeongyeon bias but Twice is all 
            visuals all the time`
        },
    ])
    const [cardtanla, setCardtanla] = useState({
        id: 1,
        key: 'All',
        img: './img/home/cover.svg',
        imgmini: './img/home/avatar.svg',
        span: 'TWICE "Alcohol-Free" M/V  ',
        p: 'JYP Entertainment',
        p2: '130M views • 1 Month ago'
    });
    // const cardt=()=>{
    //     setCardtanla([search==="" ? cardtanla : vidiomassiv.filter((mas)=>mas.p.toLowerCase().indexOf(search.toLowerCase()) !==-1)])
    //     console.log(cardtanla);
    // }

    const [search, setSearch] = useState('')
    const [homeopen, setHomeopen] = useState(true);
    const [btnkey, setBtnkey] = useState(false)
    const [root, setRoot] = useState(false)
    const [navactive, setNavactive] = useState(false)
    return (
        <DataContext.Provider value={{
            komentcardmassiv, setKomentcardmassiv, vidiomassiv, btnmassiv, saitbar, setSaitbar, iconvidio, setIconvidio, qongiroqfun, setQongiroqfun, search, setSearch,
            mikrafon, setMikrafon, navimginfofun, setNavimginfofun, homeopen, setHomeopen, btnkey, setBtnkey, root, setRoot, navactive, setNavactive, cardtanla, setCardtanla
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default Saitbar;
