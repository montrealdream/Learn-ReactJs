import { FooterLinkItem } from "./FooterLinkItem";

export const FooterLink = () => {
    return (
        <>
            <ul className="flex gap-x-[48px]">
                <FooterLinkItem title="About" link="/" />
                <FooterLinkItem title="Features" link="/" />
                <FooterLinkItem title="Blog" link="/" />
                <FooterLinkItem title="Resources" link="/" />
                <FooterLinkItem title="Partners" link="/" />
                <FooterLinkItem title="Help" link="/" />
                <FooterLinkItem title="Terms" link="/" />
            </ul>
        </>
    );
}