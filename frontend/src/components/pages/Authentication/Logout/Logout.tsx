import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLayout } from 'components/layouts'
import { Buttons } from './components'
import { Paragraph, Button, Grid } from 'components/ui'
import { useSelector } from 'react-redux'
import { AppStateType } from 'redux/rootReducer'
import { useDocTitle } from 'components/hooks'
import { TITLE_PREFIX } from 'constants/common'
import { LOGIN_URL } from 'constants/urls'

export const LogoutPage: React.FunctionComponent = (): JSX.Element => {

    useDocTitle(TITLE_PREFIX + 'User logout')

    const isLoaded = useSelector((state: AppStateType) => state.userAuth.isLoaded)

    return (
        <AuthLayout>
            { isLoaded ? 
                <>
                    <Grid.Row>
                        <Grid.Col>
                            <Paragraph align="center" size="l" marginBottom="l">Are you sure you want to log out?</Paragraph>
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Row>    
                        <Grid.Col>
                            <Buttons />
                        </Grid.Col>
                    </Grid.Row>
                </> :
                <>
                    <Grid.Row>
                        <Grid.Col align="center">
                            <Paragraph align="center" size="l" marginBottom="l">You are not logged in yet</Paragraph>
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Col align="center">
                            <Link to={LOGIN_URL}>
                                <Button design="primary">Log In</Button>
                            </Link>
                        </Grid.Col>
                    </Grid.Row>
                </>
            }
        </AuthLayout>
    )
}
