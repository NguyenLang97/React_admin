import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import './widget.scss';

const Widget = ({ type }) => {
    return (
        <div className="widget">
            <div className="left">
                <span className="title">USERS</span>
                <span className="couter">21312</span>
                <span className="link">Sell all user</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20 %
                </div>
                <PersonOutlinedIcon className="icon" />
            </div>
        </div>
    );
};

export default Widget;
