import React, { useState } from 'react'

interface Props {

}

export const NavBar = (props: Props) => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                <div className="container">

                    <a className="navbar-brand" href="#">MusicApp</a>

                    <button className="navbar-toggler" type="button" onClick={() => setCollapsed(prev => !prev)}
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={"collapse navbar-collapse " + (collapsed ? '' : 'show')}>
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link" href="/playlists" >Playlists</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/search">Search</a>
                            </li>
                            <LinkDecorator to="/playlists" className="nav-link" />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export const LinkDecorator: React.FC<
    { to: string } & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({
    to,
    children,
    ...linkProps
}) => {
        return <a {...linkProps} href={to} onClick={e => {
            e.preventDefault()

            linkProps.onClick && linkProps.onClick(e);

            history.pushState('', '', to)
        }} >{children}</a>
    }