import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return(
        <div className=''>
            <FontAwesomeIcon icon={faCartShopping} size='2x' color='black' />
            <div className=''>0</div>
        </div>

    )
}

export default CartWidget;