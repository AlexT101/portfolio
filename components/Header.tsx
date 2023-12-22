import '../app/index.css';

import Image from 'components/Image';

interface ImageProps {
    title: string,
    description: string,
    src: string,
    subtitle: string,
    alt: string,
    progress: boolean
}

const Header = ({ title, description, src, subtitle, alt, progress }: ImageProps) => {
    return (
        <section>
            <div className="header">
                <h1>{title}</h1>
                {progress ? (
                <p className="note"><i>(in progress)</i></p>
                ) : (<></>)}
                <p>{description}</p>
            </div>
            <Image src={src} subtitle={subtitle} alt={alt}/>
        </section>
    )
}

export default Header;