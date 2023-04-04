import companyLogo from '../../../assets/img/logo_25w.png';
const HeaderLogo = (img, alt) => {
    return (<div>
        <img src={companyLogo} />
        {console.log(img.img)}
    </div>
    )
}

export default HeaderLogo;
