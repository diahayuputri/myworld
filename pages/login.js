import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Jumbotron from '../components/jumbotron'
import Article from '../components/article'
import Pagination from '../components/pagination';
import Sidebar from '../components/sidebar';
import Layout from '../components/layout';

  export default function Login() {
    return (
    <Layout>

    <div className="row">
      <div className="col-md-8">
        <h3 className="pb-4 mb-4 fst-italic border-bottom">
          From the Firehose
        </h3>

      </div>

    <Sidebar/>
    </div>
  </Layout>
    )
  }
