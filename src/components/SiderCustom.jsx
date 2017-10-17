import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'react-router';

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

class SiderCustom extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: '',
        firstHide: true,        // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
    };

    componentDidMount() {
        this.setMenuOpen(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
        this.setMenuOpen(nextProps)
    }

    setMenuOpen = props => {
        const {path} = props;
        this.setState({
            openKey: path.substr(0, path.lastIndexOf('/')),
            selectedKey: path
        });
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            firstHide: collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log(this.state);
        const {popoverHide} = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
    openMenu = v => {
        console.log(v);
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };

    render() {
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsed={this.props.collapsed}
                style={{overflowY: 'auto'}}
            >
                <div className="logo"/>
                <Menu
                    onClick={this.menuClick}
                    theme="dark"
                    mode="inline"
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={this.state.firstHide ? null : [this.state.openKey]}
                    onOpenChange={this.openMenu}
                >
                    <Menu.Item key="page/app/dashboard/index">
                        <Link to={'page/app/dashboard/index'}><Icon type="mobile"/><span className="nav-text">首页</span></Link>
                    </Menu.Item>
                    <SubMenu
                        key="page/app/ui"
                        title={<span><Icon type="scan"/><span className="nav-text">UI</span></span>}
                    >

                        <Menu.Item key="page/app/ui/buttons"><Link to={'page/app/ui/buttons'}>按钮</Link></Menu.Item>
                        <Menu.Item key="page/app/ui/icons"><Link to={'page/app/ui/icons'}>图标</Link></Menu.Item>
                        <Menu.Item key="page/app/ui/spins"><Link to={'page/app/ui/spins'}>加载中</Link></Menu.Item>
                        <Menu.Item key="page/app/ui/modals"><Link to={'page/app/ui/modals'}>对话框</Link></Menu.Item>
                        <Menu.Item key="page/app/ui/notifications"><Link to={'page/app/ui/notifications'}>通知提醒框</Link></Menu.Item>
                        <Menu.Item key="page/app/ui/tabs"><Link to={'page/app/ui/tabs'}>标签页</Link></Menu.Item>
                        <Menu.Item key="page/app/ui/banners"><Link to={'page/app/ui/banners'}>轮播图</Link></Menu.Item>
                        <Menu.Item key="page/app/ui/wysiwyg"><Link to={'page/app/ui/wysiwyg'}>富文本</Link></Menu.Item>
                        <Menu.Item key="page/app/ui/drags"><Link to={'page/app/ui/drags'}>拖拽</Link></Menu.Item>
                        <Menu.Item key="page/app/ui/gallery"><Link to={'page/app/ui/gallery'}>画廊</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="page/app/animation"
                        title={<span><Icon type="rocket"/><span className="nav-text">动画</span></span>}
                    >

                        <Menu.Item key="page/app/animation/basicAnimations"><Link to={'page/app/animation/basicAnimations'}>基础动画</Link></Menu.Item>
                        <Menu.Item key="page/app/animation/exampleAnimations"><Link to={'page/app/animation/exampleAnimations'}>动画案例</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="page/app/table"
                        title={<span><Icon type="copy"/><span className="nav-text">表格</span></span>}
                    >

                        <Menu.Item key="page/app/table/basicTable"><Link to={'page/app/table/basicTable'}>基础表格</Link></Menu.Item>
                        <Menu.Item key="page/app/table/advancedTable"><Link to={'page/app/table/advancedTable'}>高级表格</Link></Menu.Item>
                        <Menu.Item key="page/app/table/asynchronousTable"><Link to={'page/app/table/asynchronousTable'}>异步表格</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="page/app/form"
                        title={<span><Icon type="edit"/><span className="nav-text">表单</span></span>}
                    >

                        <Menu.Item key="page/app/basicForm"><Link to={'page/app/form/basicForm'}>基础表单</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="page/app/chart"
                        title={<span><Icon type="area-chart"/><span className="nav-text">图表</span></span>}
                    >
                        <Menu.Item key="page/app/chart/echarts"><Link to={'page/app/chart/echarts'}>echarts</Link></Menu.Item>
                        <Menu.Item key="page/app/chart/recharts"><Link to={'page/app/chart/recharts'}>recharts</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="page/app/auth"
                        title={<span><Icon type="safety"/><span className="nav-text">权限管理</span></span>}
                    >
                        <Menu.Item key="page/app/auth/basic"><Link to={'page/app/auth/basic'}>基础演示</Link></Menu.Item>
                        <Menu.Item key="page/app/auth/routerEnter"><Link to={'page/app/auth/routerEnter'}>路由拦截</Link></Menu.Item>
                    </SubMenu>
                </Menu>
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
                </style>
            </Sider>
        )
    }
}

export default SiderCustom;