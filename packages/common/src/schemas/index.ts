import gql from 'graphql-tag';
import query from './query';
import mutation from './mutations';
import types from './types';

export default gql`

	${types}	

  ${query}

	${mutation}

`
