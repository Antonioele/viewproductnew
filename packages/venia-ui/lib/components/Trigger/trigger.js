import React from 'react';
import { func, node, shape, string } from 'prop-types';

import { mergeClasses } from '../../classify';
import defaultClasses from './trigger.css';
import { PossibleFragmentSpreadsRule } from 'graphql/validation';

const Trigger = props => {
    const { action, children } = props;

    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div>
           
        <button className={classes.root} type="button" onClick={action}>
            {children}
        </button>
        </div>
    );
};

Trigger.propTypes = {
    action: func.isRequired,
    children: node,
    classes: shape({
        root: string
    })
};

export default Trigger;
