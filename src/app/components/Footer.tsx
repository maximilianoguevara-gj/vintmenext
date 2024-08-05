import React from 'react';
import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col justify-center items-center px-6 py-24 max-md:px-5">
            <div className="flex flex-col max-w-full w-[1152px]">
                <div className="flex flex-wrap gap-5 items-center self-center w-full max-w-6xl max-md:max-w-full">
                    <Logo />
                    <SocialLinks />
                </div>
                <FooterLinks />
            </div>
        </footer>
    );
};

export default Footer;
