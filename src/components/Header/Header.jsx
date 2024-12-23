
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <div className='hamburgerMenu'>
            <img src='./menu_items/menu.svg'/>
        </div>
        <div className='searchbar'>
        <input type='text' placeholder='Search' className='search-input' />
        <img className='search' src="./menu_items/search_icon.svg" alt='User'/>
        </div>
      </div>
      <div className='header-right'>
        <img src="./menu_items/round-notifications.svg" alt='User'/>
        <img src="./menu_items/message.svg" alt='User'/>
       <div className='a2'>
       <img src='./menu_items/user.jpg' alt='User' className='user-logo' />
        <span className='user4'>Admirra John</span>
        <img className="downarrow" src="./menu_items/downarrow.svg" alt='User'/>
       </div>
      </div>
    </div>
  )
}

export default Header
