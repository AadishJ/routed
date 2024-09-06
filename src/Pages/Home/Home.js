import HomeSec1 from './HomeSec1';
import HomeSec2 from './HomeSec2';
import HomeSec3 from './HomeSec3';
import AboutUs from './AboutUs';
import "./Home.css";
import Carousels from './Carousels';

function Home() {
    return (
        <div className='backgrounds'>
            <HomeSec1/>
            <HomeSec2 />
            <HomeSec3 />
            <Carousels text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, fuga quia quos illo fugiat illum, perferendis, eveniet id accusantium accusamus facilis praesentium laudantium!" />
            <AboutUs/>
        </div> 

    );
}

export default Home;