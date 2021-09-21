import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import ClockingsList from '../components/clockings/ClockingsList';

const clocking = {
  id: 1,
  topic: 'topic 1',
  details: 'details 1',
  subject_id: 1,
};

test('should render the clockings list component', () => {
  const component = renderer.create(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ClockingsList
            id={clocking?.id}
            title={clocking?.topic}
            description={clocking?.details}
            clocking={clocking}
          />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
