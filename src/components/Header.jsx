import './Header.css'

const Header = ({title, leftChild, rightChild}) => {
  return (
      <>
        <header className='Header'>
          <div>{leftChild}</div>
          <div className='header_title'>{title}</div>
          <div>{rightChild}</div>
        </header>
      </>
  );
}
export default Header;