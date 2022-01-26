import icon0 from '../../Assets/icon0.png'
import icon1 from '../../Assets/icon1.png'
import icon2 from '../../Assets/icon2.png'
import icon3 from '../../Assets/icon3.png'
import icon4 from '../../Assets/icon4.png'
import icon5 from '../../Assets/icon5.png'
import icon6 from '../../Assets/icon6.png'
import './styles.css'

function IconImage({ number }) {
    let icon;

    switch(number) {
        case 0: icon = icon0; break;
        case 1: icon = icon1; break;
        case 2: icon = icon2; break;
        case 3: icon = icon3; break;
        case 4: icon = icon4; break;
        case 5: icon = icon5; break;
        case 6: icon = icon6;
    }

    return (
        <div className="icon_image">
            <img src={icon} alt="Icon Image" />
        </div>
    )
}

export default IconImage