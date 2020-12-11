import React from 'react'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'

export default function ServicesSection() {
   return (
     <div className="services">
       <div className="discription">
         <h2>
           High <span>quality</span> services
         </h2>
         <div className="cards">
           <div className="card">
             <div className="icon">
               <img src={clock} alt="Efficint icon" />
               <h3>Efficint</h3>
             </div>
             <p>Lorem ipsum dolor sit amet.</p>
           </div>
           <div className="card">
             <div className="icon">
               <img src={teamwork} alt="Teamwork icon" />
               <h3>Teamwork</h3>
             </div>
             <p>Lorem ipsum dolor sit amet.</p>
           </div>
           <div className="card">
             <div className="icon">
               <img src={diaphragm} alt="Diaphragm icon" />
               <h3>Diaphragm</h3>
             </div>
             <p>Lorem ipsum dolor sit amet.</p>
           </div>
           <div className="card">
             <div className="icon">
               <img src={money} alt="Affordable icon" />
               <h3>Affordable</h3>
             </div>
             <p>Lorem ipsum dolor sit amet.</p>
           </div>
         </div>
       </div>
       <div className="image">
         <img src={home2} alt="camera" />
       </div>
     </div>
   );
}
