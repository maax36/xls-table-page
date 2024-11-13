import { useEffect } from 'react';
import * as XLSX from 'xlsx';

export function Calculation({ file, setData }) {
  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const data = {};
      let lastFullName = "";

      jsonData.forEach((row, index) => {
        if (index === 0) return;

        let [name, year, month, salary] = row;

        if (!name) {
          name = lastFullName;
        } else {
          lastFullName = name;
        }

        if (!data[name]) {
          data[name] = {
            totalSalary: 0,
            months: 0,
            name: name,
          };
        }

        data[name].totalSalary += salary;
      });

      const processedData = Object.values(data).map((employee) => {
        const averageMonthlySalary = employee.totalSalary / 12;
        const averageDailyEarnings = averageMonthlySalary / 29.3;
        const vacationPay = (averageDailyEarnings * 28).toFixed(2);

        return {
          name: employee.name,
          totalSalary: employee.totalSalary,
          vacationPay,
        };
      });

      setData(processedData);
    };

    if (file) {
      reader.readAsArrayBuffer(file);
    }

  }, [file, setData]);

}