import React from 'react';

import { Router, Stack, Scene } from 'react-native-router-flux';
import ExamplePage from './pages/ExamplePage';

export default props => (
    <Router>
        <Stack key="root">
            <Scene key="ExamplePage" component={ ExamplePage } initial hideNavBar />
        </Stack>
    </Router>
);