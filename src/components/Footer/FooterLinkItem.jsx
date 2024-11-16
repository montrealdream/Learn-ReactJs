export const FooterLinkItem = (props) => {
    return (
        <>
            <li>
                <a 
                    href={props.link}
                    className="text-light text-[14px] font-[500]"
                >
                    {props.title}
                </a>
            </li>
        </>
    );
}