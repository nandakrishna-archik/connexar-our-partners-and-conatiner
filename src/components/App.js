import img1 from './logos/netter.jpg';
import img2 from './logos/skrill.jpg';
import img3 from './logos/metaquotes.jpg';
import img4 from './logos/bit .jpg';
import img5 from './logos/visa.jpg';
import img6 from './logos/t.jpg';
import img7 from './logos/google.jpg';
import img8 from './logos/master.jpg';
import img9 from './logos/wire transfer.jpg';

import './style.css';


function App() {
  return (
    <><div class="container1">
   <h1>Why Do We Choose the Foreign Exchange Market?</h1>
    <div class="a">The forex market is the place for traders all around the world to buy, sell or exchange 
    currencies at the current market price. It is known for being by far the largest 
    market in the world which means that it is also the most liquid and 95 times bigger 
    than NewYork Stock Market. Worth over $6.5 Trillion dollars per day, our traders from 
    all around the world enjoy trading the world’s most popular tradable instrument.</div> 
   
    </div><div class="container">
        <h2>OUR  PARTNERS</h2>
        <section class="d-flex justify-content-xl-evenly flex-wrap align-content-sm-around">
          <div class=""><img src={img1} alt="logo" /></div>
          <div class=""><img src={img2} alt="logo" /></div>
          <div class=""><img src={img3} alt="logo" /></div>
          <div class=""><img src={img4} alt="logo" /></div>
          <div class=""><img src={img5} alt="logo" /></div>
          <div class=""><img src={img6} alt="logo" /></div>
          <div class=""><img src={img7} alt="logo"/></div>
          <div class=""><img src={img8} alt="logo"/> </div>
          <div class=""><img src={img9}alt="logo" /></div>
        </section>
      </div></>
   
  );
}

export default App;