import styles from '../styles/usertable.module.css';

export function EmployeeTable({ data }) {
    return (
        <>
            {data.length > 0 && (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ФИО</th>
                            <th>Общий заработок (за год)</th>
                            <th>Отпускные</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.totalSalary} руб.</td>
                                <td>{row.vacationPay} руб.</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}