import '../app/index.css';

interface ImageProps {
    src: string,
    subtitle: string,
}

const Image = ({ src, subtitle }: ImageProps) => {
    return (
        <div className="largeImgRow">
            <img src={src} className="image" />
            {subtitle !== "" ? (
                <p>{subtitle}</p>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Image;