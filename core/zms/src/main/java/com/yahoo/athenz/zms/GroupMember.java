//
// This file generated by rdl 1.5.2. Do not modify!
//

package com.yahoo.athenz.zms;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.yahoo.rdl.*;

//
// GroupMember -
//
@JsonIgnoreProperties(ignoreUnknown = true)
public class GroupMember {
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public String memberName;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public String groupName;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public String domainName;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public Timestamp expiration;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public Boolean active;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public Boolean approved;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public String auditRef;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public Timestamp requestTime;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public Timestamp lastNotifiedTime;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public String requestPrincipal;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public Timestamp reviewLastNotifiedTime;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public Integer systemDisabled;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public Integer principalType;
    @RdlOptional
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    public String pendingState;

    public GroupMember setMemberName(String memberName) {
        this.memberName = memberName;
        return this;
    }
    public String getMemberName() {
        return memberName;
    }
    public GroupMember setGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    public String getGroupName() {
        return groupName;
    }
    public GroupMember setDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    public String getDomainName() {
        return domainName;
    }
    public GroupMember setExpiration(Timestamp expiration) {
        this.expiration = expiration;
        return this;
    }
    public Timestamp getExpiration() {
        return expiration;
    }
    public GroupMember setActive(Boolean active) {
        this.active = active;
        return this;
    }
    public Boolean getActive() {
        return active;
    }
    public GroupMember setApproved(Boolean approved) {
        this.approved = approved;
        return this;
    }
    public Boolean getApproved() {
        return approved;
    }
    public GroupMember setAuditRef(String auditRef) {
        this.auditRef = auditRef;
        return this;
    }
    public String getAuditRef() {
        return auditRef;
    }
    public GroupMember setRequestTime(Timestamp requestTime) {
        this.requestTime = requestTime;
        return this;
    }
    public Timestamp getRequestTime() {
        return requestTime;
    }
    public GroupMember setLastNotifiedTime(Timestamp lastNotifiedTime) {
        this.lastNotifiedTime = lastNotifiedTime;
        return this;
    }
    public Timestamp getLastNotifiedTime() {
        return lastNotifiedTime;
    }
    public GroupMember setRequestPrincipal(String requestPrincipal) {
        this.requestPrincipal = requestPrincipal;
        return this;
    }
    public String getRequestPrincipal() {
        return requestPrincipal;
    }
    public GroupMember setReviewLastNotifiedTime(Timestamp reviewLastNotifiedTime) {
        this.reviewLastNotifiedTime = reviewLastNotifiedTime;
        return this;
    }
    public Timestamp getReviewLastNotifiedTime() {
        return reviewLastNotifiedTime;
    }
    public GroupMember setSystemDisabled(Integer systemDisabled) {
        this.systemDisabled = systemDisabled;
        return this;
    }
    public Integer getSystemDisabled() {
        return systemDisabled;
    }
    public GroupMember setPrincipalType(Integer principalType) {
        this.principalType = principalType;
        return this;
    }
    public Integer getPrincipalType() {
        return principalType;
    }
    public GroupMember setPendingState(String pendingState) {
        this.pendingState = pendingState;
        return this;
    }
    public String getPendingState() {
        return pendingState;
    }

    @Override
    public boolean equals(Object another) {
        if (this != another) {
            if (another == null || another.getClass() != GroupMember.class) {
                return false;
            }
            GroupMember a = (GroupMember) another;
            if (memberName == null ? a.memberName != null : !memberName.equals(a.memberName)) {
                return false;
            }
            if (groupName == null ? a.groupName != null : !groupName.equals(a.groupName)) {
                return false;
            }
            if (domainName == null ? a.domainName != null : !domainName.equals(a.domainName)) {
                return false;
            }
            if (expiration == null ? a.expiration != null : !expiration.equals(a.expiration)) {
                return false;
            }
            if (active == null ? a.active != null : !active.equals(a.active)) {
                return false;
            }
            if (approved == null ? a.approved != null : !approved.equals(a.approved)) {
                return false;
            }
            if (auditRef == null ? a.auditRef != null : !auditRef.equals(a.auditRef)) {
                return false;
            }
            if (requestTime == null ? a.requestTime != null : !requestTime.equals(a.requestTime)) {
                return false;
            }
            if (lastNotifiedTime == null ? a.lastNotifiedTime != null : !lastNotifiedTime.equals(a.lastNotifiedTime)) {
                return false;
            }
            if (requestPrincipal == null ? a.requestPrincipal != null : !requestPrincipal.equals(a.requestPrincipal)) {
                return false;
            }
            if (reviewLastNotifiedTime == null ? a.reviewLastNotifiedTime != null : !reviewLastNotifiedTime.equals(a.reviewLastNotifiedTime)) {
                return false;
            }
            if (systemDisabled == null ? a.systemDisabled != null : !systemDisabled.equals(a.systemDisabled)) {
                return false;
            }
            if (principalType == null ? a.principalType != null : !principalType.equals(a.principalType)) {
                return false;
            }
            if (pendingState == null ? a.pendingState != null : !pendingState.equals(a.pendingState)) {
                return false;
            }
        }
        return true;
    }

    //
    // sets up the instance according to its default field values, if any
    //
    public GroupMember init() {
        if (active == null) {
            active = true;
        }
        if (approved == null) {
            approved = true;
        }
        return this;
    }
}
