import React from 'react';
import DataEntryEditor from './DataEntryEditor';
import DataEntryCreator from './DataEntryCreator';
import CataegoryDisplay from './CataegoryDisplay';

function DataListEditor(props) {
    var categories = Object.keys(props.data).filter(key => props.data[key].type == "category").map(key => ({ key: key, name: props.data[key].name }))

    var entries = Object.keys(props.data).filter(key => props.data[key].type == "entry").map(key => (
        <DataEntryEditor key={key} item={props.data[key]} categories={categories} 
            removeEntry={() => props.removeEntry(key)}
            updateEntry={(entry) => props.updateEntry(key, entry)}
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
            <div class="data-list-items-category">
                {categoriesType}
            </div>

            <div class="data-list-items">
                {entries}
            </div>
            <div>
                <DataEntryCreator addEntry={props.addEntry}  categories={categories} />
            </div>
        </div>
    );
}

export default DataListEditor;
