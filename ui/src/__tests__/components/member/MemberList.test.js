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
import { render } from '@testing-library/react';
import MemberList from '../../../components/member/MemberList';
import API from '../../../api';
import { renderWithRedux } from '../../../tests_utils/ComponentsTestUtils';

describe('MemberList', () => {
    it('should render', () => {
        let members = [];
        let domain = 'domain';
        let role = 'roleName';
        const roleDetails = {
            trust: null,
            reviewEnabled: true,
            selfServe: true,
            isDomainAuditEnabled: true,
        };
        let user1 = {
            memberName: 'user1',
            approved: true,
        };
        let user2 = {
            memberName: 'user2',
            approved: false,
        };
        let user3 = {
            memberName: 'user3',
            approved: false,
        };
        let user4 = {
            memberName: 'user4',
            approved: true,
        };
        members.push(user1);
        members.push(user2);
        members.push(user3);
        members.push(user4);

        const { getByTestId } = renderWithRedux(
            <MemberList
                domain={domain}
                collection={role}
                collectionDetails={roleDetails}
                members={members}
            />
        );
        const memberlist = getByTestId('member-list');

        expect(memberlist).toMatchSnapshot();
    });
    it('should render delegated role', () => {
        let members = [];
        let domain = 'domain';
        let role = 'roleName';
        const roleDetails = {
            trust: 'domain.delegated',
            reviewEnabled: false,
            selfServe: true,
            isDomainAuditEnabled: true,
        };
        let user1 = {
            memberName: 'user1',
            approved: true,
        };
        let user2 = {
            memberName: 'user2',
            approved: false,
        };
        let user3 = {
            memberName: 'user3',
            approved: false,
        };
        let user4 = {
            memberName: 'user4',
            approved: true,
        };
        members.push(user1);
        members.push(user2);
        members.push(user3);
        members.push(user4);

        const { getByTestId } = renderWithRedux(
            <MemberList
                domain={domain}
                collection={role}
                collectionDetails={roleDetails}
                members={members}
            />
        );
        const memberlist = getByTestId('member-list');

        expect(memberlist).toMatchSnapshot();
    });
});
