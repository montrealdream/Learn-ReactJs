export const Section5Item = (props) => {
    return (
        <>
            <div 
                className="bg-[#F6F8FD] p-[32px] rounded-[16px]"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
            >
                <p className="text-dark text-[20px] font-[700] text-center mb-[37px]">
                    {props.review}
                </p>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden mb-[16px]">
                        <img 
                            src={props.avatar} 
                            alt=""
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <h3 className="text-dark text-[18px] font-[800]">
                        {props.fullName}
                    </h3>
                    <p className="text-light text-[12px] font-[600]">
                        {props.position}
                    </p>
                </div>
            </div>
        </>
    );
}