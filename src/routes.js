import HomeMainSection from './Components/Dashboardpage/HomeMainSection';
import CodeIcon from '@mui/icons-material/Code';

const routes =
    [
        {
            id: 1,
            div: 'div1',
            name: "Cards",
            icon: <CodeIcon />,
            route: "/",
            component: <HomeMainSection />

        }
    ]

export default routes