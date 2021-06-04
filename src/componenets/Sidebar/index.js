import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SideBtnWrap,SidebarLink,SidebarRoute,SideBarMenu} from './SidebarElements'

const SideBar = ({isOpen,toogle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toogle}>
            <Icon onClick = {toogle}>
                <CloseIcon>

                </CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SideBarMenu>
                    <SidebarLink to ="about">
                            About
                    </SidebarLink>
                    <SidebarLink to ="about">
                            Discover
                    </SidebarLink>
                    <SidebarLink to ="about">
                            Services
                    </SidebarLink>
                    <SidebarLink to ="about">
                            Sign Up
                    </SidebarLink>
                  
                </SideBarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = "/signIn">
                        SignIn
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
