# Assignment #6

# Themeing

The background is a shade of green that sort of matches the green in summoners rift (the map)
The champion sidebar and the position squares are slightly transparent

# Technical

Listeners: 
	- Drag and drop listeners for the positions and champion sidebar
	- mouseout listener on positions to change h2
	- keypress "r" listener to reset the positions without refreshing the page
	- DOMContentLoaded to populate initial list

Challenges:
	- Swapping champions by dragging a new champion onto an existing one
		- Had to make sure that images didn't have children
		- Failing to do so "swallowed up" the nested image
	- Maintaining order of idle champions
		- Wanted to make sure the order stayed alphabetical
		- Use array to ensure no duplicates
		- Made sure champs could be removed from positions and added to idle