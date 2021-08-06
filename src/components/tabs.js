const Tabs = (topics) => {
	// TASK 3
	// ---------------------
	// Implement this function which takes an array of strings ("topics") as its only argument.
	// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
	// then the function returns the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	// <div class="topics">
	//   <div class="tab">javascript</div>
	//   <div class="tab">bootstrap</div>
	//   <div class="tab">technology</div>
	// </div>
	//

	const div = document.createElement('div');
	const div1 = document.createElement('div');
	const div2 = document.createElement('div');
	const div3 = document.createElement('div');

	div.appendChild(div1);
	div.appendChild(div2);
	div.appendChild(div3);

	div.classList.add('topics');
	div1.classList.add('tab');
	div2.classList.add('tab');
	div3.classList.add('tab');

	div1.textContent = topics[0];
	div2.textContent = topics[1];
	div3.textContent = topics[2];

	return div;

}

const tabsAppender = (selector) => {
	const dataFromApi = { "topics": ["javascript", "bootstrap", "technology", "jquery", "node.js"] };
	const selectorElement = document.querySelector(selector);
	const elements = tabs(dataFromApi.topics);
	elements.forEach((element) => {
		selectorElement.appendChild(element)
	})

	const tabs = ((topics) => {
		const elements = topics.map(() => {
			return document.createElement("div");
		});
		elements.forEach((element, index) => {
			element.textContent = dataFromApi.topics[index];
			element.classList.add("tab");
		})
		return elements;
	})
}


export { Tabs, tabsAppender }
