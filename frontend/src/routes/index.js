import { createBrowserRouter } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import MainPage from 'pages/MainPage/MainPage';
import NotFound from 'pages/NotFound/NotFound';
import SearchResult from 'pages/SearchResultPage/SearchResult';
import TimeLine from 'pages/TimeLine/TimeLine';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />, // 라우터에 없는 경로로 이동시 NotFound 컴포넌트 화면에 띄운다.
    children: [
      { path: 'searchresult', element: <SearchResult /> },
      { path: 'timeline/:keyword', element: <TimeLine /> },
    ],
  },
  {
    path: '/',
    children: [{ index: true, path: '/', element: <MainPage /> }],
  },
]);

export default router;
