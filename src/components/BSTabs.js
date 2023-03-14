import React from "react";
import {Row, Tabs, Tab} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './tabStyle.css';
import './Home.js'
import './Health.js'
import './Info.js'
import './Work.js'



const BSTabs = () => {
    return (
        <Row className="justify-content-center">
            <Tabs justify variant="pills" defaultActiveKey={"tab-1"} className="mb-1 p-0">
                <Tab eventKey={"tab-1"} title="Home">
                    <Home />
                </Tab>
                <Tab eventKey={"tab-2"} title="Work">
                    Tab 2 content..
                </Tab>
                <Tab eventKey={"tab-3"} title="Health">
                    Tab 3 content..
                </Tab>
                <Tab eventKey={"tab-4"} title="Info">
                    Tab 4 content..
                </Tab>
            </Tabs>
        </Row>
    )
}

export default BSTabs;