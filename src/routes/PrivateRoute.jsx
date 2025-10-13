import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function PrivateRoute({ children, allowedRoles }) {
  const { user } = useContext(UserContext);
  const location = useLocation();
  
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ desdeProtegida: location.pathname }} // ← esto permite que Login sepa desde dónde vino
      />
    );
  };

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/no-autorizado" replace />;
  };

  return children;
};

export default PrivateRoute;

