import './Dashboard.css'
import Notification from '../../images/notification.png'
import Menu from '../../images/menu.png'
import Support from '../../images/support.png'
import Logout from '../../images/logout.png'
import Profile from '../../images/profile.png'
import QuestionConatiner from './QuestionContainer'

export default function Dashboard(){
    return(
        <div className="dashboard-container">
            <div className="dashboard-slider">
                <div className='slider-top'>
                    <div className='slider-title'>
                        Colan Time
                    </div>

                    <div className='slider-menu'>
                        <div className='slider-item current'>
                            <img src={Menu} alt='D'/>
                            <span>Dashboard</span>
                        </div>
                        <div className='slider-item'>
                            <img src={Support} alt='S'/>
                            <span>Support</span>
                        </div>
                        <div className='slider-item'>
                            <img src={Notification} alt='N'/>
                            <span>Notification</span>
                        </div>
                    </div>
                </div>

                <div className='slider-bottom'>
                    <div className='slider-item'>
                        <img src={Logout} alt='N'/>
                        <span>Log Out</span>
                    </div>
                </div>

            </div>
            <div className="dashboard-main">
                <div className='dashboard-toolbar'>
                    <div className='dashboard-profile'>
                        <img className='profile-img' src={Profile} alt=''/>
                        <span>Fardeen S</span>
                    </div>
                </div>
                <div className='question-container'>
                    <QuestionConatiner/>
                </div>
            </div>
        </div>
    )
}

