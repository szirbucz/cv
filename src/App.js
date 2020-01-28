import React, { Component } from 'react';
import ParagraphHeader from './ParagraphHeader.js'
import Workspace from './Workspace.js'
import Expertise from './Expertise.js'
import './App.css';

class App extends Component {
  render() {
      let expertise=['Java', 'Spring Framework', 'Spring Data', 'Spring Security', 'JPA', 'JUnit', 'MySQL', 'MongoDB', 'HA-Proxy', 'Hazelcast', 'Kafka', 'AngularJS', 'ReactJS', 'Selenium', 'Performance optimization', 'GDPR', 'Clean Code', 'Object Oriented Design', 'Architecture Design', 'Continous Deployment', 'HTML5', 'CSS3', 'Agile', 'Kanban'];
      let epamAchievements=[
        {project: 'I led the development of a performance review tool with Java Spring based back-end and AngularJS based front-end. We used Kanban methodology and continous deployment with Unit-, Integration-, E2E- and manual tests, static analysis, code coverage, style check and code review in its pipeline. We worked in cooperation with remote QA team and management.',
        achievements: [
        'Massive performance improvement',
        'GDPR compliance',
        'Extend CD pipeline with Unit test coverage',
        'Introduced Apache Kafka and moved all external APIs to it',
        'Change JSP parts to Angular front-end'
        ]}
      ];
      let balasysAchievements=[{project: 'Application layer proxy firewall',
          achievements: [
            'Improvement of the user interface (GTK)',
            'Extended in-house build tool with useful features',
            'Found a "wrong size of NULL" bug in a Linux kernel lib',
            'Worked on Content Vectoring interface.'
          ]}
      ];
      let htcAchievements=[{project: 'Development of GCC compiler backends for several embedded architectures.',
          achievements: [
            'Implement XML export of linker map and objdump',
            'Introduced instruction set of new CPU version into our assembler',
            'Developed compile time optimizations'
          ]}
      ];
      let hthAchievements=[{project: 'Development of GCC compiler backends for several embedded architectures.',
          achievements: [
            'Introduced support of new CPU vendor',
            'Actively participated in the ISO-26262 audit of the tool'
          ]}
      ];
      let sedAchievements=[
          {project: 'Implement Procedural Abstraction compiler optimization',
          achievements: [
              '10-20% less binary size on popular open source projects.'
          ]},
          {project: 'Multifloor blueprint display integration with Open Street Maps',
          achievements: [
              'C# & ASP.Net administration module for add and set position of blueprints',
              'Extended JS Map tool with controller for changing floors'
          ]},
          {project: 'Development of Webkit browser engine',
          achievements: [
              'JIT optimizations',
              'Performance measurement'
          ]},
          {project: 'Sensor network for check state of floodlight',
          achievements: [
              'Kernel module for own sensor HW',
              'Bash scripts to collect sensor data from several nodes into one XML'
          ]}
      ];

    return (
      <div className="App">
        <div class="header">
        <div class="profile-pic">
            <img src="me.jpg"/>
        </div>
        <div class="name">Tamás Szirbucz - <span class="title">Freelance Software Engineer</span></div>
        <div class="intro">I started my career as Software Engineer in 2008. I gained experience in several fields: embedded systems, compilers, IT security and web application development. On my last workplace I worked as a Lead Java Engineer, where I had the chance to improve my leadership skills as well.<br/>
        I'm a freak of code quality and performance, therefore I always take care about testing and measurement, since what is not measured, can not be controlled. </div>
        <div class="contacts">
            <div class="email"><img class="icon mail" src="mail.png"/>szirbucz.tamas@gmail.com</div>
            <div class="phone"><img class="icon phone" src="phone.png"/>+36 70 411 3157</div>
            <div class="skype"><img class="icon skype" src="skype.png"/>szirbucz.tamas</div>
        </div>
        <div class="java-logo">
            <img class="logo" src="java.png"/>
        </div>
        </div>
        <Expertise skills={expertise}/>
        <div class="paragraph">
            <ParagraphHeader>Work Experience</ParagraphHeader>
            <Workspace name="EPAM Systems" start="2016-05-02" end="2018-10-31" 
                title="Lead Software Engineer" achievements={epamAchievements}/>
            <Workspace name="Balasys IT Security Kft" start="2014-09-01" end="2016-04-29" 
                title="Software Engineer" achievements={balasysAchievements}/>
            <Workspace name="Hightec EDV-Systeme GmbH" start="2013-09-01" end="2014-07-31" 
                title="Software Engineer" achievements={htcAchievements}/>
            <Workspace name="Hightec Hungary Kft" start="2011-03-01" end="2013-08-30"
                title="Software Engineer" achievements={hthAchievements}/>
            <Workspace name="Department of Software Engineering, University of Szeged" start="2008-05-05" end="2011-02-28"
                title="Software Engineer" achievements={sedAchievements}/>

        </div>
        <div class="paragraph">
            <ParagraphHeader>Education & Training</ParagraphHeader>
            <div class="workspace">
                <h3>Program Designer Mathematician, Master
                    <span class="title"> - University of Szeged</span>
                    <span class="date"> (2005-2011)</span>
                </h3>
                <ul>
                    <li>Java, C/C++, C#, HTML, CSS, XML</li>
                    <li>Databases (SQL, PL/SQL, normalization)</li>
                    <li>Software Engineering Processes</li>
                    <li>Formal Languages and Automata</li>
                    <li>Artificial Intelligence</li>
                    <li>Image Processing</li>
                </ul>
            </div>
            <div class="workspace">
                <h3>Doctoral School of Computer Science, PhD
                    <span class="title"> - University of Szeged</span>
                    <span class="date"> (2011-2014)[unfinished]</span>
                </h3>
                <ul>
                    <li>Software Metrics</li>
                    <li>Reverse Engineering</li>
                    <li>Refactoring</li>
                    <li>Machine Learning</li>
                    <li>Natural Language Processing</li>
                    <li>Teaching experience:
                        <ul>
                            <li>Programming Languages (Smalltalk, Haskell, Prolog, Occam)</li>
                            <li>Basics of Programming (C)</li>
                            <li>Operating Systems (Bash & Bat scripting)</li>
                            <li>Parallel Programming (Java concurrency, Occam, PVM)</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="workspace">
                <h3>Java Academy
                    <span class="title"> - EPAM Systems</span>
                    <span class="date"> (2016)</span>
                </h3>
                <ul>
                    <li>Java fundamentals</li>
                    <li>Spring Framework / MVC / Data / Security</li>
                    <li>Hibernate, JPA, SQL</li>
                    <li>OOP Design Patterns and Principles</li>
                    <li>Web Application Development</li>
                    <li>Building Web Services</li>
                    <li>Unit testing, Mocking, TDD</li>
                    <li>Clean Code</li>
                    <li>Agile Methodologies</li>
                    <li>Front-End technologies</li>
                    <li>Version Control and CI</li>
                </ul>
            </div>
            <div class="workspace">
                <h3>Introduction to Management
                    <span class="title"> - EPAM Systems</span>
                    <span class="date"> (2017)</span>
                </h3>
                <ul>
                    <li>Leadership and Team Building</li>
                    <li>Motivation</li>
                    <li>Time Management</li>
                    <li>Negotiation</li>
                    <li>Project and Delivery Management</li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
