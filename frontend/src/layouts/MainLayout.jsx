import Footer from 'components/Common/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Container from 'containers/Container';
import { ToastContainer } from 'react-toastify';
import Header from 'components/Common/Header/Header';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles['layout-main']}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer position="bottom-center" limit={2} closeButton={false} autoClose={2000} hideProgressBar />
    </div>
  );
};

export default MainLayout;
