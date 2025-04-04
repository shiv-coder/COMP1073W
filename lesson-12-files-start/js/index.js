		/* STEP 2a: Select an element inside the DOM and store a reference to in inside a variable */
		let link = document.querySelector('a');
		/* STEP 2b: Update the text node inside the link by changing the Node.textContent property */
		link.textContent = 'MDN Homepage';
		/* STEP 2c: Change the URL by updating the href attribute node */
		link.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
		// The above DOM manipulation was possible due to document.querySelector() - other methods available include document.getElementById(), document.getElementsByClassName(), document.getElementsByTagName() and others…
		

		/* STEP 3: Creating New Nodes and Inserting Them Into the DOM
		We are familiar with the above methods as we’ve used them before in this course - so let’s now go a bit further and add other nodes */

		/* STEP 3a: Grab the SECTION element */
		let section = document.querySelector('section');
		
		/* STEP 3b: Create a new P element, and add a text node */
		let paragraph = document.createElement('p');
		paragraph.textContent = 'We hope you find MDN helpful';
		/* STEP 3c: Add this new node to the end of the nodes contained by the SECTION element */
		section.appendChild(paragraph);
		/* STEP 3d: Refresh the page in the browser and look at the updated element inspector */
		/* STEP 3e: Create a text node, and insert it into the paragraph that contains the link */
		let text = document.createTextNode('MDN is the best source for web development information on the web');
		let linkParagraph = document.querySelector('section p');
		linkParagraph.appendChild(text);

		/* STEP 4: Moving and Removing DOM Elements
		Sometimes it is necessary to move nodes of the DOM around or delete them entirely */
		/* STEP 4a: Move linkParagraph to another location in the DOM */
		section.appendChild(linkParagraph);
		/* STEP 4b: Remove the node */
		//section.removeChild()
		/* STEP 4c: Comment out the above step and remove the node directly, instead */
		//linkParagraph.remove();

		/* STEP 5: Manipulating Document Styles
		There are a number of ways of changing the visual styles of the document object */
		// paragraph.style.color ='white';
		// paragraph.style.backgroundColor='black';
		// paragraph.style.padding ='10px';
		// paragraph.style.width = '350px';
		// paragraph.style.textAlign = 'center';

		/* STEP 5a: Directly add inline CSS with the style attribute (set the value of various style properties) */

		/* STEP 5b: View the revised page in the browser and observe the revised style attribute in the affected paragraph */

		/* STEP 5c: More commonly, JavaScript is used to add/remove classes to element nodes that reference embedded or external CSS - comment out the above style properties and build the equivalent inside the attached CSS file, styles.css */

		/* STEP 5d: Add the class 'highlight' to the paragraph */
		paragraph.setAttribute('class','highlight');
		/* STEP 6: Assign the BODY to a variable */
		let body = document.querySelector('body');
		/* STEP 7: Collect the width and height of the document window */
		
		/* STEP 8: Change the border of the BODY */
		body.style.border = '10px dotted red';

		/* STEP 9: Change the height and width of the BODY to equal 75% of the document window */
		


		/* STEP 10: View the result in the browser - and try resizing the window */
		/* STEP 11: Build a function that responds to the window.onresize event and revises the size of the BODY accordingly */
		window.onresize = function(){
			let WIDTH = window.innerWidth;
			let HEIGHT = window.innerHeight;
			body.style.width =(WIDTH * 0.75) + 'px';
			body.style.height =(HEIGHT * 0.75) + 'px';
		}

		/* STEP 12: Try the improved script in the browser - watch the inline style of the DIV change with the resizing of the window in the browser dev tools */

		// Next, let’s have a bit of fun with other browser APIs (specifically the Canvas API and the requestAnimationFrame API) - open up bounce.html and follow along with the instructions...

		// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents