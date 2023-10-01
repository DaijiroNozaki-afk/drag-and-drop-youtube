import { Link, Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
      <h2>Beautiful dnd test</h2>
      <Link to="/draganddrop" className="p-header-link">
        DragAndDrop
      </Link>
      <Link to="/verticallist" className="p-header-link">
        VerticalList
      </Link>
      <Link to="/taskapp" className="p-header-link">
        TaskApp
      </Link>
      <div className="u-mb-10"></div>
      <Outlet />
    </>
  );
}

export default AppLayout;
