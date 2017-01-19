'use strict';

import Debug from 'debug';
import App from '../../app';
import React from 'react';
import { render } from 'react-dom';

let debug = Debug('risk:client:main');


render(<App/>, document.getElementById('app'));