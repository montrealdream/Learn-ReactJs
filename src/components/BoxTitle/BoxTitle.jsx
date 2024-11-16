

export const BoxTitle = (props) => {
    return (
        <>
            <div 
                className="flex flex-col items-center gap-y-[10px]" data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className="text-dark text-[36px] font-[800]">
                    {props.title}
                </h2>
                <p className="text-light text-[16px] font-[500]">
                    {props.desc}
                </p>
            </div>
        </>
    );
}