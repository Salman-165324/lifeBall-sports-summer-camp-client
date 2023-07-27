
const EnrolledClassTableRow = ({ singleClass, index }) => {
  const { image, className, instructorName, price } = singleClass;
  return (
    <tr>
      <th>
        <label>{index}</label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{className}</div>
          </div>
        </div>
      </td>
      <td>{instructorName}</td>
      <td>{price}</td>
    </tr>
  );
};

export default EnrolledClassTableRow;
