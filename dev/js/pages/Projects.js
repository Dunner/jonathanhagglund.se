import React from "react";
import { Link } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import projectStore from "../data/projectStore"

export default class Projects extends React.Component {
  render() {
    const { location, params } = this.props;
    const key = location.pathname;
    const { projectParam } = params;

    let pageContent;

    let categoryProjects = {'bigserious': [], 'freelance': [], 'fun': []};
    let categoryProjectsDOM = {'bigserious': [], 'freelance': [], 'fun': []};
    let projects = projectStore.getProjects();
    for (var project of projects) {
      categoryProjects[project.type].push(project);
    }
    
    for (var category in categoryProjects) {

      categoryProjectsDOM[category] = categoryProjects[category].map((obj, i) => (
        <div 
          class={projectParam == obj.slug ? 'active' : 'w-25 spacer-bottom-small'}
          key={i}>
          <Link to={'/projects/'+obj.slug}
                class={projectParam ? 'sidebar-project-hold-left' : ''}>
            <div class={projectParam ? 'aspect-outer pt100 spacer-bottom-medium' : 'aspect-outer pt130 spacer-bottom-medium'}>
              <div class="aspect-inner">
                <div class="project-image" 
                   style={{
                     backgroundImage: 'url('+obj.thumbBigURL+')'
                   }}/>
              </div>
            </div>
          </Link>
          <Link to={'/projects/'+obj.slug} 
                class={projectParam ? 'sidebar-project-pop-right' : 'project-description'}>
            <h3>
                {obj.name}
            </h3>
            {obj.title}
          </Link>
        </div>
      ));
    }

    pageContent = (
      <section>

        <div>
          <h2 class={projectParam ? 'hide' : 'intro'}>
            Något om projekt
          </h2>
          <div class={projectParam ? '' : 'hide'}>
            <h2 class="muted spacer-bottom-small">
              Andra projekt
            </h2>
            <div class="" />
          </div>
        </div>

        <section >
          <div class="w-100 float">

            {categoryProjectsDOM['bigserious']}
            {categoryProjectsDOM['freelance']}
            {categoryProjectsDOM['fun']}

          </div>
        </section>

      </section>
    );

    return ( //style={{overflow:'hidden'}}
      <div class="float projects-wrapper"> 

        <div class={projectParam ? 'view-project' : 'view-project hide'}>
          <ReactCSSTransitionGroup
            component="div"
            className="view-project-transition"
            transitionName="view-project-transition"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={300}>
            {React.cloneElement(this.props.children || <div/>, { key, location })}
          </ReactCSSTransitionGroup>
        </div>

        <div class={projectParam ? 'projects-sidebar' : ''}>
          {pageContent}
        </div>

      </div>
    );

  }
}

