import logo from '../../assets/images/logo.svg';

export const HeaderLogo = () => {
    return (
        <>
            <a href='/' className=''>
                <img src={logo} alt=""/>
            </a>
        </>
    );
}