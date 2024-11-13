import { useState } from 'react';

import { EmployeeTable } from '@/components/Table';
import { Calculation } from '@/components/Calculation';
import { Upload } from '@/components/Upload';

export default function Home() {
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);

  return (
    <main>
      <h1>Загрузка и расчет отпускных</h1>
      <Upload setFile={setFile}/>
      <Calculation file={file} setData={setData}/>
      <EmployeeTable data={data}/>
    </main>
  );
}
