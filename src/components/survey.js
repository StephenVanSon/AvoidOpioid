import {Survey, SurveyModel} from 'survey-react';
import React from 'react';

Survey.cssType = "bootstrap";

var survey = new SurveyModel({
    title: "Drug Kit Survery",
    pages: [
        { type: "checkbox", name: "yes/no", title: "In relation to their skin are they:", isRequired: true,
            colCount: 2, choices: ["Warm", "Hot", "Cold", "Sweaty", "Pale", "Seems Normal"] },
        { type: "checkbox", name: "yes/no", title: "Their pulse rate:", isRequired: true,
            colCount: 2, choices: ["Increased", "Decreased", "There is None", "Doesn't seem to be affected"] },
        { type: "checkbox", name: "yes/no", title: "In relation to consciousness are they:", isRequired: true,
            colCount: 2, choices: ["Drowsy", "Confused", "Having a seizure", "Not conscious", "Not affected"] },
        { type: "checkbox", name: "yes/no", title: "Does their breathing seem:", isRequired: true,
            colCount: 2, choices: ["Rapid", "Slow", "Deep", "Shallow", "Not affected"] },
        { type: "checkbox", name: "yes/no", title: "Do they show signs of:", isRequired: true,
            colCount: 2, choices: ["Nausea", "Vomitting", "Diahrrea", "None of these apply",] }

    ]
});

function doOnCurrentPageChanged(survey) {
    document.getElementById('surveyPrev').style.display = !survey.isFirstPage ? "inline" : "none";
    document.getElementById('surveyNext').style.display = !survey.isLastPage ? "inline" : "none";
    document.getElementById('surveyComplete').style.display = survey.isLastPage ? "inline" : "none";
    document.getElementById('surveyProgress').innerText = "Page " + (survey.currentPage.visibleIndex + 1) + " of " + survey.visiblePageCount + ".";
    if(document.getElementById('surveyPageNo')) document.getElementById('surveyPageNo').value = survey.currentPageNo;
}


const SurveyView = React.createClass({
    render(){
        return(
            <Survey model={survey} onCurrentPageChanged={doOnCurrentPageChanged}/>
        )
    }
});

export default SurveyView;

// ReactDOM.render(<Survey.Survey model={survey} onCurrentPageChanged={doOnCurrentPageChanged} />, document.getElementById("surveyElement"));
// doOnCurrentPageChanged(survey);