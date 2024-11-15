import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderLogin } from "./HeaderLogin";
import { HeaderSignUp } from "./HeaderSignup";

export const Header = () => {
    return (
        <>
            <header className='py-[26px]'>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between'>
                        <HeaderLogo />
                        <HeaderMenu />
                        
                        <div className='flex items-center gap-x-[20px]'>
                            <HeaderLogin />
                            <HeaderSignUp />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}