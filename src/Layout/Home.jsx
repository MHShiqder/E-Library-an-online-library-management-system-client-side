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
            <div className='App text-3xl font-bold mt-5'>
               <h2><span className="text-red-500">{text}</span>... </h2>
            </div>
            <Slideshow></Slideshow>
            {/* <div className="w-64 mx-auto">
                <h2 className="text-4xl font-bold">Lets explore the world </h2>
            <Lottie animationData={groovyWalkAnimation} />
            </div> */}
        </div>
    );
};

export default Home;