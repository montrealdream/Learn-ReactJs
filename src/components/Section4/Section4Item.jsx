export const Section4Item = (props) => {
    return (
        <>
            <div className="w-[237px] flex flex-col gap-y-[2px]">
                <div className="text-dark text-[36px] font-[800]">
                    {props.number}
                </div>
                <h4 className="text-dark text-[16px] font-[700]">
                    {props.title}
                </h4>
                <p className="text-light text-[16px] font-[500]">
                    {props.desc}
                </p>
            </div>  
        </>
    );
}