import instagramlogo from '../../assets/images/instagram-text-icon.svg';
import style  from "./header.module.css";
export default function Header(){
    return <div className={style.header}> 
    <figure className={style.logo}><img src={instagramlogo} alt="" /></figure>
    </div>
}