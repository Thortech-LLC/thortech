export const pageRoutes = Object.freeze({
  privacy: 'privacy',
  terms: 'terms',
  pcs: 'pcs',
  consoles: 'consoles',
});

export function getRouteFromHash(hash) {
  const route = hash.replace(/^#/, '');
  return pageRoutes[route] || 'home';
}

export function getAnchorFromHash(hash) {
  const route = hash.replace(/^#/, '');
  return pageRoutes[route] ? null : route;
}
