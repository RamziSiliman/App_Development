import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({ options, fixed, theme }) => {


    let Logo = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="56.66" viewBox="0 0 166 56.66">
        <g id="Group_1" data-name="Group 1" transform="translate(-319 -174.34)">
            <text id="E-BROCKER" transform="translate(376 216)" fill="#fff" font-size="20" font-family="SegoeUI-Semibold, Segoe UI" font-weight="600"><tspan x="0" y="0">E-BROCKER</tspan></text>
            <path id="house" d="M52.474,23.284a2.944,2.944,0,0,1-2.916,2.925H46.642l.064,14.6a6.687,6.687,0,0,1-.046.738v1.467a3.644,3.644,0,0,1-3.645,3.645H41.556c-.1,0-.2,0-.3-.009-.128.009-.255.009-.383.009H35.724a3.644,3.644,0,0,1-3.645-3.645v-8.02a2.913,2.913,0,0,0-2.916-2.916H23.33a2.913,2.913,0,0,0-2.916,2.916v8.02a3.644,3.644,0,0,1-3.645,3.645H11.674c-.137,0-.273-.009-.41-.018-.109.009-.219.018-.328.018H9.478a3.644,3.644,0,0,1-3.645-3.645V32.808a2.388,2.388,0,0,1,.009-.255V26.21H2.916A2.881,2.881,0,0,1,0,23.284,2.962,2.962,0,0,1,.911,21.1L24.278.729a2.629,2.629,0,0,1,2-.729A3.027,3.027,0,0,1,28.2.638L51.472,21.1A2.5,2.5,0,0,1,52.474,23.284Z" transform="translate(319 174.34)" fill="#fff" />
            <rect id="Rectangle_1" data-name="Rectangle 1" width="162" height="5" rx="2.5" transform="translate(323 226)" fill="#fff" />
        </g>
    </svg>

    return (
        <div className={`navbar navbar-expand-lg ${theme == 'dark' ? 'bg-dark' : ''} navbar-dark text-light ${fixed && 'fixed-top'}`}>
            <div className="container">
                <Link className='navbar-brand'>
                    {Logo}
                </Link>
                <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id='navmenu'>
                    <ul className="navbar-nav ms-auto" >
                        {
                            options.map(option => (
                                <li className='nav-item mx-3 ' 
                                type = {`${option.type && option.type}`}
                                data-bs-toggle={`${option.toggle && option.toggle}`}
                                data-bs-target={`${option.target && option.target}`}
                                key={option.text}
                                onClick={option.action && option.action}

                                >
                                    <Link className={`nav-link`} to={option.address && option.address}>
                                        <small>
                                            {option.text}
                                        </small>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
