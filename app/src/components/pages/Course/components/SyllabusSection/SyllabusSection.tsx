import React from 'react';
import { Paragraph, Header, Grid } from 'components/ui';
import styles from './SyllabusSection.module.css';
import { v4 as uuidv4 } from 'uuid';


interface Props {
    syllabus: Array<string>
}

export const SyllabusSection: React.FunctionComponent<Props> = ({ syllabus }): JSX.Element => {
    return (
        <Grid.Row>
            <Grid.Col>
                <Header>Course content:</Header>
                <ul className={styles.list}>
                    {syllabus?.map((item) => (
                        <li key={uuidv4()} className={styles.list_item}>
                            <Paragraph size="ml">{item}</Paragraph>
                        </li>
                    ))}
                </ul>
            </Grid.Col>
        </Grid.Row>
    )
}
