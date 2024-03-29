import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { Price } from './components'
import { Paragraph, Button, Grid } from 'components/ui'
import { Icon } from 'components/common'
import { PAYMENT_URL } from 'constants/urls'
import styles from './PricingCard.module.css'

interface Props {
    title: string
    price: string
    icon: string
    features: Array<string>
}

export const PricingCard: React.FunctionComponent<Props> = ({ title, price, features, icon }): JSX.Element => {
    return (
        <div className={styles.root}>
            <Paragraph size="xxl" align="center" marginTop="l">{title}</Paragraph>
            <Price price={price}/>
            <Icon type={`${icon}`} size="xl"/>
            <Grid.Row marginTop="l">
                <Link to={PAYMENT_URL} className={styles.link}>
                    <Button design="primary" rounded>Get Started</Button>            
                </Link>
            </Grid.Row>
            <ul className={styles.list}>
                {features.map(feature => (
                    <li key={uuidv4()} className={styles.list_item}>
                        <Paragraph size="l">{feature}</Paragraph>
                    </li>
                ))}
            </ul>
        </div>
    )
}