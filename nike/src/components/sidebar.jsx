import Close from '../assets/times.png'

const Sidebar = ({ handleSidebar, show }) => {
  const sidebarMenu = [
    {
      name: 'Men',
      link: '#',
    },
    {
      name: 'Women',
      link: '#',
    },
    {
      name: 'Kids',
      link: '#',
    },
    {
      name: 'Customize',
      link: '#',
    },
    {
      name: 'Sale',
      link: '#',
    },
  ]

  return (
    <div className={`sidebar ${show ? 'show' : ''}`}>
      <div className='close' onClick={handleSidebar}>
        <img src={Close} alt='Close' />
      </div>
      <div className='menu__mobile'>
        {sidebarMenu.map((menu, index) => (
          <a href={menu.link} key={index}>
            {menu.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Sidebar