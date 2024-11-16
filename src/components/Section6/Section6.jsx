export const Section6 = () => {
    return (
        <>
            <section className="py-[120px]">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        {/* content */}
                        <div className="text-dark text-[36px]">
                            <h3 className="font-[800]">
                                Save time with Horizon.
                            </h3>
                            <span className="font-[600]">
                                Turn your visitors into clients.
                            </span>
                        </div>


                        {/* button */}
                        <div className="flex items-center gap-x-[16px]">
                            <a 
                                href="/"
                                className="py-[16px] px-[28px] border-[1px] border-primary rounded-[12px] text-primary text-[14px] font-[700] hover:bg-primary hover:text-white hover:duration-1000"
                            >
                                Try Demo
                            </a>
                            <a 
                                href="/"
                                className="py-[16px] px-[28px] border-[1px] border-primary rounded-[12px] text-white text-[14px] font-[700] bg-primary hover:bg-[#E9E3FF] hover:text-primary hover:border-white hover:duration-1000"
                            >
                                Get Started Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}