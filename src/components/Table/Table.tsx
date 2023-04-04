import clsx from 'clsx';
import { useState } from 'react';
import styles from './Table.module.css'

export function Table({ sets }: any) {
  const checkboxStatus = sets.map(({ complete }: any) => complete);
  
  const [checkboxes, setCheckboxes] = useState(checkboxStatus);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Set</th>
            <th>Kg</th>
            <th>Rep</th>
            <th>✔</th>
          </tr>
        </thead>
        <tbody>
          {
            sets.map(({ set, kg, rep }: any, index: any) => {
              return (
                <tr key={index} className={clsx( styles.row, checkboxes[index] && styles.complete )}>
                  <td>{ set }</td>
                  <td>{ kg }</td>
                  <td>{ rep }</td>
                  <td>
                    <input 
                      name="complete" 
                      type="checkbox" 
                      checked={checkboxes[index]}
                      onChange={(event) => {
                        const newCheckboxes = [...checkboxes];
                        newCheckboxes[index] = event.target.checked;
                        setCheckboxes(newCheckboxes);
                      }}
                    />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}