import {Menu} from 'antd';
import Link from "next/link";
import {AppstoreAddOutlined, LoginOutlined, UserAddOutlined} from "@ant-design/icons";
const {Item} = Menu;
const TopNav = () => {
    return (
       <Menu mode="horizontal">
       <Item icon={<AppstoreAddOutlined/>}>
        <Link href="/">
        <h5>App</h5>
        </Link>
       </Item>
       
       <Item icon={<LoginOutlined/>}>
            <Link href="/login"> 
            <h5>Login</h5>
            </Link>
       </Item>
       <Item icon={<UserAddOutlined/>}>
            <Link href="/register"> 
            <h5>Register</h5>
            </Link>
       </Item>
       </Menu>
    );
};
export default TopNav;