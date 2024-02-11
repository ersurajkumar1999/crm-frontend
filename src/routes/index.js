import { useRoutes } from 'react-router-dom';

import UserAuthenticationRoutes from './UserAuthenticationRoutes';
import UserRoutes from './UserRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([UserAuthenticationRoutes, UserRoutes]);
}
