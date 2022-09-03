import React, { useState } from 'react';
import { Gi3DGlasses,Gi3DHammer,Gi3DMeeple,Gi3DStairs,GiAbacus } from "react-icons/gi";

 import {
   Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
 } from 'reactstrap';

import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

// const  Categorias = () => {
//     return (         

function Categorias({ direction, ...args }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);          
    const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (  
    <div className="d-flex">         
        <Dropdown className="navbar navbar-expand-lg navbar-dark bg-dark"  isOpen={dropdownOpen} toggle={toggle} direction={direction}>
            <DropdownToggle caret>Categorias Peliculas</DropdownToggle>
            <DropdownMenu {...args}>
            <DropdownItem className="nav-item" href="/productos">Todos los Productos</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/categoria/Accion"><Gi3DGlasses/> Accion </DropdownItem>
            <DropdownItem href="/categoria/Ciencia Ficcion"><Gi3DHammer/> Ciencia Ficcion </DropdownItem >
            <DropdownItem href="/categoria/Drama"><Gi3DMeeple/> Drama </DropdownItem >
            <DropdownItem href="/categoria/Terror"><Gi3DStairs/> Terror </DropdownItem>
            <DropdownItem href="/categoria/Suspenso"><GiAbacus/> Suspenso</DropdownItem>             
            {/* <DropdownItem header>Categorias</DropdownItem> */}
            {/* <DropdownItem text>Dropdown Item Text</DropdownItem> */}
            {/* <DropdownItem disabled>Action (disabled)</DropdownItem> */}
            </DropdownMenu>
        </Dropdown>
    </div>
    );
}

Categorias.propTypes = {
    direction: PropTypes.string,
  };
 
export default Categorias;


// import React, { useState } from 'react';
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';
// import PropTypes from 'prop-types';

// function Example({ direction, ...args }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen((prevState) => !prevState);

//   return (
//     <div className="d-flex p-5">
//       <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
//         <DropdownToggle caret>Dropdown</DropdownToggle>
//         <DropdownMenu {...args}>
//           <DropdownItem header>Header</DropdownItem>
//           <DropdownItem>Some Action</DropdownItem>
//           <DropdownItem text>Dropdown Item Text</DropdownItem>
//           <DropdownItem disabled>Action (disabled)</DropdownItem>
//           <DropdownItem divider />
//           <DropdownItem>Foo Action</DropdownItem>
//           <DropdownItem>Bar Action</DropdownItem>
//           <DropdownItem>Quo Action</DropdownItem>
//         </DropdownMenu>
//       </Dropdown>
//     </div>
//   );
// }

// Example.propTypes = {
//   direction: PropTypes.string,
// };

// export default Example;