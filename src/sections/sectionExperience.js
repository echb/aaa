import { $el } from "../utils"
import { sectionTitleComponent } from "../components/sectionTitle";
import { textLight } from "../components/text";
import { title } from "../components/title";
import './sectionExperience.css'

export const experienceSectionComponent = ({ sectionTitle = '', items = [] } = {}) => {
  const html = /*html*/`
    	<section class="experience">
          ${sectionTitleComponent(sectionTitle)}
          <div class="jobs">
            ${items.map((e) => `
                <div class="company">
                  <div>
                    <a href="${e.url}" target="blank">
                      ${title(e.name, true)}
                    </a>
                    <span>${e.date}</span>
                  </div>
                  ${textLight(e.role, true)}
                </div>
              `).join('')}
            <a class="resume" href="CV_English.docx.pdf" target="blank" style="display: none";>View My Resume👉</a>
          </div>
      </section>
  `;

  const skillComponent = $el({ template: html })
  return skillComponent
}