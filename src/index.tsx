import React from 'react';

import './index.css';
import {rerenderTree} from "./rerenderTree";
import {store} from "./state/State";


rerenderTree(store)
