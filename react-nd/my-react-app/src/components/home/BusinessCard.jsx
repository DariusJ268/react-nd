import Button from "../common/Button";
import styles from "./BusinessCard.module.scss";
import useLocalStorage from "@/hooks/useLocalStorage";

const BusinessCard = ({ business }) => {

    const [favorites, setFavorites] = useLocalStorage("favorites", []);

    const isFavorite = favorites.includes(business.name);

    const toggleFavorite = () => {
        if (isFavorite) {
            setFavorites(favorites.filter((fav) => fav !== business.name));
        } else {
            setFavorites([...favorites, business.name]);
        }
    };

    return (
        <div className={styles.card}>
            {business.images.length && (
                <img
                    src={business.images[0].url}
                    alt={business.name}
                    className={styles.image}
                />
            )}
            <div className={styles.infoContainer}>
                <span className={styles.chip}>{business.category}</span>
                <h3 className={styles.name}>{business.name}</h3>
                <p className={styles.contactPerson}>{business.contactPerson}</p>
                <p className={styles.address}>{business.address}</p>
                <button className={styles.favoriteButton} onClick={toggleFavorite}>
                    {isFavorite ? '★' : '☆'}
                </button>
                <Button>Book now</Button>
            </div>
        </div>
    );
};

export default BusinessCard;