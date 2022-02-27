import compose from 'compose-function';
import {withNavigationContainer} from './with-navigation-container';
import {withProvider} from './with-provider';

export const withProviders = compose(withNavigationContainer, withProvider);
