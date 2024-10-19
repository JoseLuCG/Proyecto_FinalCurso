import './InterestItem.css';

function InterestItem( { interest } ) {
    
    return(
        <li className='item-interest'>
            {interest}
        </li>
    );
}

export default InterestItem;