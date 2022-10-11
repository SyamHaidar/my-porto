import Layout from './Layout'

// Components
import FlutterCard from '../components/card/FlutterCard'
import UnityCard from '../components/card/UnityCard'
import ReactCard from '../components/card/ReactCard'

const Home = () => {
    return (
        <Layout>
            <h1 className='text-xl mt-8 mb-4'>Unity</h1>
            <UnityCard />

            <h1 className='text-xl mt-8 mb-4'>Flutter</h1>
            <FlutterCard />

            <h1 className='text-xl mt-8 mb-4'>React</h1>
            <ReactCard />
        </Layout>
    );
}

export default Home;