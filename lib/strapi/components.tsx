import React from 'react';
import NextImage from 'next/image';

import { IStrapiMedia } from './types';
import { getStrapiMedia } from './common';

interface IStrapiImageProps {
    image: IStrapiMedia;
}

export const NoImage = () => (
    <div className="relative w-full pb-[40%] my-12 dark:text-primary-1 font-bold text-2xl">
        <p
            className="dark:bg-sencondary flex items-center justify-center absolute top-0 h-full w-full overflow-hidden"
            style={{ height: '100%' }}
        >
            No Image
        </p>
    </div>
);

export const StrapiImage: React.FC<IStrapiImageProps> = ({ image }) => {
    const { alternativeText, width, height } = image.data?.attributes ?? {};
    const src = getStrapiMedia(image) ?? '';

    if (!src) {
        return <NoImage />;
    }

    return (
        <NextImage
            layout="responsive"
            width={width}
            height={height}
            objectFit="contain"
            src={getStrapiMedia(image) ?? ''}
            alt={alternativeText ?? ''}
        />
    );
};
