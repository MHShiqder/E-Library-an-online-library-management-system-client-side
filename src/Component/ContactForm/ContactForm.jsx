import {MdOutlineCall, MdOutlineEmail} from "react-icons/md";
import {IoLocationOutline} from "react-icons/io5";
import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

const ContactForm = () => {

    return (
        <section className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[35px] boxShadow  mb-20 rounded-none">

            {/*  informations  */}
            <aside className="w-full bg-[#1E1E1E] flex flex-col justify-between p-[25px] rounded-none">

                <div>
                    <h1 className="text-[2rem] font-[600] leading-[35px] text-white">Contact
                        Information</h1>
                    <p className="text-[0.9rem] mt-1 mb-8 text-white">Say something to start a live
                        chat!</p>
                </div>

                <div className="flex flex-col gap-[20px] text-gray-300">
                    <p className="flex items-center gap-[8px]">
                        <MdOutlineCall />
                        +880123456768
                    </p>
                    <p className="flex items-center break-all gap-[8px]">
                        <MdOutlineEmail />
                        scholarease@gmail.com
                    </p>
                    <p className="flex items-center gap-[8px]">
                        <IoLocationOutline/>
                        Dhaka, Bangladesh
                    </p>
                </div>

                <div className="flex gap-[15px] flex-wrap text-black mt-8">
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-[#15AE5C] text-white hover:bg-white hover:text-orange-500 transition-all duration-300  boxShadow">
                        <CgFacebook/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-[#15AE5C] text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow">
                        <BsTwitter/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-[#15AE5C] text-white hover:bg-white hover:text-orange-500 transition-all duration-300  boxShadow">
                        <BsInstagram/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-[#15AE5C] text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow">
                        <BsLinkedin/>
                    </a>
                </div>
            </aside>

            {/* form area */}
            <form className="pt-[20px]">
                <div className="flex flex-col sm:flex-row items-center gap-[30px]">
                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="text-[1rem] text-gray-700">First Name</label>
                        <input type="text"
                               className="peer border-gray-300 border-b outline-none focus:border-primary w-full text-gray-400 transition-colors duration-300"
                        />
                    </div>

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="text-[1rem] text-gray-700">Last Name</label>
                        <input type="text"
                               className="peer border-gray-300 border-b outline-none focus:border-primary w-full text-gray-400 transition-colors duration-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="text-[1rem] text-gray-700">Email Address</label>
                        <input type="email"
                               className="peer border-gray-300 border-b outline-none focus:border-primary w-full text-gray-400 transition-colors duration-300"
                        />
                    </div>

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="text-[1rem] text-gray-700">Phone Number</label>
                        <input type="number"
                               className="peer border-gray-300 border-b outline-none focus:border-primary w-full text-gray-400 transition-colors duration-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-[5px] w-full mt-10">
                    <label className="text-[1rem] text-gray-700">Write Message</label>
                    <textarea
                        className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-gray-400 transition-colors focus:border-primary duration-300"
                    ></textarea>
                </div>


                <div className="w-full flex items-center sm:items-end justify-center sm:justify-end mt-5">
                    <button type="submit"
                            className={`py-2.5 px-6 bg-[#15AE5C] border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-none text-[1rem] mt-[10px] w-max`}>Send
                        Message
                    </button>
                </div>

            </form>
        </section>
    );
};

export default ContactForm;