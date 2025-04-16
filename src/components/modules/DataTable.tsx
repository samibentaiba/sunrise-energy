interface DataTableRow {
    label: string
    description: string
  }
  
  interface DataTableProps {
    rows: DataTableRow[]
    headerLabels?: {
      label: string
      description: string
    }
  }
  
  export default function DataTable({ rows, headerLabels }: DataTableProps) {
    return (
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          {headerLabels && (
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">{headerLabels.label}</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">{headerLabels.description}</th>
              </tr>
            </thead>
          )}
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className={index % 2 === 1 && !headerLabels ? "bg-gray-50" : undefined}>
                <td className={`border border-gray-300 px-4 py-2 ${!headerLabels ? "font-medium bg-gray-50 w-1/3" : ""}`}>
                  {row.label}
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  