import slider1 from "./images/bg-images/slider1.jpg";
import slider3 from "./images/bg-images/slider3.jpeg";
import slider4 from "./images/bg-images/slider4.jpeg";
import slider5 from "./images/bg-images/slider5.jpeg";
import slider6 from "./images/bg-images/slider6.jpeg";



const slider={
    sid1:slider1,
    sid3:slider3,
    sid4:slider4,
    sid5:slider5,
    sid6:slider6


};

const responsive2={
    
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 600, min: 260 },
          items: 1
        }
      };




export {slider};
export {responsive2}

