import cover0 from '../../Assets/cover0.jpg'
import cover1 from '../../Assets/cover1.jpg'
import cover2 from '../../Assets/cover2.jpg'
import cover3 from '../../Assets/cover3.jpg'
import cover4 from '../../Assets/cover4.jpg'
import cover5 from '../../Assets/cover5.jpg'
import cover6 from '../../Assets/cover6.jpg'
import './styles.css'

function CoverImage({ number }) {
    let cover;

    switch(number) {
        case 0: cover = cover0; break;
        case 1: cover = cover1; break;
        case 2: cover = cover2; break;
        case 3: cover = cover3; break;
        case 4: cover = cover4; break;
        case 5: cover = cover5; break;
        case 6: cover = cover6;
    }

    return (
        <div className="cover_image">
            <img src={cover} alt="Cover Image" />
        </div>
    )
}

export default CoverImage