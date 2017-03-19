import {Survey, SurveyModel} from 'survey-react';
import React from 'react';

Survey.cssType = "bootstrap";


// var survey = new SurveyModel({ questions: [
//     { type: "checkbox", name: "yes/no", title: "In relation to their skin are they:", isRequired: true,
//      colCount: 2, choices: ["Warm", "Hot", "Cold", "Sweaty", "Pale", "Seems Normal"] }
//]});
// var survey = new SurveyModel({ questions: [
//     { type: "checkbox", name: "yes/no", title: "Their pulse rate:", isRequired: true,
//      colCount: 2, choices: ["Increased", "Decreased", "There is None", "Doesn't seem to be affected"] }
//
// ]});
// var survey = new SurveyModel({ questions: [
//     { type: "checkbox", name: "yes/no", title: "In relation to consciousness are they:", isRequired: true,
//      colCount: 2, choices: ["Drowsy", "Confused", "Having a seizure", "Not conscious", "Not affected"] }
// ]});
// var survey = new SurveyModel({ questions: [
//     { type: "checkbox", name: "yes/no", title: "Does their breathing seem:", isRequired: true,
//      colCount: 2, choices: ["Rapid", "Slow", "Deep", "Shallow", "Not affected"] }
//
// ]});
var survey = new SurveyModel({ questions: [
    { type: "checkbox", name: "yes/no", title: "Do they show signs of:", isRequired: true,
     colCount: 2, choices: ["Nausea", "Vomitting", "Diahrrea", "None of these apply",] },
    { type: "checkbox", name: "yes/no", title: "Does their breathing seem:", isRequired: true,
        colCount: 2, choices: ["Rapid", "Slow", "Deep", "Shallow", "Not affected"] },
    { type: "checkbox", name: "yes/no", title: "In relation to consciousness are they:", isRequired: true,
        colCount: 2, choices: ["Drowsy", "Confused", "Having a seizure", "Not conscious", "Not affected"] },
    { type: "checkbox", name: "yes/no", title: "Their pulse rate:", isRequired: true,
        colCount: 2, choices: ["Increased", "Decreased", "There is None", "Doesn't seem to be affected"] },
    { type: "checkbox", name: "yes/no", title: "In relation to their skin are they:", isRequired: true,
        colCount: 2, choices: ["Warm", "Hot", "Cold", "Sweaty", "Pale", "Seems Normal"] }



]});

const SurveyView = React.createClass({
  render(){
    return(
      <Survey model = {survey}/>
    )
  }

});

export default SurveyView;

//ReactDOM.render(<Survey.Survey model={survey} />, document.getElementById("surveyElement"));
