import { useCallback } from 'react'
import { Column } from './Column'
import { useDrag } from 'react-dnd'

const styleBox = {
  border: '1px dashed gray',
  cursor: 'move',
}

export function Box({ name, type }) {
  const [, drag] = useDrag(() => ({
    type,
    item: { name }
  }), [name, type])

  return (
    <div ref={drag} role="Box" style={{ ...styleBox }}>
      {name}
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
  })

  return (
    <div>
      <table className="table" >
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
                  <Column
                    accept={""}
                    onDrop={(item) => handleDrop(index, item)}
                    key={index}
                    lead={lead.status === 0 ? lead : undefined}
                    actualStage={"0"}
                    index={index}
                  />
                  <Column
                    accept={"0"}
                    onDrop={(item) => handleDrop(index, item)}
                    key={index}
                    lead={lead.status === 1 ? lead : undefined}
                    actualStage={"1"}
                    index={index}
                  />
                  <Column
                    accept={"1"}
                    onDrop={(item) => handleDrop(index, item)}
                    key={index}
                    lead={lead.status === 2 ? lead : undefined}
                    actualStage={"2"}
                    index={index}
                  />
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
