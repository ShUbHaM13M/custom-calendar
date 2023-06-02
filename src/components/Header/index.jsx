import indiaShelterLogo from '../../assets/indiashelter.svg';

const Header = () => {
  return (
    <div className='py-4 bg-neutral-white w-full'>
      <img src={indiaShelterLogo} alt='India Shelter' />
    </div>
  );
};

export default Header;
