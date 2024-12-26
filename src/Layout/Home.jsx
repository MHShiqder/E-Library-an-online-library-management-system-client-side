import CategoryCard from "../Component/CategoryCard";
import Slideshow from "../Component/Slideshow";
import { useTypewriter } from 'react-simple-typewriter'
import Success from "../Component/Success";
import Newsletter from "../Component/Newsletter";


const Home = () => {
    // Typewriter helper
    const [text] = useTypewriter({
        words: ['Welcome To E-Library'],
        loop: 0
    })

    return (
        <div className="text-center">
            

            {/* Typewriter text  */}
            <div className='App text-5xl font-bold mt-5'>
               <h2 className="text-sky-500">[ <span >{text}</span> ]  </h2>
            </div>
            <Slideshow></Slideshow>
            <CategoryCard></CategoryCard>
            <Success></Success>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;