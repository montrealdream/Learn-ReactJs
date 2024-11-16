import { FooterCopyRight } from "./FooterCopyRight";
import { FooterLink } from "./FooterLink";
import { FooterLogo } from "./FooterLogo";
import { FooterSocial } from "./FooterSocial";


export const Footer = () => {
    return (
        <>
            <footer className="py-[80px]">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center gap-y-[32px]">
                        <FooterLogo />
                        <FooterLink />
                        <FooterSocial />
                        <FooterCopyRight />
                    </div>
                </div>
            </footer>
        </>
    );
}