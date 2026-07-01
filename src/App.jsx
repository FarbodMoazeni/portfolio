import './App.css'

import before1 from './assets/before1.jpg'
import after1 from './assets/after1.jpg'
import before2 from './assets/before2.jpg'
import after2 from './assets/after2.jpg'
import before3 from './assets/before3.jpg'
import after3 from './assets/after3.jpg'
import before4 from './assets/before4.jpg'
import after4 from './assets/after4.jpg'
import before5 from './assets/before5.jpg'
import after5 from './assets/after5.jpg'
import before6 from './assets/before6.jpg'
import after6 from './assets/after6.jpg'

import before7 from './assets/before7.jpg'
import after7 from './assets/after7.jpg'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Ali Virtual Staging</h1>

      <h2>Virtual Staging & Interior Visualization</h2>

      <div className="project">
        <h3>Modern Living Room</h3>

        <div className="beforeAfter">
          <img src={before1} alt="before" />
          <img src={after1} alt="after" />
        </div>
      </div>

      
        <div className="beforeAfter">
          <img src={before2} alt="before" />
          <img src={after2} alt="after" />
        </div>
      
    <div className="beforeAfter">
          <img src={before3} alt="before" />
          <img src={after3} alt="after" />
        </div>
      

   <div className="beforeAfter">
          <img src={before4} alt="before" />
          <img src={after4} alt="after" />
        </div>
      

   <div className="beforeAfter">
          <img src={before5} alt="before" />
          <img src={after5} alt="after" />
        </div>
      

    
    
    
   <div className="beforeAfter">
          <img src={before6} alt="before" />
          <img src={after6} alt="after" />
        </div>
      

   <div className="beforeAfter">
          <img src={before7} alt="before" />
          <img src={after7} alt="after" />
        </div>


     </div>
  )
};



export default App