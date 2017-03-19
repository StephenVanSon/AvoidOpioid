import React from 'react';
import {Button,Jumbotron} from 'react-bootstrap';

const LearnMore = React.createClass({
  render(){
    return(
      <div>
        <div>
        <Jumbotron>
          <h1>Learn More About Fentanyl</h1>
            <p>You can’t see it. You can't smell it. You can't taste it.</p>
        </Jumbotron>
        </div>
        <div>
          <h2>What is Fentanyl?</h2>
            <p>You may have heard recently about a dangerous drug called fentanyl that is causing a lot of
            harm in BC and across Canada.<br></br>
            Fentanyl is an opioid (painkiller) that can be used safely when it is prescribed by a health
            professional and taken as directed. But it is also being made and sold illegally.<br></br>
            Fentanyl is very toxic. Just a small amount of fentanyl, the size of two grains of salt, can be
            deadly. Fentanyl is made and sold in many different forms and can be hiding in other drugs.
            </p>
        </div>
        <div>
          <ol>
            <h3><b>Signs of an Overdose</b></h3>
            If you are using drugs, or are with someone who has used drugs, and you or they have any of
            these symptoms call 911:<br/>
            <li>breathing is slow or not breathing at all</li>
            <li>nails and/or lips are blue</li>
            <li>choking or throwing up</li>
            <li>making gurgling sounds</li>
            <li>skin is cold and clammy</li>
            <li>you can’t wake them up</li>
          </ol>
        </div>
        <div>
          <h2>How can you help?</h2>
            <p>There are many ways that you can help in reducing the number of deaths that are caused by Fentanyl. These include:<br/>
            <ol>
              <h3><b>Talk to Kids</b></h3>
              Kids and young adults are especially vulnerable to substances since their brains are still
              developing. It is not always easy, but talking to your kids about fentanyl and other dangerous
              drugs is one of the best things you can do to keep them safe.<br/>
              <li> You can start a conversation by telling your kids you care about them and you want them to
              be safe. </li>
              <li> Ask them what they know about fentanyl and encourage open and honest communication.</li>
              <li> Tell them what you know about fentanyl</li>
              <li> Ask your kids to tell you if they are ever around drugs and let them know it is ok to say no if
              they are ever offered drugs.</li>
            </ol>
            <ol>
              <h3><b>Parent and Caregiver Responsibility</b></h3>
              As parents, you are an important influence in your kids’ lives. Although there is no guaranteed
              way to prevent drug use, there are some things you can do that we know are helpful:<br/>
              <li> Spend quality time with your kids, be involved in their lives.</li>
              <li>Encourage and support your kids to help them do well in school. Support and help your kids
              be involved in activities that build on their interest, hobbies (sports, learning, community
                activities, and leadership development). </li>
              <li> Help kids and youth understand the risks and consequences of drug use and have clear
              expectations.</li>
              <li> Support your kids to make healthy decisions and what to do if someone is pressuring them
              or their friends to use drugs. </li>
            </ol>
            <ol>
              <h3><b>Teacher Responsibility</b></h3>
              As teachers, you contribute to healthy and supportive school environments and help students
              make positive choices. Talk to your students about drugs, and promote drug-use prevention
              initiatives in your school. Prevention initiatives that have been shown to be helpful in the school
              setting include: <br/>
              <li> Student led programs</li>
              <li>programs that connect students with positive role models (mentoring)</li>
              <li>encouraging meaningful participation (student council, peer tutoring)</li>
              <li>programs that focus on life skills (social skills, managing conflict, etc.)</li>
            </ol>
            </p>
        </div>
      </div>
    )},
  })

export default LearnMore;
