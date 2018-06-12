import BaseRoute from './BaseRoute'
import AuthRoute from './AuthRoute'
import RouterInfos from '@/pages/routerInfos'
import First from '@/pages/first'
import Home from '@/pages/home'
import Login from '@/pages/login'
import React from 'react'

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/router-infos',
    component: RouterInfos,
    routes: [{
      path: '/router-infos/home',
      component: Home
    }]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/first',
    component: First,
    auth: {
      directedPath: '/login',
      auth: true
    }
  }
]

export const renderRoute = (routes) => {
  return routes.map((route, i) => {
    if (route.auth) {
      const { auth: {directedPath, auth}, ...rest } = route
      return (
        <AuthRoute
          key={i}
          {...rest}
          directedPath={directedPath}
          auth={auth} />
      )
    } else {
      return (<BaseRoute key={i} {...route} />)
    }
  })
}
