import React, { useMemo } from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  const language = [
    { bahasa: 'HTML', level: 'Advanced', },
    { bahasa: 'CSS', level: 'Advanced', },
    { bahasa: 'PHP', level: 'Advanced', },
    { bahasa: 'Javascript', level: 'Advanced', },
    { bahasa: 'React.JS', level: 'Advanced', },
  ];

  const toolsLanguage = [
    { tools: 'Sourcetree', level: 'Advanced' },
    { tools: 'Github', level: 'Advanced' },
    { tools: 'Navicat', level: 'Advanced' },
    { tools: 'Postman', level: 'Advanced' },
  ];

  const libraryLanguage = [
    { label: "TailwindCSS", level: "Advanced", },
    { label: "Bootstrap 5", level: "Advanced", },
    { label: "Ant Design", level: "Advanced", },
    { label: "Hook", level: "Advanced", },
    { label: "Redux", level: "Advanced", },
  ]

  const IsiArticleLanguage = () => {
    return (
      <>
        {language.map((item, index) => (
          <article key={index} className='experience__details'>
            <BsPatchCheckFill />
            <h4>{item.bahasa}</h4>
            <small>{item.level}</small>
          </article>
        ))}
      </>
    )
  }

  const IsiArticleLibrary = () => {
    return (
      <>
        {libraryLanguage.map((library, index) => (
          <article key={index} className='experience__details'>
            <BsPatchCheckFill />
            <h4>{library.label}</h4>
            <small>{library.level}</small>
          </article>
        ))}
      </>
    )
  }

  const IsiArticleTools = () => {
    return (
      <>
        {toolsLanguage.map((item, index) => (
          <article key={index} className='experience__details'>
            <BsPatchCheckFill />
            <h4>{item.tools}</h4>
            <small>{item.level}</small>
          </article>
        ))}
      </>
    )
  }

  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__language">
          <h3>Language Programming</h3>
          <div className="experience__content">
            <IsiArticleLanguage />
          </div>
        </div>

        <div className="experience__library">
          <h3>Library Language</h3>
          <div className="experience__content">
            <IsiArticleLibrary />
          </div>
        </div>

        <div className="experience__tools">
          <h3>Tools Language</h3>
          <div className="experience__content">
            <IsiArticleTools />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience