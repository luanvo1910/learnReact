import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link to='/' className='nav-link'>Hook</Link>
      </li>
      <li>
        <Link to='/page2' className='nav-link'>date picker antd</Link>
      </li>
      <li>
        <Link to='/page3' className='nav-link'>json</Link>
      </li>
      <li>
        <Link to='/page4' className='nav-link'>API</Link>
      </li>
    </ul>
  )
}

export default Sidebar