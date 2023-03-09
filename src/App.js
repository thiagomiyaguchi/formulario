import BuscaAluno from './components/BuscaAluno';
import Formulario from './components/Formulario';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        {/* <Formulario /> */}
        <BuscaAluno />
      </QueryClientProvider>
    </div>
  );
}

export default App;
