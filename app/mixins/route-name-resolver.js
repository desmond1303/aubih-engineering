import Ember from 'ember';
import RouteTitles from 'engineering/configuration/route-titles';

function _resolveRouteTitles(current, routes, offset) {
  let routeTitles = {};

  if (current && routes) {
    let index = routes.indexOf(current);
    if (offset < index + 1) {
      routes = _getRoutePaths(routes.slice(0, index + 1)).slice(offset);
      routeTitles = _arrayToObject(routes);
    }
  }

  if (routeTitles) {
    return routeTitles;
  }
}

function _arrayToObject(array) {
  return _arrayToObjectRecursive(array[0], array);
}

function _arrayToObjectRecursive(current, array, result) {
  if (!result) {
    result = {};
  }

  let currentIndex = array.indexOf(current);

  let currentName = current.split('.');
  result = {
    title: _resolveRouteTitle(current),
  };

  if (currentIndex < array.length - 1) {
    result.hasChild = true;
    result.child = _arrayToObjectRecursive(array[currentIndex + 1], array, array[currentName[currentName.length - 1]]);
  }

  return result;
}

function _getRoutePaths(routeNames) {
  return _getRouteNamesRecursive(routeNames[0], routeNames);
}

function _getRouteNamesRecursive(currentRoute, routes, result) {
  if (!result) {
    result = [];
  }

  let currentIndex = routes.indexOf(currentRoute);
  let currentPath = '';
  for (let i = 0; i <= currentIndex; i++) {
    if (i > 0) {
      currentPath += '.';
    }

    currentPath += routes[i];
  }

  result.push(currentPath);
  if (currentIndex < routes.length - 1) {
    return _getRouteNamesRecursive(routes[currentIndex + 1], routes, result);
  }

  return result;
}

function _resolveRouteTitle(routePath) {
  let parts = routePath.split('.');
  let routeTitle = RouteTitles;
  parts.forEach(part => {
    routeTitle = routeTitle[part];
  });

  return routeTitle.title;
}

export default Ember.Mixin.create({

  resolveRouteTitles: function (current, routes, offset) {
    return _resolveRouteTitles(current, routes, offset);
  },

});
