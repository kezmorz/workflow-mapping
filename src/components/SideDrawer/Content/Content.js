import React, { Fragment } from 'react';
import Section from './Section/Section';

const content = (props) => {
    const description = (
        <Section heading={'Description'}>
            <p>{props.information.description}</p>
        </Section>
    );
    const prerequisite = (props.information.prerequisite.length > 0) && (
        <Section heading={'Prerequisite Steps'}>
            <ul>
                {props.information.prerequisite.map(step => (
                    <li key={step}>{step}</li>
                ))}
            </ul>
        </Section>
    )
    const pcf = (props.information.pcf.length > 0) && (
        <Section heading={'PCF Products'}>
            <ul>
                {props.information.pcf.map(product => (
                    <li key={product}>{product}</li>
                ))}
            </ul>
        </Section>
    )
    const hyperlinks = (props.information.hyperlinks.length > 0) && (
        <Section heading={'Hyperlinks'}>
            <ul>
                {props.information.hyperlinks.map(link => (
                    <li key={link}>
                        <a href={link}>{link}</a>
                    </li>
                ))}
            </ul>
        </Section>
    )
    return (
        <Fragment>
            {description}
            {prerequisite}
            {pcf}
            {hyperlinks}
        </Fragment>
    )
}

export default content;