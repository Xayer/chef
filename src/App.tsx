import { HashRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import Routes from "./Routes";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes />
      </Router>
    </QueryClientProvider>
  );
}
