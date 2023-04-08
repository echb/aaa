import { $el } from "../utils"
import { sectionTitleComponent } from "../components/sectionTitle";
import { textLight } from "../components/text";
import { title } from "../components/title";
import './sectionProjects.css'
const css = /*html*/`
  <style>
    .projects {
      display: flex;
    }
    @media screen and (max-width: 768px) {
      .projects {
        flex-direction: column;
      }
    }
    .job {
      display: flex;
      word-break: break-word;
      margin-bottom: 100px;
    }
    .job div {
      overflow: hidden;
      border-radius: 5px;
    }
    @media screen and (max-width: 768px) {
      .job {
        flex-direction: column;
        align-items: center;
        margin-bottom: 70px;
        padding-left: 50px;
      }
    }
    .image {
      display: block;
      max-width: 100%;
      transition: transform 0.5s ease-out;
    }
    .image:hover {
      transform: scale(1.1);
    }
    .projec_description {
      margin: 0;
      max-width: 170px;
      width: 100%;
      padding-left: 20px;
    }
    @media screen and (max-width: 768px) {
      .projec_description {
        padding-left: 0;
        max-width: initial;
      }
    }
    .projec_description a {
      display: inline-block;
      color: inherit;
      text-decoration: none;
      margin: 0;
      font-weight: 600;
      font-size: 19px;
      text-transform: capitalize;
    }
    @media screen and (max-width: 768px) {
      .projec_description a {
        padding-top: 25px;
      }
    }
    .projec_description p {
      margin: 0;
    }
    @media screen and (max-width: 768px) {
      .projec_description p {
        padding-top: 10px;
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
`

export const projectsSectionComponent = ({ sectionTitle = '', items = [] } = {}) => {
  const html = /*html*/`
    	<section class="projects">
        ${sectionTitleComponent(sectionTitle)}
        <div>
          ${items.map((e) => `
          <div class="job">
              <div>
                <a href="${e.url}" target="blank">
                  <img class="image" src="${e.img}" alt="${e.name}" />
                </a>
              </div>
              <figcaption class="projec_description">
                <a href="${e.url}" target="blank">
                  <span> ${e.name} </span>
                </a>
                ${textLight(e.description)}
              </figcaption>
            </div>
            `).join('')}
        </div>
    </section>
  `;

  const skillComponent = $el({ template: html })
  return skillComponent
}