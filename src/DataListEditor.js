import React from 'react';
import DataEntryEditor from './DataEntryEditor';
import DataEntryCreator from './DataEntryCreator';
import CataegoryDisplay from './CataegoryDisplay';
import UpdatesDisplay from './UpdatesDisplay';
import DataUpdateCreator from './DataUpdateCreator';

function DataListEditor(props) {
    var categories = Object.keys(props.data).filter(key => props.data[key].type == "category").map(key => ({ key: key, name: props.data[key].name }))

    var entries = Object.keys(props.data).filter(key => props.data[key].type == "entry").map(key => (
        <DataEntryEditor key={key} item={props.data[key]} categories={categories} 
            removeEntry={() => props.removeEntry(key)}
            updateEntry={(entry) => props.updateEntry(key, entry)}
        />
    ));

    var updates = Object.keys(props.dataUpdates).filter(key => props.dataUpdates[key]).map(key => (
        <UpdatesDisplay key={key} item={props.dataUpdates[key]}
            removeUpdate={() => props.removeUpdate(key)}
            updateUpdate={(entry) => props.updateUpdate(key, entry)}

            
        />
    ));

    var alerts = Object.keys(props.dataAlerts).filter(key => props.dataAlerts[key]).map(key => (
        <UpdatesDisplay key={key} item={props.dataAlerts[key]}
            removeAlert={() => props.removeAlert(key)}
            updateAlert={(entry) => props.updateAlert(key, entry)}

            
        />
    ));

    var categoriesType = Object.keys(props.data).filter(key => props.data[key].type == "category").map(key => (
        <CataegoryDisplay key={key} item={props.data[key]} categories={categories} data={props.data}
            removeEntry={() => props.removeEntry(key)}
            updateEntry={(entry) => props.updateEntry(key, entry)}

            
        />
    ));


    return (
        <div class="data-list-editor">
            <h2>
                <br>
                </br>
                <b>Updates</b>
                </h2>
            <div class="data-list-items-category">
                {updates}
            </div>
            
            <h2>
                <br>
                </br>
                <b>Alerts</b>
                </h2>
            <div class="data-list-items-category">
                {alerts}
            </div>

                <h2>
                <br>
                </br>
                <b>Categories</b>
                </h2>
            <div class="data-list-items-category">
                {categoriesType}
            </div>
                <h2>
                <br>
                </br>
                <b>Entries</b>
                </h2>
            <div class="data-list-items">
                {entries}
            </div>
            <div>
            <h2>
                <br>
                </br>
                <b>Add Entry or Category</b>
                </h2>
                <DataEntryCreator addEntry={props.addEntry}  categories={categories} />
            </div>
            <div>
            <h2>
                <br>
                </br>
                <b>Add Alert or Update</b>
                </h2>
                <DataUpdateCreator addAlert={props.addAlert}  addUpdate={props.addUpdate} />
            </div>
        </div>
    );
}

export default DataListEditor;
