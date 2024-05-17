import '../app/index.css';

interface ImageProps {
    title: string,
    children: React.ReactNode,
}

export default function Section({ title, children }: ImageProps) {
    return (
        <section className="sectionContent">
            <h2 className="sectionTitle">{title}</h2>
            {children}
        </section>
    )
}