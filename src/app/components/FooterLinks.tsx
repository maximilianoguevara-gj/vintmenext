// components/FooterLinks.tsx
import React from 'react';

const FooterLinks: React.FC = () => {
    return (
        <div className="flex space-x-6 mt-4">
            <a href="/privacy-policy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </div>
    );
};

export default FooterLinks;
