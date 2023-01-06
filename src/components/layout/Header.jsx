const Header = ({ title }) => {
  return (
    <header className='Header'>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

Header.defaultProps = {
  title: 'React JS Blog ',
};
