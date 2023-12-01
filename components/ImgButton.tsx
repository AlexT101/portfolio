'use client';

import '../app/index.css';

import { UnstyledButton } from '@mantine/core';

interface ImgButtonProps {
    src: string,
    href: string
}

const ImgButton = ({ src, href }: ImgButtonProps) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <UnstyledButton component="img" src={src} className="box image" loading="eager"/>
        </a>
    )
}

export default ImgButton;