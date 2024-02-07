
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/videoslice';

const FilterContainer = () => {
    const dispatch = useDispatch();

    const setFilterHandler = (filter) => {
        dispatch(setFilter(filter));
    };

    return (
        <div>
            
            
        </div>
    );
};

export default FilterContainer;