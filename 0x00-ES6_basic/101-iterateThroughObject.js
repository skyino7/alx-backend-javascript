export default function iterateThroughObject(reportWithIterator) {
    let employees = [];
    for (const employee of reportWithIterator) {
        employees.push(employee);
    }
    return employees.join(' | ');
}
