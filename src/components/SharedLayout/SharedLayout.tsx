import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <div>
      <Suspense fallback={<b>Load......</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;