import React, {useState} from 'react';
import { AiFillStar } from 'react-icons/ai';

function SidebarC() {

    const SidebarDB = [
        {
            id:0,
            name:'Premier League',
            icon:'https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg'
        },
        {
            id:1,
            name:'Ligue 1',
            icon:'https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg'
        },
        {
            id:2,
            name:'Bundesliga',
            icon:'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
        },
        {
            id:3,
            name:'Seria A',
            icon:'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png'
        },
        {
            id:4,
            name:'Erdivisie',
            icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png'
        },
        {
            id:5,
            name:'LaLiga',
            icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png'
        },
        {
            id:6,
            name:'Euro',
            icon:'https://www.surfertoday.com/images/stories/physical-world-map.jpg'
        },
        {
            id:6,
            name:'Champions League',
            icon:'https://www.surfertoday.com/images/stories/physical-world-map.jpg'
        },
        {
            id:6,
            name:'Europa League',
            icon:'https://www.surfertoday.com/images/stories/physical-world-map.jpg'
        },
        {
            id:6,
            name:'Europa Conference League',
            icon:'https://www.surfertoday.com/images/stories/physical-world-map.jpg'
        },
        {
            id:6,
            name:'UEFA Nation League',
            icon:'https://www.surfertoday.com/images/stories/physical-world-map.jpg'
        },
        {
            id:6,
            name:'World Championship',
            icon:'https://www.surfertoday.com/images/stories/physical-world-map.jpg'
        }
    ]

    return (
        <div style={{border:'2px solid black',height:'130vh',width:'12%',paddingLeft:'30px',marginLeft:'16%',overflow:'hidden'}}>
            <div style={{display:'flex'}}>
                <AiFillStar style={{marginTop:'0.5vh'}} />
                MY LEAGUES
            </div>
            <hr/>
            <div>
                {SidebarDB.map((item) => (
                    <div style={{display:'flex',paddingTop:'2px',fontSize:'13px',fontWeight:'500',height:'30px'}}>
                        <img src={item.icon} width='28px' height='18px' style={{marginTop:'3px'}} />
                        <p style={{marginLeft:'5px'}}>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SidebarC;