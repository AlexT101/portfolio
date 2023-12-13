import '../app/index.css';

import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

interface ProjectProps {
    type: string,
    title: string,
    role: string,
    img: string,
    href: string,
    offset: number
}

const Project = ({ type, title, role, img, href, offset }: ProjectProps) => {

    AOS.init({
        disable: 'mobile',
      });

    return (
        <div data-aos="fade-up" data-aos-easing="ease-sine" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-delay={offset}>
            <a className={"box " + type} href={href}>
                <div className="boxHeader">
                    <p>{title}</p>
                    <p className="secondary">{role}</p>
                </div>
                <img src={img} className="cover" />
            </a>
        </div>
    )
}

export default Project;

