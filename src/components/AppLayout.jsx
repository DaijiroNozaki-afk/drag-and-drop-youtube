import { Link, Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
      <h2>Header</h2>
      <Link to="/draganddrop">DragAndDrop</Link>
      <Link to="/verticallist">VerticalList</Link>
      <Outlet />
    </>
  );
}

export default AppLayout;
