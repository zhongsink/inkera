import React from 'react';
import { Switch } from 'react-router-dom';
import universal from 'react-universal-component';
import RouteWithSubRoutes from '../components/common/RouteWithSubRoutes';
import { listRepositories } from '../models/actions/repository';
import { parse } from '../../shared/utils/url';

export const routes = [
  {
    key: 'home',
    path: '/',
    exact: true,
    component: universal(import('../containers/Home')),
  },
  {
    key: 'question',
    path: '/question',
    exact: true,
    component: universal(import('../containers/Question')),
  },
  {
    key: 'recruit',
    path: '/recruit',
    exact: true,
    component: universal(import('../containers/Recruit')),
  },
  {
    key: 'login',
    path: '/login',
    exact: true,
    component: universal(import('../containers/Login')),
  },
  {
    key: 'article',
    path: '/article/:id',
    exact: true,
    component: universal(import('../containers/Acticle')),
  },
  {
    key: 'question_detail',
    path: '/question/:id',
    exact: true,
    component: universal(import('../containers/QuestionDetail')),
  },
  {
    key: 'recruit_Detail',
    path: '/recruit/:id',
    exact: true,
    component: universal(import('../containers/RecruitDetail')),
  },
  {
    key: 'user',
    path: '/user/profile',
    component: universal(import('../containers/Profile')),
  },
  {
    key: 'editor',
    path: '/editor/new',
    component: universal(import('../containers/Editor')),
  },
  {
    key: 'editor',
    path: '/editor/question',
    component: universal(import('../containers/EditorQuestion')),
  },
  {
    key: 'user',
    path: '/user/:hash',
    component: universal(import('../containers/UserDetail')),
  },
  {
    key: 'register',
    path: '/register',
    exact: true,
    component: universal(import('../containers/Register')),
  },
  {
    key: 'about',
    path: '/about',
    exact: true,
    component: universal(import('../containers/About')),
  },
  {
    key: 'repositories',
    path: '/repositories',
    component: universal(import('../containers/Repository')),
    load: (dispatch, url) => {
      const query = parse(url).query;
      return dispatch(listRepositories({ query }));
    },
  },
  {
    key: 'admin',
    path: '/jscode/admin',
    component: universal(import('../containers/Admin')),
  },
  {
    key: 'NoMatch',
    path: '*',
    component: universal(import('../containers/NoMatch')),
  },
];

export default () => (
  <Switch>
    { routes.map(route => <RouteWithSubRoutes {...route} />) }
  </Switch>
);

