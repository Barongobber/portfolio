/*
    File: DateTimeStamp.jsx
    Author: Baron Gobi
    Copyright: 2024 - Baron Gobi
    Version: 1.0
*/

import PropTypes from 'prop-types';
import {
    isDateValid,
    formatDateForTimeTag
} from '../utils/date';

DateTimeStamp.propTypes = {
    date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
}

export default function DateTimeStamp({ date }) {
    if (isDateValid(date)) {
        return (
            <time dateTime={date.toISOString().substr(0, 7)}>{formatDateForTimeTag(date)}</time>
        );
    }

    return (
        <span>{date}</span>
    );
}