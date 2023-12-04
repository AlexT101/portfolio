import '../app/index.css';

interface ProjectProps {
    type: string,
    title: string,
    role: string,
    img: string,
    href: string
}

const Project = ({ type, title, role, img, href }: ProjectProps) => {
    return (
        <a className={"box " + type} href={href}>
            <div className="boxHeader">
                <p>{title}</p>
                <p>{role}</p>
            </div>
            <img src={img} className="cover"/>
        </a>
    )
}

export default Project;

