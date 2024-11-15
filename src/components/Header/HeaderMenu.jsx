import { HeaderMenuItem } from "./HeaderMenuIte";

export const HeaderMenu = () => {
    return (
        <>
            <nav className=''>
                <ul className='flex items-center justify-between gap-x-[48px]'>
                    <HeaderMenuItem title="Product"  link="/" />
                    <HeaderMenuItem title="Features" link="/" />
                    <HeaderMenuItem title="Pricing"  link="/" />
                    <HeaderMenuItem title="Company"  link="/" />
                </ul>
            </nav>
        </>
    );
}