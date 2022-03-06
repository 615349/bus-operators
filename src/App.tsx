import Header from 'Components/Header';
import OperatorList from 'Components/OperatorList';
import OperatorDetails from 'Components/OperatorDetails';
import useFetch from 'Utils/useFetch';
import { BusApiResponse } from 'Constants/types';
import { Wrapper, Main, Center } from './App.styles';
import { useState } from 'react';

function App() {
  const { data, error, loading } = useFetch<BusApiResponse>('bus-services.example.json');
  /**
   * showDetailsView indicates if we display the bus operator details view.
   * the initial value is false means it should not display details view
   */
  const [showDetailsView, setShowDetailsView] = useState<boolean>(false);
  /**
   * use activeOperatorId to identify which operator detail should be displayed.
   * its range should be from 0 to operators.length - 1
   * when the value is -1 means there is no bus details is selected
   */
  const [activeOperatorId, setActiveOperatorId] = useState<number>(-1);

  const onClickBusOperator = (_activeOperatorId: number) => {
    /**
     * argument is named as _activeOperatorId to avoid smell problem
     */
    setActiveOperatorId(_activeOperatorId);
    setShowDetailsView(true);
  };

  const onClickBack = () => {
    setActiveOperatorId(-1);
    setShowDetailsView(false);
  };

  return (
    <Wrapper>
      <Header />
      <Main>
        {error && (
          <Center>
            <h1>Something is wrong, please try again later.</h1>
          </Center>
        )}
        {loading && (
          <Center>
            <h1>Loading ...</h1>
          </Center>
        )}
        {!loading && !error && data && !showDetailsView && (
          <OperatorList
            operators={data.operators}
            onClickBusOperator={onClickBusOperator}
          />
        )}
        {!loading && !error && data && showDetailsView && (
          <OperatorDetails
            operator={data.operators[activeOperatorId]}
            localStorageKey={`operator-${activeOperatorId}`}
            onClickBack={onClickBack}
          />
        )}
      </Main>
    </Wrapper>
  );
}

export default App;
