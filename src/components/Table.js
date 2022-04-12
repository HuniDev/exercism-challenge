function Table() {
	return (
		<div className='overflow-x-auto w-full'>
			<table className='table w-full'>
				<thead>
					<tr>
						<th>
							<img src='#' alt='exercism-icon' />
						</th>
						<th>
							<input type='search' placeholder='Filter by exercise title' />
						</th>
						<th>
							<button>Sort by Most Recent</button>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>
							<img src='#' alt='icon' />
						</th>
						<td>
							<div className='flex items-center space-x-3'>
								<div className='avatar'>
									<div className='mask mask-squircle w-12 h-12'>
										<img
											src='/tailwind-css-component-profile-2@56w.png'
											alt='Avatar Tailwind CSS Component'
										/>
									</div>
								</div>
								<div>
									<div className='font-bold'>Hart Hagerty</div>
									<div className='text-sm opacity-50'>United States</div>
								</div>
							</div>
						</td>
						<td>CONTENT</td>
						<td>TIME AGO</td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
						<th></th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}

export default Table;
