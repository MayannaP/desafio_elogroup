import { useState, useCallback } from 'react'
import { Dustbin } from './Dustbin'
import { useDrag } from 'react-dnd'

const styleBox = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

export function Box({ name, type, isDropped }) {
  const [, drag] = useDrag(() => ({
    type,
    item: { name }
  }), [name, type])

  return (
    <div ref={drag} role="Box" style={{ ...styleBox }}>
      {isDropped ? <s>{name}</s> : name}
    </div>
  )
}

export function Container({leads, setLeads}) {
  const handleDrop = useCallback((index, item) => {
    const { name } = item;

    const updatedLeads = leads.map(lead => {
      return lead.name === name ? { name, status: lead.status + 1 } : lead
    });

    setLeads(updatedLeads);
  }
  )

  return (
    <div>
      <table >
        <thead>
          <tr>
            <th>
              potencial
            </th>
            <th>
              dados confirmados
            </th>
            <th>
              pagamento
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {leads.map((lead, index) => {
            return (
              <tr key={index}>
                <td status={0}>
                  <Dustbin
                    accept={""}
                    onDrop={(item) => handleDrop(index, item)}
                    key={index}
                    lead={lead.status === 0 ? lead : undefined}
                    actualStage={"0"}
                    index={index}
                  />
                </td>
                <td status={1}>
                  <Dustbin
                    accept={"0"}
                    onDrop={(item) => handleDrop(index, item)}
                    key={index}
                    lead={lead.status === 1 ? lead : undefined}
                    actualStage={"1"}
                    index={index}
                  />
                </td>
                <td status={2}>
                  <Dustbin
                    accept={"1"}
                    onDrop={(item) => handleDrop(index, item)}
                    key={index}
                    lead={lead.status === 2 ? lead : undefined}
                    actualStage={"2"}
                    index={index}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
