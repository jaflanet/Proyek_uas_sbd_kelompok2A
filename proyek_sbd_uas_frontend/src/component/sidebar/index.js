import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarWrapper}from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/">
                        PUBG
                    </SidebarLink>
                    <SidebarLink to="/">
                        Valo
                    </SidebarLink>
                    <SidebarLink to="/">
                        ML
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>    
    )
}

export default Sidebar
