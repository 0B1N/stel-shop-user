import styled from "styled-components";

type TableProps = {
  className?: string;
  data: Record<string, string>;
};

function Table({ className, data }: TableProps) {
  return (
    <table className={className}>
      <tbody>
        {Object.keys(data).map((key) => (
          <tr>
            <th>{key}</th>
            <td>{data[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default styled(Table)`
  tbody {
    tr {
      th {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.571428571428571rem;
        letter-spacing: -0.014285714285714287rem;
        height: 1.571428571428571rem;
        text-align: left;
        vertical-align: top;
        padding: 0.2857142857142857rem 0;
        min-width: 8rem;
        color: #a2a2a2;
      }

      td {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.571428571428571rem;
        letter-spacing: -0.014285714285714287rem;
        height: 1.571428571428571rem;
        text-align: left;
        vertical-align: top;
        padding: 0.2857142857142857rem 0;
      }
    }
  }
`;
