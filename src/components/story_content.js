import React from "react";
import { render } from "react-dom";
import RS from "react-sanfona";
import StoryMedia from "./story_media";

class StoryContent extends React.Component {
  render () {
    return (
      <div id="story-content">
        <RS.Accordion>
          <RS.AccordionItem title="Building Info">
            Owner: {this.props.story.owner}
          </RS.AccordionItem>
          <RS.AccordionItem title="Media">
            <StoryMedia {...this.props} />
          </RS.AccordionItem>
        </RS.Accordion>
      </div>
    );
  }
}

export default StoryContent;
