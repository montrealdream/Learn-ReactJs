export const Section2Item = (props) => {
    return (
        <>
            <div className="flex gap-x-[18px]">
                <div className="bg-primary w-[48px] h-[48px] rounded-full flex items-center justify-center text-white"
                >
                    {props.number}
                </div>
                <div className="flex-1">
                    <h3 className="text-dark text-[16px] font-[700]">
                        {props.title}
                    </h3>
                    <p className="text-light text-[16px] font-[500]">
                        {props.desc}
                    </p>
                </div>
            </div>
        </>
    );
}