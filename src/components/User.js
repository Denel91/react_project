const defaultImage = 'https://via.placeholder.com/32x32.png';

function getImageOrDefaultURL(imageUrl) {
    try {
        new URL(imageUrl);
        return imageUrl

    } catch {
        return defaultImage
    }
}

export default function User({name, image, children}) {
    return (
        <div className="d-flex align-items-center text-black text-decoration-none py-1">
            <img className="rounded-circle me-2"
                 alt="Profile_Images"
                 src={getImageOrDefaultURL(image)}
                 width="32"
                 height="32"/>
            <strong>{name}</strong>
            {children}
        </div>
    );
}