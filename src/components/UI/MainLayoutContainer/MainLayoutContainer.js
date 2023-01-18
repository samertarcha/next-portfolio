import './MainLayoutContainer.scss';

const MainLayoutContainer = props => {
    return (
        <div className="mainLayoutContainer">{props.children}</div>
    )
}

export default MainLayoutContainer;