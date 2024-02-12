import React, { useState, useEffect } from 'react';
import { TreeSelect } from 'antd';

const treeData = [

{
    title: 'UAE',
    value: '0-0',
    children: [
      {
        title: 'Abu Dhabi',
        value: '0-0-0',
        
      },
    ],
  },
  {
    title: 'USA',
    value: '0-1',
    children: [
      {
        title: 'Washington',
        value: '0-1-0',
        
      },
      {
        title: 'Los Angeles',
        value: '0-1-1',
         
      },
      {
        title: ' New York',
        value: '0-1-2',
         
      },
    ],
  },
  {
    title: 'Austria',
    value: '0-2',
    children: [
      {
        title: 'Vienna',
        value: '0-2-3',
         
      },
      {
        title: 'Canberra',
        value: '0-2-4',
         
      },
      {
        title: 'Sydney',
        value: '0-2-5',
        
      },
    ],
  },  
];
                                 
                     
     
const App = () => {
  const [value, setValue] = useState(['0-0-0']);
  const [selectedCount, setSelectedCount] = useState(1);  

  const onChange = (newValue) => {
    setValue(newValue);
    setSelectedCount(newValue.length);
  };

  const filterTreeNode = (inputValue, treeNode) => {
    const title = treeNode.props.title.toLowerCase();
    return title.includes(inputValue.toLowerCase());
  };

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    placeholder: 'Please select', 
    showSearch: true, 
    filterTreeNode,  
    style: {
      width: '20%',
    },
  };
  return (
    <div> 
        <p>  {selectedCount}Selected</p>
      <TreeSelect value={selectedCount}   {...tProps} />
     
    </div>
  );
};
export default App;
