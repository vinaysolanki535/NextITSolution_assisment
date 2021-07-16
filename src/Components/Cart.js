import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../GlobalState/Context'
import './Cart.css'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge)

function Cart() {
  const history = useHistory()
  const { cartItem } = useGlobalContext()

  const handleClick = () => {
    history.push('/user')
  }

  return (
    <div className='cart' onClick={handleClick}>
      <IconButton aria-label='cart'>
        <StyledBadge badgeContent={cartItem} color='secondary'>
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
  )
}

export default Cart
