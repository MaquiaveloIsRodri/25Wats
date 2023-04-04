import Links from "../../atoms/Links/Links";


const NavigationBar = ({ link }) => {
    return (
        <nav>
            {link.map((links) => (
                <Links key={links.id}>{links.label}</Links>
            ))}
        </nav>
    );
};

export default NavigationBar;