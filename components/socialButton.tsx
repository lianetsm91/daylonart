import React from 'react';
import {Facebook, IconButton, Instagram, LinkedIn, WhatsApp} from "@/lib/mui";
import Link from "next/link";

interface Props {
    type: string;
    size: string;
}

const SocialButton: React.FC<Props> = ({type, size = 'large'}) => {
    const style = {
        fontSize: size === 'small' ? '1.5rem' : '3.5rem'
    }

    switch (type) {
        case 'facebook':
            return (
                    <IconButton aria-label="Facebook" target='_blank'
                                href="https://www.facebook.com/artedaylon?mibextid=LQQJ4d">
                        <Facebook sx={style}/>
                    </IconButton>
            )
        case 'ws':
            return (
                    <IconButton aria-label="WhatsApp" target='_blank' href="https://wa.me/+17868528028">
                        <WhatsApp sx={style}/>
                    </IconButton>
            )
        case 'linkedin':
            return (
                    <IconButton aria-label="LinkedIn">
                        <LinkedIn sx={style}/>
                    </IconButton>
            )
        case 'instagram':
            return (
                    <IconButton aria-label="Instragram" target='_blank'
                                href="https://instagram.com/daylonperezpachec?igshid=OGQ5ZDc2ODk2ZA==">
                        <Instagram sx={style}/>
                    </IconButton>
            )

        default:
            return null;
    }

};

export default SocialButton;
