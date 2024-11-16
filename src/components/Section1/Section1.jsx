import { FaPhoneAlt } from "react-icons/fa";
import Section1ContentIcon from "../../assets/images/Section1-Content.svg";
import Section1ImageBackGround from "../../assets/images/Section1-Image.png";

export const Section1 = () => {
    return (
        <>
            <section className="">
                <div className="container mx-auto">
                    <div className="flex">
                        <div 
                            className="pt-[98px] pb-[113px] pr-[114px]"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            {/* content */}
                            <p 
                                className="flex items-center gap-x-[11px] text-[14px] text-primary font-[700] uppercase mb-[10px]"
                            >
                                <img src={Section1ContentIcon} alt=""/>
                                TRENDIEST TAILWIND TEMPLATES
                            </p>
                            
                            <h3 
                                className="text-dark text-[60px] font-[800] w-[570px] mb-[24px]"
                            >
                                Take your website to the next level with Horizon UI
                            </h3>

                            <p 
                                className="text-light text-[16px] font-[500] w-[429px] mb-[24px]"
                            >
                                Save hundreds of hours trying to create and develop a dashboard from scratch. The fastest, most responsive & trendiest dashboard is here. Seriously.
                            </p>

                            <div 
                                className="flex items-center gap-[5px]"
                            >
                                <a 
                                    href="/" 
                                    className="bg-primary rounded-[10px] px-[28px] py-[16px] text-white text-[14px] font-[700] hover:bg-[#E9E3FF] hover:text-primary hover:duration-1000"
                                >
                                    Get started now
                                </a>
                                <a 
                                    href="/" 
                                    className="px-[28px] py-[16px] flex items-center gap-x-[6px] text-[14px] font-[500] text-dark hover:bg-primary hover:text-white hover:duration-1000 rounded-[10px]"
                                >   
                                    <FaPhoneAlt />
                                    Get started now
                                </a>
                            </div>
                        </div>
                        {/* image */}
                        <div className="">
                            <img className="object-cover" src={Section1ImageBackGround} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}