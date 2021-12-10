import React from 'react'
import { Nav, NavLink } from 'reactstrap'

const Footer = () => {
    return (
        <Nav vertical>
            <NavLink href="#">
                Link
            </NavLink>
            {' '}
            <NavLink href="#">
                Link
            </NavLink>
            {' '}
            <NavLink href="#">
                Another Link
            </NavLink>
            {' '}
            <NavLink disabled href="#">
                Disabled Link
            </NavLink>
        </Nav>)
}

export default Footer