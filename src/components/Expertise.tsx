import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faLayerGroup, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "The Planning Act",
    "Provincial Planning Statement",
    "Official Plans",
    "Zoning By-laws",
    "Development Review",
    "Policy Analysis",
    "Site Analysis",
    "Green Belt Growth Plan",
    "Environmental Laws",
    "Provincial Laws",
    "Growth plan",
    "ORM"
];

const labelsSecond = [
    "ArcGIS Pro",
    "ArcGIS Online",
    "AutoCAD",
    "Urban and City Engine",
    "Office 365",
    "Spatial Analysis",
    "Mapping",
    "Data Interpretation",
    "Data Visualization",
];

const labelsThird = [
    "Planning Rationale Reports",
    "Policy Writing",
    "Environmental Site Assessments",
    "Natural Heritage Evaluation Reports",
    "OP and Zoning By-law Ammendments",
    "Presentations",
    "Policy Research",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCity} size="3x"/>
                    <h3>Land Use & Development Planning</h3>
                    <p>I have worked on various projects analyzing land use policies, zoning by-laws, and development proposals, through which I familiarized myself with Provincial and Federal plans, Official Plans, zoning amendments, and interpreting planning regulations to assess development feasibility and impacts.</p>
                    <div className="flex-chips">
                        <span className="chip-title">skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLayerGroup} size="3x"/>
                    <h3>GIS & Spatial Analysis</h3>
                    <p>Strong focus on GIS-based analysis to support planning development decision-making.Made bunch of maps , can be seen in projects, for supporting planning reports justifications. Experience working with spatial datasets, Geoprocessing tools, and producing clear, professional maps layouts for analysis, repports and presentation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFileAlt} size="3x"/>
                    <h3>Planning Research & Report Writing</h3>
                    <p>Got technical writing experience through writing various in planning-related research and professional report writing, including policy reviews, background studies, and technical summaries. Skilled at synthesizing regulations, data, and spatial analysis into clear, structured reports that support planning and environmental decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;