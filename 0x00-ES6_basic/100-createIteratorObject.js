export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      const departments = Object.keys(report.allEmployees);
      for (const department of departments) {
        for (const employee of report.allEmployees[department]) {
          yield employee;
        }
      }
    },
  };
}
