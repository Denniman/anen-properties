import React, { lazy } from 'react';
import { HeaderNav } from './HeaderNav'

import { HomeComponentProps } from './types';

import { PageHeading } from './styles';

const Layout = lazy(() => import('../components/Layout'));

const Home: React.FC<HomeComponentProps> = () => {
    return (
        <Layout>
            <HeaderNav />
        <PageHeading>Home Page</PageHeading>
        </Layout>
    )
}

export default Home;