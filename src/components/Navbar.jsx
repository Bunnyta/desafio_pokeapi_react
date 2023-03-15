import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-dark ">
			<div className="container-fluid">
				
				
				<div className="collapse navbar-collapse" id="navbarText"></div>
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<NavLink
							to="/"
							className="nav-link text-danger"
							aria-current="page"
						>
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/pokemons"
							className="nav-link text-danger"
							aria-current="page"
						>
							Pokemones
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
