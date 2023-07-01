import React from 'react';

const Filter = ({ value, onChange }) => {
    //const [filter, setFilter] = useState('')
    return(
        <div>
        filter shown with <input value={value} onChange={onChange} />
        </div>
    )}
export default Filter