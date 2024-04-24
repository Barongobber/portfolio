/*
    File: uniqueid.js
    Author: Baron Gobi
    Copyright: 2024 - Baron Gobi
    Version: 1.0
*/

let uniqueId = 0;

export default function getUniqueId(prefix = 'id') {
    uniqueId++;
    return `${prefix}${uniqueId}`;
}