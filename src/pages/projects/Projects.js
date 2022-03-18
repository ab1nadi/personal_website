import React from 'react'
import './projects.css';

export default class Projets extends React.Component{

render() {

  return (
      <div className="projects">
          <div className="projects_box"> 
              <div className="projects_title">Projects</div>
              <div className="projects_box_content">
                    <ProjectsItem value="Sudoku Website,  2021" />
                        <ProjectsSubItem value="Built with: Webpack, HTML, CSS, and Javascript."></ProjectsSubItem>
                        <ProjectsSubItem value="Can generate puzzles of a chosen difficulty, that are playable"></ProjectsSubItem>
                        <ProjectsSubItem value="Code here: " href="https://github.com/ab1nadi/sudoku.git"></ProjectsSubItem>
                        <ProjectsSubItem value="Running here: " href="https://ab1nadi.github.io/sudoku"></ProjectsSubItem>

                    <ProjectsItem value="SpaceX API Demo Site, 2021" />
                        <ProjectsSubItem value="Built with: Vue.js, axios.js, and lodash.js."></ProjectsSubItem>
                        <ProjectsSubItem value="Consumes the spaceX api."></ProjectsSubItem>
                        <ProjectsSubItem value="Code here: " href="https://github.com/ab1nadi/spaceX_API_Demo.git"></ProjectsSubItem>
                        <ProjectsSubItem value="Running here: " href="https://ab1nadi.github.io/spaceX_API_Demo/"></ProjectsSubItem>
                   
                    <ProjectsItem value="Database, 2021" />
                        <ProjectsSubItem value="Built with: C++"></ProjectsSubItem>
                        <ProjectsSubItem value="This was a school project, so I can't post the code. But, I can show it upon request"></ProjectsSubItem>
                        <ProjectsSubItem value="Built a B++ tree that stores tuples, and they are persistent on disk"></ProjectsSubItem>
                        <ProjectsSubItem value="Built a B++ tree that stores tuples, and they are persistent on disk"></ProjectsSubItem>

                    <ProjectsItem value="RISC CPU Emulator, 2019" />
                        <ProjectsSubItem value="Built with: C++"></ProjectsSubItem>
                        <ProjectsSubItem value="This was a school project, so I can't post the code. But, I can show it upon request"></ProjectsSubItem>
                        <ProjectsSubItem value="Runs a RISC based assembly provided by the teacher"/>
                        <ProjectsSubItem value="At one point it was multithreaded. And currently has support for a function call stack and heap"/>
                    
                    <ProjectsItem value="Compiler, 2019" />
                        <ProjectsSubItem value="Built with: C++"></ProjectsSubItem>
                        <ProjectsSubItem value="This was a school project, so I can't post the code. But, I can show it upon request"></ProjectsSubItem>
                        <ProjectsSubItem value="Compiles an object-oriented Java-like language into the same assembly that runs in the RISC CPU emulator."></ProjectsSubItem>
                        <ProjectsSubItem value="It has scoped variables, uses a function call stack, classes, a heap. Its pretty cool. And still a little buggy."></ProjectsSubItem>
                    
                    <ProjectsItem value="This Website, 2022" />
                        <ProjectsSubItem value="Built with: react.js and Three.js"></ProjectsSubItem>
                        <ProjectsSubItem value="Code here:" href="https://github.com/ab1nadi/personal_website.git"/>

                    <ProjectsItem value="The rubiks cube on this website, 2022" />
                        <ProjectsSubItem value="Built with: Three.js"></ProjectsSubItem>
                        <ProjectsSubItem value="It was a fun little projrect."></ProjectsSubItem>
                        <ProjectsSubItem value="code here:" href="https://github.com/ab1nadi/rubiks.git"/>
    
                    <ProjectsItem value="Eureka Roofing Website, 2022" />
                        <ProjectsSubItem value="Built with: react.js and parse-server backend"></ProjectsSubItem>
                        <ProjectsSubItem value="I made this website for my Dads business."></ProjectsSubItem>
                        <ProjectsSubItem value="hosted here:" href="https://eurekaroofingutah.com"/>

             </div>
          </div>
      </div>
  );
}

}

function ProjectsItem(props)
{
    return <div className="projects_box_item">+ {props.value}</div>
}

function ProjectsSubItem(props)
{
    if(!props.href)
        return <div className="projects_box_sub_item">- {props.value}</div>
    else
        return <div className="projects_box_sub_item project_link">- {props.value} <a href={props.href}>{props.href}</a></div>
}
