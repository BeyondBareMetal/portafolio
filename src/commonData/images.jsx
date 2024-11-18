import gab from '../assets/img/me.png';
import ccna from '../assets/img/certification_cisco.png';
import microsoft from '../assets/img/microsoft-certified-associate-badge.svg';


export const images = (data) =>{

    const img = {
        gab, ccna, microsoft
    }

    return img[data]
}