import PropTypes from "prop-types";
import { Suspense as SuspenseComponent } from "react";
const Suspense = ({ children }) => {
  return (
    <SuspenseComponent
      fallback={
        <div className="text-center h-full flex items-center justify-center min-h-screen">
          <p>lLoading...</p>
        </div>
      }
    >
      {children}
    </SuspenseComponent>
  );
};
Suspense.propTypes = {
  children: PropTypes.element,
};
export default Suspense;
