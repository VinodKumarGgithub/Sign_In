import track from "./img/loca.png"
import support from "./img/supp.png"
import digi from "./img/digi.png"
const Featurebox = ()=>{
    return (
        <div id="left-box">
        <div >
            <p class="features">Features</p>
        </div>

        <div class="fet-box">
           <div>
              <div>
                <img src={digi} alt="" />
              </div>
            </div>

            <div>
                <h3 class="digi">Digitize</h3>
                <p>A Bird eye view of the entire Biomedical Operations.</p>
            </div>
           </div>

           <div class="fet-box">
            <div>
               <div>
                 <img src={track} alt="" />
               </div>
             </div>
 
             <div>
                 <p class="digi">Track</p>
                 <p>Track the product life cycle and service history.</p>
             </div>
            </div>

            <div class="fet-box">
                <div>
                   <div>
                     <img src={support} alt="" />
                   </div>
                 </div>
     
                 <div>
                     <p class="digi">Biomedical Budget</p>
                     <p>Regulate and save budget through analysed data and
                        informed</p>
                 </div>
                </div>
        </div>
    )
    }
    
    export default Featurebox