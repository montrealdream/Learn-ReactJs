export const HeaderMenuItem = (props) => {
    return (
        <>
            <li>
                <a href={props.link} className='text-[14px]'>
                    {props.title}
                </a>
            </li>
        </>
    );
}