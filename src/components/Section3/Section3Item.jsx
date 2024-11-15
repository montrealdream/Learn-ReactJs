

export const Section3Item = (props) => {
    return (
        <>
            <div className="flex flex-col items-center px-[8px] py-[22px]">
                <div className="bg-primary rounded-[16px] p-[20px] text-white text-[18px] mb-[20px]">
                    <img src={props.icon} alt="" />
                </div>
                <div className="flex flex-col items-center gap-y-[8px] px-[32px]"> 
                    <h3 className="text-dark text-[24px] font-[800]">
                        {props.title}
                    </h3>
                    <p className="text-light text-[16px] font-[500] text-center">
                        {props.desc}
                    </p>
                </div>
            </div>
        </>
    );
}