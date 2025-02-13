import React from 'react';

const AboutUs = () => {
    return (
        <div className="w-11/12 mx-auto p-8 bg-white text-blue-950 shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-center mb-6 text-blue-950">About Us</h1>
            <p className="text-lg mb-6 text-gray-700">
                Welcome to <span className="font-semibold text-[#eab64f]">E-Library</span>, your go-to digital library for accessing a vast collection of books across various genres. Our platform is designed to make reading more accessible, efficient, and enjoyable for book enthusiasts, students, and researchers.
            </p>
            <div className="bg-[#eab64f] text-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                <p>
                    Our mission is to provide a seamless and user-friendly experience for readers by offering a well-organized and easy-to-access collection of books. We believe in the power of knowledge and aim to bridge the gap between readers and information.
                </p>
            </div>
            <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-950">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>A growing collection of books across different categories.</li>
                <li>User-friendly interface to browse, search, and manage your book list.</li>
                <li>Personalized book lists to keep track of your favorite reads.</li>
                <li>Future enhancements like review and rating systems.</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-3 text-blue-950">Why Choose Us?</h2>
            <p className="mb-6 text-gray-700">
                Whether you are a student, a researcher, or just an avid reader, <span className="text-[#eab64f]">E-Library</span> is tailored to provide an efficient and enjoyable reading experience. Our intuitive design, seamless navigation, and commitment to improving the platform make us a reliable choice for digital reading.
            </p>
            <div className="bg-[#eab64f] text-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
                <p>
                    Have questions or suggestions? Feel free to reach out to us. Your feedback is valuable in making <span className="font-semibold">E-Library</span> a better platform for all readers.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;