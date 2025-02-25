/*
 * Copyright The Athenz Authors
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
import GroupTable from '../../../components/group/GroupTable';
import API from '../../../api';
import { renderWithRedux } from '../../../tests_utils/ComponentsTestUtils';

describe('GroupTable', () => {
    it('should render', () => {
        let domains = [];
        let groups = [];
        domains.push('dom1');
        domains.push('dom2');
        domains.push('dom3');
        domains.push('dom4');
        let group1 = {
            name: 'a',
        };

        let group2 = {
            name: 'b',
        };
        groups.push(group1);
        groups.push(group2);
        const { getByTestId } = renderWithRedux(
            <GroupTable groups={groups} domain={domains} />
        );
        const grouptable = getByTestId('grouptable');

        expect(grouptable).toMatchSnapshot();
    });
});
