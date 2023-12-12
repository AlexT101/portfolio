import '../app/index.css';

import Image from 'components/Image';

interface ImageProps {
    title: string,
    description: string,
    src: string,
    subtitle: string
}

const Header = ({ title, description, src, subtitle }: ImageProps) => {
    return (
        <section>
            <div className="header">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <Image src={src} subtitle={subtitle} />
        </section>
    )
}

export default Header;