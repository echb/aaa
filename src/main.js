import './style.css';
import intro from './sections/sectionIntroduction.js'
import toggle from './components/toggle'
import { $ } from './utils';
import { skillSetComponent } from './sections/sectionSkills';
import { jobs, projects, sideProjects, skills } from './store';
import { experienceSectionComponent } from './sections/sectionExperience';
import { projectsSectionComponent } from './sections/sectionProjects';
import { sideProjectsSectionComponent } from './sections/sectionSideProjects';
import { footerComponent } from './sections/s';

let ss = 0

const header = $({ querySelector: 'header' })
const main = $({ querySelector: 'main' })
const ui = (e) => {
	header.appendChild(toggle())
	header.appendChild(intro)
	main.appendChild(skillSetComponent({ skillTitle: 'skills'.toUpperCase(), skills: skills }))
	main.appendChild(experienceSectionComponent({ sectionTitle: 'Experience'.toUpperCase(), items: jobs }))
	main.appendChild(projectsSectionComponent({ sectionTitle: 'Projects'.toUpperCase(), items: projects }))
	main.appendChild(sideProjectsSectionComponent({ sectionTitle: 'Side Projects'.toUpperCase(), items: sideProjects }))
	main.appendChild(footerComponent)
}
ui()