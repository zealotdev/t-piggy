export default function Account() {
  return (
    <tr>
      <td>
        <span className="mark"></span>
      </td>
      <td>
        House Rent
        <span>House rent account</span>
      </td>
      <td>$100</td>
      <td>$1000</td>
      <td>$10</td>
      <td>0</td>
      <td>
        $800
        <form>
          <input type="number" />
          <input type="submit" value="save" />
        </form>
      </td>
    </tr>
  );
}
