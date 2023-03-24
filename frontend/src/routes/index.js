import { createBrowserRouter } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import MainPage from 'pages/MainPage/MainPage';
import NotFound from 'pages/NotFound/NotFound';
// import ArticlePage from 'pages/ArticlePage/ArticlePage';
import SearchResult from 'pages/SearchResultPage/SearchResult';
import LoginLayout from 'layouts/LoginLayout';
import Login from 'pages/Login/Login';
// import KakaoLogin from 'pages/Login/SNSLogin/Kakao/KakaoLogin';
import GoogleLogin from 'pages/Login/SNSLogin/Google/GoogleLogin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />, // 라우터에 없는 경로로 이동시 NotFound 컴포넌트 화면에 띄운다.
    children: [
      // { path: 'article', element: <ArticlePage /> },
      { path: 'searchresult', element: <SearchResult /> },
    ],
  },
  {
    path: '/',
    children: [{ index: true, path: '/', element: <MainPage /> }],
  },
  {
    path: '/login',
    element: <LoginLayout />,
    errorElement: <giNotFound />,
    children: [
      { index: true, element: <Login /> },
      // { path: 'kakao', element: <KakaoLogin /> },
      { path: 'google', element: <GoogleLogin /> },
    ],
  },
]);

export default router;
