import { useEffect, useRef, useState } from 'react';
import { IconArrowDown } from '../../assets/icons';
import PropTypes from 'prop-types';

const Selector = ({ label, options, onOptionClick, selectedIndex }) => {
  const [showOptions, setShowOptions] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={containerRef} className='relative'>
      <button
        onClick={() => setShowOptions((prev) => !prev)}
        className='flex gap-4 items-center text-base font-semibold text-dark-grey'
        title='Select month'
        type='button'
      >
        {label}
        <IconArrowDown strokeColor='#96989A' />
      </button>
      {showOptions ? (
        <div
          style={{ maxHeight: 298, width: 130, top: '120%' }}
          className='absolute left-2/4 -translate-x-2/4 bg-neutral-white p-2 overflow-y-auto flex flex-col gap-2 shadow-calendar rounded-lg'
        >
          {options.map((option, index) => (
            <button
              onClick={() => {
                onOptionClick(option, index);
                setShowOptions(false);
              }}
              title={option}
              type='button'
              key={option}
              className={`p-2 rounded-lg text-base text-left 
              hover:bg-secondary-green hover:bg-opacity-10 hover:text-secondary-green
              ${
                selectedIndex === index
                  ? 'text-neutral-white bg-secondary-green hover:bg-opacity-100 hover:text-neutral-white'
                  : 'text-dark-grey bg-transparent'
              }
              `}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Selector;

Selector.propTypes = {
  label: PropTypes.any.isRequired,
  options: PropTypes.arrayOf(PropTypes.any),
  currentDate: PropTypes.any,
  onOptionClick: PropTypes.func,
  selectedIndex: PropTypes.number,
};
