import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// const spanStyle = {
//   padding: '20px',
//   background: '#efefef',
//   color: '#000000'
// }

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}




const slideImages = [
  {
    url: 'https://i.ibb.co.com/9gRckVy/jessica-ruscello-OQSCtab-Gk-SY-unsplash.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://i.ibb.co.com/7z2n3SL/thomas-kelley-h-HL08l-F7-Ikc-unsplash.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://i.ibb.co.com/nLZ8TgQ/jonathan-francisca-Bpbk-LACP64-M-unsplash.jpg',
    caption: 'Slide 3'
  },
  {
    url: 'https://i.ibb.co.com/DYChggv/inaki-del-olmo-NIJu-EQw0-RKg-unsplash-1.jpg',
    caption: 'Slide 4'
  },
  {
    url: 'https://i.ibb.co.com/GP20Syp/giammarco-boscaro-ze-H-ljaw-Htg-unsplash.jpg',
    caption: 'Slide 5'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container w-11/12 mx-auto mt-5">
        <Slide duration={3000} >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;