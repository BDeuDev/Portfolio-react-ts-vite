import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { click, noClick } from '../../redux/menuSlice';

const Menu = () => {
  const [clicked, setClicked] = useState<boolean>();
  const dispatch = useDispatch();
  //@ts-ignore
  const {isClicked} = useSelector((state) => state.menu);
  const menuHandler = () => {
    if (clicked) {
      setClicked(false);
      dispatch(click())
    } else {
      setClicked(true);
      dispatch(noClick())
    }

  }
  return (
    <button className='fixed  top-0 right-0  w-[50px] h-auto flex flex-col items-center justify-center'>
      <FontAwesomeIcon icon={!isClicked ? faTimes : faBars} className={`text-5xl transform transition-transform ease-in-out duration-1000 ${!isClicked && 'rotate-90'}`} onClick={() => menuHandler()} />
    </button>
  );
};

export default Menu;