import { $el } from "../utils";
import './sectionIntroduction.css'
import { socialComponent } from "./socialSection";

const introductionHtml = /*html*/`
	<div class="header">
		<h1>Hello</h1>
		<h2>
			I'm <span>Emmanuel Correa</span>, a front-end focused developer with
			design skills capable of bringing a ui design to life.
		</h2>
		<div class="contact">
			<div>
				Get in touch <span class="hand">👉</span>
				<a class="email" href="mailto:ech.emmanuel.ch@gmail.com">Email</a>
			</div>
			${socialComponent.innerHTML}
		</div>
	</div>
`;
const component = $el({ template: introductionHtml })
export default component