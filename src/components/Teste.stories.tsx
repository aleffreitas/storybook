import { action } from '@storybook/addon-actions';

import { Teste } from './Teste';

export default {
  component: Teste,
  title: 'Teste',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const testeData = {
  id: '1',
  title: 'Test Teste',
  state: 'TESTE_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('onPinTeste'),
  onArchiveTask: action('onArchiveTeste'),
};

export const Default = () => <Teste teste={{ ...testeData }} {...actionsData} />;

export const Pinned = () => <Teste teste={{ ...testeData, state: 'TESTE_PINNED' }} {...actionsData} />;

export const Archived = () => (
  <Teste teste={{ ...testeData, state: 'TESTE_ARCHIVED' }} {...actionsData} />
);