import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';
import SubjectList from '../components/subjects/SubjectList';

const subject = {
  id: 1,
  title: 'title 1',
  description: 'description 1',
};

test('should render the subject list component', () => {
  const component = renderer.create(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <SubjectList
            id={subject?.id}
            title={subject?.title}
            description={subject?.description}
          />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('<SubjectList />', () => {
  let component;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <SubjectList
              id={subject?.id}
              title={subject?.title}
              description={subject?.description}
            />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  });

  test('Should have heading', () => {
    component.getByText('Subjects');
  });
});
