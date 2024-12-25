import CategoryCard from "../Component/CategoryCard";
import Slideshow from "../Component/Slideshow";
import { useTypewriter } from 'react-simple-typewriter'


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
               <h2><span className="text-sky-500">{text}</span>. </h2>
            </div>
            <Slideshow></Slideshow>
            <CategoryCard></CategoryCard>
        </div>
    );
};

export default Home;