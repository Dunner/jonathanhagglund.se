import React from "react";
import { Link } from "react-router";

import projectStore from "../data/projectStore"

export default class Home extends React.Component {

  render() {
    let showcase = projectStore.getProjects(5).map((obj, i) => (
      <div class="w-15 spacer-bottom-big" key={i}>
        <Link to={'projects/'+obj.slug} class="project-preview" title={obj.title}>
          <div class="aspect-outer pt100">
            <div class="aspect-inner project-preview-circle"
                 style={{
                  backgroundColor: obj.thumbColor
                 }}/>
          </div>
          <div class="project-image-small spacer-bottom-medium" 
               style={{
                 backgroundImage: 'url('+obj.thumbURL+')'
                }}/>
          <div class="project-preview-text">
            {obj.name}
          </div>
        </Link>

      </div>
    ));

    return (
      <div>
        <section class="intro">
          En logiskt vacker approach till <br />
          webbutveckling med användaren i fokus. <br/>
          Här finner du information <Link class="underline" to="about">om mig</Link> <br/>
          och mina <Link class="underline" to="projects">företaganden</Link>.
        </section>

        <section class="float divider">
          <h2 class="w-15 muted">Projekt</h2>
          <div class="w-85 float">
            {showcase}

            <div class="w-15 spacer-bottom-big">

                <Link to="projects" class="project-more">
                  <div class="aspect-outer pt100">
                    <div class="aspect-inner project-preview-circle"
                         style={{backgroundColor: 'transparent'}} />
                  </div>
                  <div class="project-image-more spacer-bottom-medium"/>
                  <div class="project-preview-text">
                    Mer
                  </div>
                </Link>

            </div>
          </div>

        </section>

      </div>
    );
  }
}

/*
let twoProjects = projectStore.getProjects(2).map((obj, i) => (
  <div class="w-50 spacer-bottom-big" key={i}>
    <Link to={'projects/'+obj.slug}>
      <div class="project-image spacer-bottom-medium" 
          style={{
            backgroundImage: 'url('+obj.thumbURL+')'
          }}/>
    </Link>

    <h3 class="spacer-bottom-small">
      <Link to={'projects/'+obj.slug} class="underline">
        {obj.name}
      </Link>
    </h3>
    {obj.shortDescription}
    
  </div>
));
*/


/*
<section class="float divider">
  <h2 class="w-20 muted">Jobbar med</h2>
  <div class="w-80 step-in">

    <div class="float spacer-bottom-medium">
      <div class="w-50">SaaS pagebuilder</div>
      <div class="w-25 muted">Startup</div>
      <div class="w-25 muted">Sent 2016</div> 
    </div>

    <div class="float spacer-bottom-medium">
      <div class="w-50">UX & Marknadsföring</div>
      <div class="w-25 muted">Utbildning</div>
      <div class="w-25 muted">Sent 2016</div> 
    </div>

  </div>
</section>
*/