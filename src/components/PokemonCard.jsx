export default function PokemonCard({ pokemon }) {
	return (
		<>
			<div >
				<div
					className="card mb-3 "
					style={{ minHeight: "20rem", width: "40rem" }}
				>
					<div className="row g-0">
						<div className="col-md-6 d-flex flex-column justify-content-center">
							<img
								src={pokemon.sprites.other["official-artwork"].front_default}
								className="img-fluid rounded-start"
								alt={pokemon.name}
								style={{ maxHeight: "15rem" }}
							/>
						
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h5 className="card-title text-center text- fs-3">
									{pokemon.name.charAt(0).toUpperCase() +
										pokemon.name.substr(1).toLowerCase()}
								</h5>
								<ul className="list-group bg-dark">
									{pokemon.stats.map((item) => {
										return (
											<li
												className="list-group-item text-black "
												key={item.stat.url}
											>
												<b>
													{item.stat.name.charAt(0).toUpperCase() +
														item.stat.name.substr(1).toLowerCase()}{" "}
												</b>
												- {item.base_stat}
											</li>
										);
									})}
								</ul>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
