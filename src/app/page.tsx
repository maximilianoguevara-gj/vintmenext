"use client";

import React from 'react';
import ImageComponent from './components/ImageComponent';

const Page: React.FC = () => {
    return (
        <main>
            <section>
                <ImageComponent
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/20e3aa5412d43c102ac2d24db2ba7c0587238dad7cb9bb882a1fa0df16fa926c?apiKey=8ae6cc92657a4a909dc4ca9387cda3e2&&apiKey=8ae6cc92657a4a909dc4ca9387cda3e2"
                    alt="Main content image"
                />
            </section>
        </main>
    );
};

export default Page;