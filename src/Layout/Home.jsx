import CategoryCard from "../Component/CategoryCard";
import Slideshow from "../Component/Slideshow";
import { useTypewriter } from 'react-simple-typewriter'
import Success from "../Component/Success";
import Newsletter from "../Component/Newsletter";
import { Helmet } from "react-helmet-async";
import ContactForm from "../Component/ContactForm/ContactForm";


const Home = () => {
    // Typewriter helper
    const [text] = useTypewriter({
        words: ['Welcome To E-Library'],
        loop: 0
    })

    return (
        <div className="text-center">
            
            <Helmet>
                <title>Home | E-Library</title>
            </Helmet>
            {/* Typewriter text  */}
            {/* <div className='App text-5xl font-bold mt-5'>
               <h2 className="text-sky-500">[ <span >{text}</span> ]  </h2>
            </div> */}
            <Slideshow></Slideshow>
            <CategoryCard></CategoryCard>
            <Success></Success>
            <Newsletter></Newsletter>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;