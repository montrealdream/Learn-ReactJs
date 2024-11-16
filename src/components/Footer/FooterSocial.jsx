import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export const FooterSocial = () => {
    return (
        <>
            <ul className="flex items-center justify-between gap-x-[36px] h-[24px]">
                <li>
                    <a href="/" className="text-light text-[18px] p-[3px]">
                        <FaFacebookF />
                    </a>
                </li>
                <li>
                    <a href="/" className="text-light text-[18px] p-[3px]">
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="/" className="text-light text-[18px] p-[3px]">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="/" className="text-light text-[18px] p-[3px]">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="/" className="text-light text-[18px] p-[3px]">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
        </>
    );
}