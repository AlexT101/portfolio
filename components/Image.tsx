import '../app/index.css';

interface ImageProps {
    src: string,
    subtitle: string,
    alt: string
}

const Image = ({ src, subtitle, alt }: ImageProps) => {
    return (
        <div className="largeImgRow">
            <img src={src} className="image" alt={alt}/>
            {subtitle !== "" ? (
                <p>{subtitle}</p>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Image;