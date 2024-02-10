import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const information = store.favorites

	return (
		<nav className="navbar navbar-dark-expand-lg bg-dark">
			<div className="container-fluid collapse navbar-collapse d-flex justify-content-space-between" id="navbarSupportedContent">
			<Link to="/"><img className="logo" src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png" style={{height: "100px"}}/>
			</Link>

			

			{/* <div className="container-fluid collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent"> */}

					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle btn btn-primary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "darkRed", color: "snow", borderColor: "snow", borderRadius: "1em", padding: "10px 22px"}}>
								{information.length} Favorites
							</a>
							<ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown" style={{position: "absolute", inset: "10px auto auto -26px", margin: "0px", transform: "translate(0px, 40px)"}} data-popper-placement="bottom-start">
								{
									information.length == 0 ? <li className="text-center">No favorites so far <br/> <i className="fa-solid fa-book-journal-whills"></i></li> :
									information?.map(info =>
										<li className="d-flex flex-row justify-content-between p-2" key={info.name}>
											<p>{info.name}</p>
											<span onClick={() => actions.removeFavorite(info.name)}>
												<i className="fa-solid fa-xmark"></i>
											</span>
										</li> 
									)
								}

							</ul>
						</li>
					</ul>
				{/* </div> */}
					
			</div>
		</nav>
	);
};