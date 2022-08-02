/*
 * Copyright 2020 Verizon Media
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import Header from '../../../../../components/header/Header';
import UserDomains from '../../../../../components/domain/UserDomains';
import API from '../../../../../api';
import styled from '@emotion/styled';
import Head from 'next/head';

import CollectionDetails from '../../../../../components/header/CollectionDetails';
import CollectionHistoryList from '../../../../../components/history/CollectionHistoryList';
import RoleTabs from '../../../../../components/header/RoleTabs';
import NameHeader from '../../../../../components/header/NameHeader';
import RequestUtils from '../../../../../components/utils/RequestUtils';
import Error from '../../../../_error';
import { selectIsLoading } from '../../../../../redux/selectors/loading';
import { getDomainData } from '../../../../../redux/thunks/domain';
import { connect } from 'react-redux';
import {
    selectRole,
    selectRoleHistory,
} from '../../../../../redux/selectors/roles';
import { getRole } from '../../../../../redux/thunks/roles';

const AppContainerDiv = styled.div`
    align-items: stretch;
    flex-flow: row nowrap;
    height: 100%;
    display: flex;
    justify-content: flex-start;
`;

const MainContentDiv = styled.div`
    flex: 1 1 calc(100vh - 60px);
    overflow: hidden;
    font: 300 14px HelveticaNeue-Reg, Helvetica, Arial, sans-serif;
`;

const RolesContainerDiv = styled.div`
    align-items: stretch;
    flex: 1 1;
    height: calc(100vh - 60px);
    overflow: auto;
    display: flex;
    flex-direction: column;
`;

const RolesContentDiv = styled.div``;

const PageHeaderDiv = styled.div`
    background: linear-gradient(to top, #f2f2f2, #fff);
    padding: 20px 30px 0;
`;

export async function getServerSideProps(context) {
    let api = API(context.req);
    let reload = false;
    let notFound = false;
    let error = null;
    const historyData = await Promise.all([api.getForm()]).catch((err) => {
        let response = RequestUtils.errorCheckHelper(err);
        reload = response.reload;
        error = response.error;
        return [{}, {}, {}, {}, {}, {}];
    });
    return {
        props: {
            reload,
            notFound,
            error,
            domainName: context.query.domain,
            roleName: context.query.role,
            userName: context.req.session.shortId,
            _csrf: historyData[0],
            nonce: context.req.headers.rid,
        },
    };
}

class RoleHistoryPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { domainName, userName, getDomainData, roleName, getRole } =
            this.props;
        getDomainData(domainName, userName);
        getRole(domainName, roleName);
    }

    render() {
        const {
            domainName,
            reload,
            roleDetails,
            roleName,
            historyRows,
            _csrf,
            isLoading,
        } = this.props;
        if (reload) {
            window.location.reload();
            return <div />;
        }
        if (this.props.error) {
            return <Error err={this.props.error} />;
        }
        return isLoading.length !== 0 ? (
            <h1>Loading...</h1>
        ) : (
            <div data-testid='role-history'>
                <Head>
                    <title>Athenz</title>
                </Head>
                <Header showSearch={true} />
                <MainContentDiv>
                    <AppContainerDiv>
                        <RolesContainerDiv>
                            <RolesContentDiv>
                                <PageHeaderDiv>
                                    <NameHeader
                                        category={'role'}
                                        domain={domainName}
                                        collection={roleName}
                                        collectionDetails={roleDetails}
                                    />
                                    <CollectionDetails
                                        collectionDetails={roleDetails}
                                        _csrf={_csrf}
                                    />
                                    <RoleTabs
                                        domain={domainName}
                                        role={roleName}
                                        selectedName={'history'}
                                    />
                                </PageHeaderDiv>
                                <CollectionHistoryList
                                    domain={domainName}
                                    collection={roleName}
                                    historyrows={historyRows}
                                    category={'role'}
                                    _csrf={_csrf}
                                />
                            </RolesContentDiv>
                        </RolesContainerDiv>
                        <UserDomains domain={domainName} />
                    </AppContainerDiv>
                </MainContentDiv>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        isLoading: selectIsLoading(state),
        roleDetails: selectRole(state, props.domainName, props.roleName),
        historyRows: selectRoleHistory(state, props.domainName, props.roleName),
    };
};

const mapDispatchToProps = (dispatch) => ({
    getDomainData: (domainName, userName) =>
        dispatch(getDomainData(domainName, userName)),
    getRole: (domainName, roleName) => dispatch(getRole(domainName, roleName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleHistoryPage);
