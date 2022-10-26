
import Image from 'next/image';
import Data from '../icons/date-icon';
import Address from '../icons/address-icon';
import ArrowRight from '../icons/arrow-right-icon';
import classes from './event-item.module.css';
import Button from "../ui/button";
function EventItem (props) {
    const  {title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleString('en-US', {
        day: "numeric",
        month: 'long',
        year: "numeric",
    });
    const formattedAddress = location.replace(', ', '/n');
    const exploreLink =    `/events/${id}`;
    return(
    <li className={classes.item}>
        <img src={'/' + image} alt={title} />
        <div className={classes.content}>
            <div className={classes.summary}>
            <h2>{title}</h2>
            </div>
            <div className={classes.date}>
                <Data />
                <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
                <Address />
                <address>{formattedAddress}</address>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                    <span>Explore Events</span>
                    <span className={classes.icon}> <ArrowRight /></span>
                </Button>
            </div>
        </div>
    </li>
    )
}
export default EventItem;