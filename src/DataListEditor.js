import React from 'react';
import DataEntryEditor from './DataEntryEditor';
import DataEntryCreator from './DataEntryCreator';

function DataListEditor(props) {
    var entries = Object.keys(props.data).map(key => (
        <DataEntryEditor key={key} item={props.data[key]}
                        removeEntry={()=>props.removeEntry(key)}
                        updateEntry={(entry)=>props.updateEntry(key, entry)}
                        />
    ));
    var addEntry = ( <DataEntryCreator addEntry={(entry) => props.addEntry(entry)} />);
    return (
        <div class="data-list-editor">
            <div class="data-list-items">
                {entries}
            </div>
            <div>
               { addEntry}
            </div>
        </div>
    );
}

export default DataListEditor;
