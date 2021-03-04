/*
	A helper function that creates rows of boxes within a container
 */
let generateLines = (vars) => {
	vars = vars || {};

	// The container to append to. Either a string selector, a node or defaults to the body
	const parent = (typeof(vars.parent) === 'string') ? document.querySelector(vars.parent) : vars.parent ? vars.parent : document.body;
	// Number of rows, defaults to 5
	const rows = vars.rows || 10;
	// Gutter between each block, defaults to 0
	const gutter = vars.gutter || 0;
	// Any custom classes we wish to add to each block
	const class_name = vars.className || "";
	// Parent dimensions
	const width = parent.offsetWidth;
	const height = parent.offsetHeight;

	for (let i = 0; i < rows; i++) {
		// Set this boxes dimensions
		const this_width = ((width / parent.offsetWidth) * 100);
		const this_height = (((height / rows) / height) * 100) + 0.1; // height hack to prevent odd gaps
		const this_gutter_x = (gutter / width * 100);
		const this_gutter_y = (gutter / height * 100);
		// Create the element
		const box = document.createElement('div');
		// Update elements dimensions and position
		box.style.width = `${this_width - (this_gutter_x)}%`;
		box.style.height = `${this_height - (this_gutter_y)}%`;
		box.style.left = `0%`;
		box.style.top = `${(((height/rows) / height) * 100) * i}%`;

		if (!!class_name) box.classList.add(class_name);
		box.index = i;
		box.dataset.index = i;

		// Add to the container
		parent.appendChild(box);
	}
}
