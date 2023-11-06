import React from 'react';
import toddleimg from '../toddle_learn_logo.png';
import { useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import './Navbar.css'
import Modal from './Modal.js'
import BoardSelection from './BoardSelection.js'

const Navbar = () => {
  const iconStyle = {
    marginRight: '5px'
  };
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className='navbar'>
      <div className='logoContain'><img alt='logo' className='logo' src={toddleimg} /></div>
      <div className='miniContain'>
        <div className='searchContainer'>
          <FaSearch style={iconStyle} />
          <div className='searchText'>
            <input
              type="text"
              placeholder="Search..."
              style={{ border: 'none', outline: 'none', flex: '1' }}
            />
          </div>
        </div>
        <div className='AddButton' onClick={openModal}>
          <FaPlus style={iconStyle} />
          <p>create new board</p>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal} title="Add a name for your board">
          <BoardSelection />
        </Modal>
      </div>
    </div>
  )
}
export default Navbar;